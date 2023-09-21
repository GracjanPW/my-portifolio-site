/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="container-fluid md:mx-auto flex h-full items-center py-10">
      <div className="flex md:flex-row flex-col items-center w-full h-fit">
        <img
          src={`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/uploads/Gracjan_c654061174.jpg`}
          alt="Image of Gracjan Wojciechowski"
          className=" rounded-md object-cover  md:h-[400px] h-full w-auto shadow-lg"
        />
        <div className="grow flex flex-col items-top justify-start h-full text-center pl-10 space-y-2">
          <div>
            <h1 className="text-3xl font-semibold">Gracjan Wojciechowski</h1>
          <h2 className="text-2xl font-semibold">Web Developer</h2>
          </div>
          
          <p>
            Graduated from Loughborough University attaining a Computer Science Bachelor<br/>
             
          </p>
        </div>
      </div>
    </div>
  );
}
