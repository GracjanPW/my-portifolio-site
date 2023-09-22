
import Image from "next/image";
import { Inter } from "next/font/google";
import LboroIcon from '@p/lboro.svg'

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="container-fluid md:mx-auto flex h-full items-center py-10">
      <div className="flex md:flex-row flex-col items-center w-full h-fit">
        <Image
          loader={()=>`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/uploads/Gracjan_c654061174.jpg`}
          src={`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/uploads/Gracjan_c654061174.jpg`}
          alt="Image of Gracjan Wojciechowski"
          className=" rounded-md object-cover  md:h-[400px] h-full w-auto shadow-lg"
          width={0}
                    height={0}
        />
        <div className="grow flex flex-col items-top justify-start h-full text-center pl-10 space-y-2">
          <div>
            <h1 className="text-3xl font-semibold">Gracjan Wojciechowski</h1>
          <h2 className="text-2xl font-semibold">Web Developer</h2>
          </div>
          
          <p className=" text-lg">
          Graduated from Loughborough University attaining a Computer Science Bachelor<br/>
            During my studies I have gained a wide understanding of many software engineering concepts, and explored a variety of languages and frameworks
            but I found my passion in web development, whilst only being taught basic web fundamentals in javascript and php, I experimented on my own
            with more modern and complex frameworks such as Nextjs/React for my uni and personal projects.<br/>
            

          </p>
        </div>
      </div>
    </div>
  );
}
