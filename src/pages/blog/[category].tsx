
import Card from "@/components/common/Card";
import client from "@/lib/GQLClient";
import { GET_POSTS_BY_CATEGORY } from "@/lib/queries";
import timeStamp from "@/lib/timeStamp";
import Image from "next/image";

export default function Page({ posts, category }: any) {
  const goToPost = (slug: string) => {
    window.location.href = `/blog/post/${slug}`;
  };
  return (
    <div className="container m-auto p-5 md:p-0">
    <h1 className="text-4xl my-8 text-center">Posts from {category}</h1>
    <div className="grid gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
      {posts &&
        posts.map((post:any) => {
          return (

              <Card  key={category.id} className="md:w-10rem w-full m-auto" onClick={()=>goToPost(post.attributes.slug)}>
                <div className="relative md:h-48 h-60 w-auto">
                  <Image
                  loader={()=>`${process.env.NEXT_PUBLIC_STRAPI_API_URL}${post.attributes.thumbnail.data.attributes.url}`}
                  src={`${process.env.NEXT_PUBLIC_STRAPI_API_URL}${post.attributes.thumbnail.data.attributes.url}`}
                  alt={post.attributes.thumbnail.data.attributes.name}
                  objectFit="cover"
                  layout="fill"
                />
                </div>
                
                <div className="p-3">
                    <h1 className="font-semibold text-lg text-center">{post.attributes.Title}</h1>
                    <p className='text-right'>{timeStamp(post.attributes.publishedAt)}</p>
                  </div>
              </Card>

          );
        })}
    </div>
  </div>
  );
}

export const getServerSideProps = async ({ params }: any) => {
  if (!params?.category) return
  const { data } = await client.query({
    query: GET_POSTS_BY_CATEGORY,
    variables: {
      category: params.category,
    },
  });

  console.log(data.categories.data)
  return {
    props: {
      posts: data.categories.data[0].attributes.posts.data,
      category:params.category
    },
  };
};
