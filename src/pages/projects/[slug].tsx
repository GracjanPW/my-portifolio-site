import React from 'react'

import client from '@/lib/GQLClient'
import { GET_ALL_PROJECT_SLUGS, GET_PORJECT_BY_SLUG } from '@/lib/queries'
import { serialize } from 'next-mdx-remote/serialize'
import Image from 'next/image'
import { MDXRemote } from 'next-mdx-remote'

export default function Page({project}:any) {
  return (
    <div id="Post" className='m-auto container-fluid py-10'>
    <Image
            loader={()=> `${process.env.NEXT_PUBLIC_STRAPI_API_URL}${project.thumbnail.url}`}
            src={`${process.env.NEXT_PUBLIC_STRAPI_API_URL}${project.thumbnail.url}`}
            alt={project.thumbnail.alt}
            width={0}
            height={0}
            style={{width:'100%',height:'auto'}}
          />
    <h1 className='my-5 text-4xl text-center'>{project.title}</h1>
    <a href={project.repo}> Click for Github Repo</a>
    <div className='content px-8'>
        <MDXRemote {...project.content} />
    </div>
    
</div>
  )
}

export async function getStaticPaths(){
    const {data} = await client.query({
        query: GET_ALL_PROJECT_SLUGS
    })
    
    const paths = data.projects.data.map((post: { attributes: { slug: any; }; }) => {
        return {params:{ slug: post.attributes.slug }} 
    });

    return {
        paths,
        fallback: "blocking"
    }
}   

export async function getStaticProps({params}:{params:{slug:string}}){
    if (!params?.slug) return
    const {data} = await client.query({
        query: GET_PORJECT_BY_SLUG,
        variables:{
            slug:params.slug
        }
    })
    const attrs = data.projects.data[0].attributes
    
    const html = await serialize(attrs.description);

    return {
        props: {
            project :{
                title: attrs.Name,
                content: html,
                repo: attrs.repo,
                thumbnail: {
                    url: attrs.thumbnail.data.attributes.url,
                    alt: attrs.thumbnail.data.attributes.name
                }
            }
        }
    }
}