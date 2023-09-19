/* eslint-disable @next/next/no-img-element */

import client from "@/lib/GQLClient";
import { GET_CATEGORIES, GET_CATEGORIES_FULL } from "@/lib/queries";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Blog({ categories}:any) {

 

  const navigateToCategory = (id: string) => {
    window.location.href = `/blog/${id}`;
  };

  return (
    <main>
      <h1>Blog</h1>
      <div className="flex flex-row">
        {categories &&
          categories.map((category:any) => {
            return (
              <div key={category.id} className="flex-1">
                <div className="w-max m-auto border-4 border-blue" onClick={()=>navigateToCategory(category.attributes.Name)}>
                
                  <img
                    src={`${process.env.NEXT_PUBLIC_STRAPI_API_URL}${category.attributes.image.data.attributes.url}`}
                    alt={category.attributes.image.data.attributes.name}

                  />
                  <h2 className="text-center p-2">
                    {category.attributes.Name}
                  </h2>
                </div>
              </div>
            );
          })}
      </div>
    </main>
  );
}



export const getStaticProps = async ()=>{
    const {data} = await client.query({
        query:GET_CATEGORIES_FULL
    })

    return {
        props:{
            categories:data.categories.data
        }
    }
}