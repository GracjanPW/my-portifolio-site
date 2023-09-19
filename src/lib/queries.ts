import { gql } from "@apollo/client";

export const GET_POST_BY_SLUG = gql`query PostSlug($slug:String){
    posts(filters: { slug: { eq: $slug } }) {
      data {
        attributes {
          Title
          content
        }
      }
    }
  }
  `
export const GET_ALL_POST_SLUGS = gql`query {
    posts{
        data{
            attributes{
                slug
            }
        }
    }
}`

export const GET_POSTS_BY_CATEGORY = gql`query GetPostsByCat($category:String){
  categories(filters:{ Name: {eq: $category}}){
    data{
      id
      attributes{
        posts {
          data {
            id
            attributes{
              Title
              slug
              thumbnail {
                data {
                  attributes {
                    name
                    url
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}`

export const GET_CATEGORIES = gql`query {
  categories {
    data {
      attributes {
        Name
      }
    }
  }
}
`
export const GET_CATEGORIES_FULL = gql`query {
  categories {
      data {
        id
        attributes {
            Name
            slug
            image {
                data {
                    attributes {
                        name
                        url
                    }
                }
            }
        }
    }
  }
}`