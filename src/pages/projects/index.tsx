/* eslint-disable @next/next/no-img-element */
import Card from '@/components/common/Card';
import client from '@/lib/GQLClient'
import { GET_ALL_PROJECTS } from '@/lib/queries'
import { useRouter } from 'next/router';
import React from 'react'

export default function Page({
    projects
}:any) {
    const router = useRouter();

    const goToProject = (href:string)=>{
        router.push("/projects/"+href)
    }
  return (
    <div className="container-fluid m-auto ">
      <h1 className="text-3xl my-4">Projects</h1>
      <div className="flex">
        {projects &&
          projects.map((project: any) => {
            return (
              <div key={project.id} className="flex-1 max-w-[25%]">
                <Card
                  onClick={()=>goToProject(project.attributes.slug)}
                  
                > 
                  
                  <img
                    src={`${process.env.NEXT_PUBLIC_STRAPI_API_URL}${project.attributes.thumbnail.data.attributes.url}`}
                    alt={project.attributes.thumbnail.data.attributes.name}
                  />
                  <div className="p-3">
                    <h1 className=" font-semibold text-lg text-center">{project.attributes.Name}</h1>
                    <p>{project.attributes.publishedAt}</p>
                  </div>
                  
                </Card>
              </div>
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
