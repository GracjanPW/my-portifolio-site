/* eslint-disable @next/next/no-img-element */

import client from "@/lib/GQLClient";
import { GET_POSTS_BY_CATEGORY } from "@/lib/queries";

export default function Page({ posts }: any) {
  const goToPost = (slug: string) => {
    window.location.href = `/blog/post/${slug}`;
  };
  return (
    <div>
      <div className="flex">
        {posts &&
          posts.map((post: any) => {
            return (
              <div key={post.id} className="flex-1 max-w-[25%]">
                <div
                  className="border-4 border-blue"
                  onClick={() => goToPost(post.attributes.slug)}
                >
                  <h1>{post.attributes.Title}</h1>
                  <img
                    src={`${process.env.NEXT_PUBLIC_STRAPI_API_URL}${post.attributes.thumbnail.data.attributes.url}`}
                    alt={post.attributes.thumbnail.data.attributes.name}
                  />
                </div>
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
    },
  };
};
