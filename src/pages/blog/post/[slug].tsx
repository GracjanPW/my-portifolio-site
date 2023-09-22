

import React from 'react'
import client from "@/lib/GQLClient"
import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote } from 'next-mdx-remote';
import { GET_ALL_POST_SLUGS, GET_POST_BY_SLUG } from "@/lib/queries";
import Image from 'next/image';
// type for getstaticpaths and props


export default function Page({ post}:any) {
    return (
        <div id="Post" className='m-auto container-fluid py-10'>
            <Image
                    loader={()=> `${process.env.NEXT_PUBLIC_STRAPI_API_URL}${post.image.data.attributes.url}`}
                    src={`${process.env.NEXT_PUBLIC_STRAPI_API_URL}${post.image.data.attributes.url}`}
                    alt={post.image.data.attributes.name}
                    width={0}
                    height={0}
                    style={{width:'100%;',height:'auto'}}
                  />
            <h1 className='my-5 text-4xl text-center'>{post.title}</h1>
            <div className='content px-8'>
                <MDXRemote {...post.content} />
            </div>
            
        </div>
    );
}


export const getStaticPaths = async () =>{
    const {data} = await client.query({
        query:GET_ALL_POST_SLUGS
    })

    const paths = data.posts.data.map((post: { attributes: { slug: any; }; }) => {
        return {params:{ slug: post.attributes.slug }} 
    });

    return {
        paths,
        fallback: "blocking"
    }
}

export async function getStaticProps({ params }:any) {

    const { data } = await client.query({
        query: GET_POST_BY_SLUG,
        variables:{
            slug:params.slug
        }
      })
      console.log(data)
      const attrs = data.posts.data[0].attributes;

    const html = await serialize(attrs.content);
      console.log(data)
      return {
          props: {
            post: {
              title: attrs.Title,
                content: html,
                image: attrs.thumbnail
            }
            
          },
          revalidate: 10, 
      }
}

