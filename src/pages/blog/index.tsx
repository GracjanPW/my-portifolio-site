

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
    <div className="container-fluid m-auto">
      <h1 className="text-3xl my-4">Topics</h1>
      <div className="flex flex-row">
        {categories &&
          categories.map((category:any) => {
            return (
              <div key={category.id} className="flex-1">
                <Card className="w-max m-auto" onClick={()=>navigateToCategory(category.attributes.Name)}>
                
                  <Image
                    loader={()=>`${process.env.NEXT_PUBLIC_STRAPI_API_URL}${category.attributes.image.data.attributes.url}`}
                    src={`${process.env.NEXT_PUBLIC_STRAPI_API_URL}${category.attributes.image.data.attributes.url}`}
                    alt={category.attributes.image.data.attributes.name}
                    width={0}
                    height={0}
                    style={{width:'100%;',height:'auto'}}

                  />
                  <h1 className="text-center font-semibold p-4">
                    {category.attributes.Name}
                  </h1>
                </Card>
              </div>
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