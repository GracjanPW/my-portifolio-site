import Image from "next/image";
import { Inter } from "next/font/google";
import client from "@/lib/GQLClient";
import { GET_HOME_PAGE_DATA } from "@/lib/queries";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";
import useScroll from "@/hooks/useScroll";
import { useEffect } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home({
  name,
  role,
  description,
  image,
  skills,
  careerDesc,
  interests,
}: any) {
  const scroll = useScroll();
  useEffect(() => {
    console.log(scroll);
  }, [scroll]);
  console.log(interests);
  return (
    <div className="overflow-y-scroll h-full">
      <section
        id="home"
        className="xl:h-[calc(100vh-70.4px)] lg:h-[calc(100vh-92.8px)] sm:h-[calc(100vh-131.2px)] h-[calc(100vh-92.8px)] mx-auto align-middle flex flex-col justify-center items-center text-text"
      >
        <div className="flex lg:flex-row mx-auto flex-col items-center h-fit lg:space-x-[10rem] sm:w-[80%] w-[90%] ">
          <div className="h-auto lg:max-w-[500px] sm:max-w-[400px] max-w-[300px]">
            <Image
            loader={() =>
              `${process.env.NEXT_PUBLIC_STRAPI_API_URL}${image.url}`
            }
            src={`${process.env.NEXT_PUBLIC_STRAPI_API_URL}${image.url}`}
            alt={image.alt}
            width={0}
            height={0}
            className="rounded-md shadow-avatar opacity-95 w-full h-full"
            unoptimized
          />
          </div>
          

          <div className="text-center lg:mx-auto">
            <h1 className="text-5xl font-bold lg:mt-0 mt-10">That's Me!</h1>
            <h2 className="text-3xl mt-5">
              <MDXRemote {...description} components={{}} />
            </h2>
          </div>
        </div>
        <div
          className={
            scroll < 5
              ? "absolute w-full bottom-0 left-0 p-4 flex ease-in transition-opacity duration-200 opacity-100 "
              : "ease-out transition-opacity duration-200 opacity-0 absolute w-full bottom-0 left-0 p-4 flex"
          }
        >
          <a
            href="#career"
            className="mx-auto border-black border rounded-full py-2 px-6 text-xl animate-pulse hover:animate-none"
          >
            Next
          </a>
        </div>
      </section>
      <section
        id="career"
        className="relative h-screen w-full flex flex-col justify-center items-center space-y-10 bg-career-section"
      >
        {/* Go Back button */}
        <div
          className={
            scroll < 55 && scroll >= 45
              ? "absolute w-full top-0 left-0 p-4 flex ease-in transition-opacity duration-200 opacity-100"
              : "ease-out transition-opacity duration-200 opacity-0 absolute w-full top-0 left-0 p-4 flex"
          }
        >
          <a
            href="#"
            className="mx-auto border-white text-white border rounded-full py-2 px-6 text-xl animate-pulse hover:animate-none"
          >
            Prev
          </a>
        </div>
        
        {/* Skill tags */}
        <div className="absolute top-10 left-10 flex flex-row justify-start w-full space-x-4">
          <div className="border-2 rounded-full border-white p-2 px-4 font-semibold text-white">
            Skills
          </div>
          {skills.map((skill:any,i:any) => (
            <div key={`${skill}-${i}`} className="border rounded-full border-white p-2 px-4 font-semibold text-white">
              {skill}
            </div>
          ))}
        </div>
        
        {/* Career Description */}
        <div className="flex lg:flex-row space-x-4 flex-col items-center justify-around lg:w-full h-fit sm:w-[80%] w-[90%] lg:mx-10 px-10">
          <div id="CareerDesc" className="text-white text-center flex-1">
            <MDXRemote {...careerDesc} components={{}} />
          </div>
          <Image
            src={"/code editor svg.svg"}
            alt="code editor"
            width={600}
            height={0}
            className="rounded-md shadow-lg opacity-95 hidden lg:block flex-1"
          />
        </div>

        {/* Next button */}
        <div
          className={
            scroll < 55 && scroll >= 45
              ? "absolute w-full bottom-0 left-0 p-4 flex ease-in transition-opacity duration-500 opacity-100 "
              : "ease-out transition-opacity duration-100 opacity-0 absolute w-full bottom-0 left-0 p-4 flex"
          }
        >
          <a
            href="#interests"
            className="mx-auto border-white text-white border rounded-full py-2 px-6 text-xl animate-pulse hover:animate-none"
          >
            Next
          </a>
        </div>
      </section>
      <section id="interests" className="relative h-[calc(100vh-4rem-10px)]">
        {/* Go Back button */}
        <div
          className={
            scroll > 95
              ? "absolute w-full top-0 left-0 p-4 flex ease-in transition-opacity duration-200 opacity-100 "
              : "ease-out transition-opacity duration-200 opacity-0 absolute w-full top-0 left-0 p-4 flex"
          }
        >
          <a
            href="#career"
            className="mx-auto border-black border rounded-full py-2 px-6 text-xl animate-pulse hover:animate-none"
          >
            Prev
          </a>
        </div>
        <div className="flex flex-col justify-center items-center h-full">
          <h1 className="text-5xl font-bold">Interests</h1>
          <div className="flex flex-row justify-center items-center space-x-10 mt-10">
            {interests.map((interest:any,i:any) => (
              <div className="flex flex-col justify-center items-center">
              <Image
                loader={() => `${process.env.NEXT_PUBLIC_STRAPI_API_URL}${interest.attributes.url}`}
                src={`${process.env.NEXT_PUBLIC_STRAPI_API_URL}${interest.attributes.url}`}
                alt="gaming"
                width={0}
                height={200}
                objectFit="fit"
                className="rounded-md shadow-lg opacity-95 h-[200px] w-auto"
              />
              <h2 className="text-3xl font-bold">{interest.attributes.caption}</h2>
            </div>
            ))}
            
            
          </div>
        </div>
      </section>
    </div>
  );
}

export async function getStaticProps() {
  const { data } = await client.query({
    query: GET_HOME_PAGE_DATA,
  });

  const attrs = data.home.data.attributes;
  const html1 = await serialize(attrs.description);
  const html2 = await serialize(attrs.careerDesc);
  return {
    props: {
      name: attrs.name,
      role: attrs.role,
      description: html1,
      careerDesc: html2,
      skills: attrs.skills.data,
      image: {
        url: attrs.image.data[0].attributes.url,
        alt: attrs.image.data[0].attributes.alternativeText,
      },
      interests: attrs.Interests.data,
    },
  };
}
