
import Card from "@/components/common/Card";
import client from "@/lib/GQLClient";
import { GET_POSTS_BY_CATEGORY } from "@/lib/queries";
import Image from "next/image";

export default function Page({ posts, category }: any) {
  const goToPost = (slug: string) => {
    window.location.href = `/blog/post/${slug}`;
  };
  return (
    <div className="m-auto container-fluid">
      <h1 className="text-3xl my-4">Posts from {category}</h1>
      <div className="flex">
        {posts &&
          posts.map((post: any) => {
            return (
              <div key={post.id} className="flex-1 max-w-[25%]">
                <Card
                  
                  onClick={() => goToPost(post.attributes.slug)}
                > 
                  
                  <Image
                  loader={()=>`${process.env.NEXT_PUBLIC_STRAPI_API_URL}${post.attributes.thumbnail.data.attributes.url}`}
                    src={`${process.env.NEXT_PUBLIC_STRAPI_API_URL}${post.attributes.thumbnail.data.attributes.url}`}
                    alt={post.attributes.thumbnail.data.attributes.name}
                    width={0}
                    height={0}
                    style={{width:'100%;',height:'auto'}}
                  />
                  <div className="p-3">
                    <h1 className=" font-semibold text-lg text-center">{post.attributes.Title}</h1>
                    <p>{post.attributes.publishedAt}</p>
                  </div>
                  
                </Card>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export const getServerSideProps = async ({ params }: any) => {
  const { data } = await client.query({
    query: GET_POSTS_BY_CATEGORY,
    variables: {
      category: params.category,
    },
  });

  return {
    props: {
      posts: data.categories.data[0].attributes.posts.data,
      category:params.category
    },
  };
};
