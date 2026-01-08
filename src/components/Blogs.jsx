import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import BlogDetails from './BlogDetails';

const Blogs = () => {
  // Consume data from Context
  const { posts, loading } = useContext(AppContext);

  return (
    <div className='w-11/12 max-w-[670px] flex flex-col'>
      { loading ? 
        (<div className='min-h-[80vh] w-full flex justify-center items-center'>
            <p className='text-center font-bold text-3xl'>Loading</p>
         </div>) : 
        (
          posts.length === 0 ? 
          (<div className='min-h-[80vh] w-full flex justify-center items-center'>
             <p className='text-center font-bold text-3xl'>No Blogs Found !</p>
           </div>) : 
          (posts.map( (post) => (
            <BlogDetails key={post.id} post={post}/>
          )))
        )
      }
    </div>
  )
}
export default Blogs