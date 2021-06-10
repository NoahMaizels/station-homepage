const fetch = require("node-fetch")
const GQLRequest = require('graphql-request')
const endpoint = "https://api-eu-central-1.graphcms.com/v2/ckorjadkruk6m01xlcjrh3vh1/master"

const graphcms = new GQLRequest.GraphQLClient(endpoint);

const getPosts = async () => {
  const queryResult = await graphcms.request( 
  `{
    posts {
      slug
      title
      date
      excerpt
      coverImage {
        url
      }
      author {
        name
      }
      content {
        html
      }
    }
  }`)
    return queryResult.posts
}

const getSinglePost = async (postSlug)  => {
const query = `query singlePostQuery($slug: String) {
  posts(where: {slug: $slug}) {
    slug
    title
    author {
      id
    }
    publishedAt
    content{
      html
    }
  }
}`
const queryResult = await graphcms.request(query, {
  "slug": postSlug, 

})     
  return queryResult.posts[0]
}

// getSinglePost('technical-seo-with-graphcms').then(result => console.log(result.content.html))
module.exports = {getPosts, getSinglePost}