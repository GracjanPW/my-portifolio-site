
import Image from "next/image";
import { Inter } from "next/font/google";
import LboroIcon from '@p/lboro.svg'
import client from "@/lib/GQLClient";
import { GET_HOME_PAGE_DATA } from "@/lib/queries";
import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote } from 'next-mdx-remote';

const inter = Inter({ subsets: ["latin"] });

export default function Home({name,role,description,image}:any) {
  console.log(image)
  return (
    <div className="container-fluid md:mx-auto flex h-full items-center py-10">
      <div className="flex lg:flex-row flex-col items-center w-full h-fit">
        <Image
          loader={()=>`${process.env.NEXT_PUBLIC_STRAPI_API_URL}${image.url}`}
          src={`${process.env.NEXT_PUBLIC_STRAPI_API_URL}${image.url}`}
          alt={image.alt}
          className=" rounded-md object-cover shadow-lg"
          width={0}
          height={0}
          style={{width:'400px',height:'auto'}}
        />
        <div className="grow flex flex-col items-top justify-start h-full text-center lg:pl-10 lg:p-0 p-16  space-y-2">
          <div>
            <h1 className="text-3xl font-semibold">{name}</h1>
          <h2 className="text-2xl font-semibold">{role}</h2>
          </div>
          
          <div id="Desc">
            <MDXRemote {...description}/>
          </div>
            
        
        </div>
      </div>
    </div>
  );
}

export async function getStaticProps(){
  const {data} =await client.query({
    query: GET_HOME_PAGE_DATA
  })

  const attrs = data.home.data.attributes
  console.log()
  const html = await serialize(attrs.description)
  return {
    props: {
      name: attrs.name,
      role: attrs.role,
      description : html,
      image: {
        url :attrs.image.data[0].attributes.url,
        alt : attrs.image.data[0].attributes.name
      }
    }
  }
  
}
