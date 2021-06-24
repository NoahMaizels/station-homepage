import { getSinglePost, getPosts } from 'cms/posts'
import Head from 'next/head'

import { TwitterTweetEmbed } from 'react-twitter-embed'

let HtmlToReactParser = require('html-to-react').Parser
var htmlToReactParser = new HtmlToReactParser()

// PostPage page component
const PostPage = (props) => {
  let newElements = false
  if (props.post) {
    let reactElements = htmlToReactParser.parse(props.post.html)
    newElements = reactElements.map((element) => {
      let returnVal = element
      if (element.type !== 'figure') {
        return element
      } else {
        if (Array.isArray(element.props.children)) {
          element.props.children.forEach((child) => {
            if (child.type === 'blockquote') {
              if (child.props.children[2].props.href.slice(0, 19) === 'https://twitter.com') {
                const url = child.props.children[2].props.href.split('/')
                const id = url[url.length - 1].split('?')[0]
                returnVal = <TwitterTweetEmbed key={id} tweetId={id} />
              } else {
                returnVal = element
              }
            }
          })
        }
      }
      return returnVal
    })
  }

  // Render post title and content in the page from props
  // {console.log(props)}
  return (
    <div className="bg-gradient min-h-screen bg-cover bg-center">
      <Head>
        <title>Fomocraft</title>
        <script async src="/widgets.js" charset="utf-8"></script>
      </Head>
      <div className="relative min-h-screen pt-16 sm:pt-24 lg:pt-32">
        {/* <div className="mx-auto px-4 text-center sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">
            <p className="mb-20 max-w-4xl   mx-auto text-6xl inconsolata font-white text-white ">
            {props.post ? props.post.title : ""}
             </p>
        </div> */}
        <div className="max-w-5xl mx-auto">
          <div className="relative py-16   overflow-hidden">
            <div className="relative px-4 sm:px-6 lg:px-8">
              <article className="blog-post text-white mx-auto prose lg:prose-xl">
                <h1>
                  <span className="mt-2 mb-20 text-white block text-3xl text-center leading-8 font-extrabold tracking-tight  sm:text-4xl">
                    {props.post ? props.post.title : ''}
                  </span>
                </h1>
                {newElements ? newElements : ''}
              </article>

              {/* <article className="blog-post text-white mx-auto prose lg:prose-xl" dangerouslySetInnerHTML={{ __html: props.post === undefined ? "" : props.post.html}} /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// PostPage.getInitialProps = async (params) => {
//   const post = await getSinglePost(params.query.slug)
//   return { post: post }
// }

export const getStaticProps = async (context) => {
  const post = await getSinglePost(context.params.slug)
  return { props: { post: post } }
}

export async function getStaticPaths() {
  const posts = await getPosts()
  const paths = posts.map((post) => `/blog/${post.slug}`)
  return {
    paths: paths,
    fallback: true
  }
}
export default PostPage
