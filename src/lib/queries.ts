import { gql } from "@apollo/client";

export const GET_POST_BY_SLUG = gql`query PostSlug($slug:String){
    posts(filters: { slug: { eq: $slug } }) {
      data {
        attributes {
          Title
          content
          thumbnail {
            data {
              attributes{
                url
                name
              }
            }
          }
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
              publishedAt
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

export const GET_ALL_PROJECTS = gql`query{
  projects {
    data {
      id
      attributes {
        Name
        publishedAt
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
`

export const GET_ALL_PROJECT_SLUGS = gql`query{
  projects {
    data {
      attributes {
        slug
      }
    }
  }
}`

export const GET_PORJECT_BY_SLUG = gql`query GetProject($slug:String){
  projects(filters:{slug:{eq:$slug}}) {
    data {
      attributes {
        Name
        publishedAt
        description
        thumbnail {
          data {
            attributes {
              name
              url
            }
          }
        }
        repo
      }
    }
  }
}`

export const GET_HOME_PAGE_DATA = gql`query {
  home {
    data{
			attributes{
				name
        role
        description
        image {
          data {
            attributes{
              url 
              name
            }
          }
        }
			}
    }
  }
}`

