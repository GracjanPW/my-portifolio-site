
import React from 'react'
import client from "@/lib/GQLClient"
import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote } from 'next-mdx-remote';
import { GET_ALL_POST_SLUGS, GET_POST_BY_SLUG } from "@/lib/queries";
// type for getstaticpaths and props



export default function Page({ post}:any) {
    return (
        <div>
            <h1>{post.title}</h1>
            <MDXRemote {...post.content} />
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
        fallback: false
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
                content: html  
            }
            
          }
      }
}

