import { getPosts } from 'cms/posts'
import Link from 'components/Link'
import moment from 'moment'
import Head from 'next/head'
import Navbar from 'components/Navbar'
import Footer from 'components/Footer'


 



export default function Blog(props) {
  //  console.log(props)
  return (
    <div className="bg-gradient min-h-screen bg-cover bg-center">
      <Head>
        <title>Fomocraft</title>
        <link rel="icon" href="favicon.ico" />
      </Head>
       <div className="relative  pt-16 sm:pt-24 lg:pt-32">
        <div className="mx-auto px-4 text-center sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">
            <p className="mb-20 max-w-4xl   mx-auto text-6xl inconsolata font-black text-white ">
            Blog
             </p>
        </div>
        <div className="relative pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
        <div className="absolute inset-0">
          <div className="h-1/3 sm:h-2/3" />
        </div>
        <div className="relative max-w-7xl mx-auto">
          <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
            
            
            

 
            
            
         
        {props.posts.sort((post1, post2) => {post2.created_at - post1.created_at})
          .map(post => (
           <Link href={`blog/${post.slug}`}>  
           <a>
           <div key={post.title} className="flex bg-white flex-col rounded-lg shadow-lg overflow-hidden">
                <div className="flex-shrink-0">
                  <img className="h-48 w-full object-cover" src={post.feature_image ? post.feature_image : ""} alt="" />
                </div>
                <div className="flex-1 p-6 flex flex-col justify-between">
                  <div className="flex-1">
                  
                    <a href={post.href} className="block mt-2">
                      <p className="text-xl font-semibold text-gray-900">{post.title}</p>
                      <p className="mt-3 text-base text-gray-500">{post.excerpt ? `${post.excerpt.slice(0, 100)}...` : "No content"}
</p>
                    </a>
                  </div>
                  <div className="mt-6 flex items-center">
                    {/* <div className="flex-shrink-0">
                      <img className="h-10 w-10 rounded-full" src={post.author ? post.author.imageUrl : "profile.png"} alt="" />
                    </div> */}
                     <div className="flex-shrink-0">
                       <img className="h-10 w-10 rounded-full" src="profile.png" alt="" />
                    </div>
                    <div className="ml-3">
                      <p className="text-sm font-medium text-gray-900">
                      {post.primary_author.name ? post.primary_author.name : "Fomocraft Team"} — {moment(post.published_at).format("MMMM Do YYYY")}
                      </p>
                      
                      <div className="flex space-x-1 text-sm text-gray-500">
                        {/* <time dateTime={post.datetime}>{post.date}</time>
                        <span aria-hidden="true">&middot;</span> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </a>            
              </Link>
              
            ))}
          </div>
        </div>
      </div>
        <div className="max-w-5xl mx-auto">
         
        </div>
    </div>

 
      </div>
  );
}

export const getStaticProps = async (context) => {
    let posts = await getPosts();
    return { props: { posts: posts }}
  }
  