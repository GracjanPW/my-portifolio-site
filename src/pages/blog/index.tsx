

import Card from "@/components/common/Card";
import client from "@/lib/GQLClient";
import { GET_CATEGORIES, GET_CATEGORIES_FULL } from "@/lib/queries";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Blog({ categories}:any) {

 

  const navigateToCategory = (id: string) => {
    window.location.href = `/blog/${id}`;
  };

  return (
    <div className="container m-auto p-5 md:p-0">
      <h1 className="text-4xl my-8 text-center">Topics</h1>
      <div className="grid gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
        {categories &&
          categories.map((category:any) => {
            return (

                <Card  key={category.id} className="md:w-10rem w-full m-auto" onClick={()=>navigateToCategory(category.attributes.Name)}>
                  <div className="relative md:h-48 h-60 w-auto">
                    <Image
                    loader={()=>`${process.env.NEXT_PUBLIC_STRAPI_API_URL}${category.attributes.image.data.attributes.url}`}
                    src={`${process.env.NEXT_PUBLIC_STRAPI_API_URL}${category.attributes.image.data.attributes.url}`}
                    alt={category.attributes.image.data.attributes.name}
                    objectFit="cover"
                    layout="fill"
                  />
                  </div>
                  
                  <h1 className="text-center font-semibold p-4">
                    {category.attributes.Name}
                  </h1>
                </Card>

            );
          })}
      </div>
    </div>
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