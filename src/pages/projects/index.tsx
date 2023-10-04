/* eslint-disable @next/next/no-img-element */
import Card from '@/components/common/Card';
import client from '@/lib/GQLClient'
import { GET_ALL_PROJECTS } from '@/lib/queries'
import { useRouter } from 'next/router';
import React from 'react'
import Image from 'next/image';
import timeStamp from '@/lib/timeStamp';
export default function Page({
    projects
}:any) {
    const router = useRouter();

    const goToProject = (href:string)=>{
        router.push("/projects/"+href)
    }
  return (
    <div className="container m-auto p-5 md:p-0">
      <h1 className="text-4xl my-8 text-center">Projects</h1>
      <div className="grid gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
        {projects &&
          projects.map((project: any) => {
            return (

                <Card key={project.id} className='md:w-10rem w-full m-auto'
                  onClick={()=>goToProject(project.attributes.slug)}
                  
                > 
                  <div className='relative md:h-48 h-60 w-auto'><Image
                    loader={()=>`${process.env.NEXT_PUBLIC_STRAPI_API_URL}${project.attributes.thumbnail.data.attributes.url}`}
                    src={`${process.env.NEXT_PUBLIC_STRAPI_API_URL}${project.attributes.thumbnail.data.attributes.url}`}
                    alt={project.attributes.thumbnail.data.attributes.name}
                    objectFit='cover'
                    layout='fill'
                  /></div>
                  
                  <div className="p-3">
                    <h1 className="font-semibold text-lg text-center">{project.attributes.Name}</h1>
                    <p className='text-right'>{timeStamp(project.attributes.publishedAt)}</p>
                  </div>
                  
                </Card>
    
            );
          })}
      </div>
    </div>
  )
}

export async function getServerSideProps(){
    const {data} = await client.query({
        query: GET_ALL_PROJECTS
    })
    return {
        props:{
            projects:data.projects.data
        }
    }
}
