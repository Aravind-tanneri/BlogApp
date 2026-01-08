import React from 'react'
import { NavLink } from 'react-router-dom'

const BlogDetails = ({post}) => {
  return (
    <div className='mt-[50px]'>
      <NavLink to={`/blog/${post.id}`} >
        {/* Title: Dark Slate in Light, White in Dark */}
        <span className='font-bold text-lg hover:underline transition-colors duration-200 
          text-gray-900 dark:text-white hover:text-blue-700'>
            {post.title}
        </span>
      </NavLink>
      
      {/* Meta Info: Softer Gray */}
      <p className='text-sm mt-[4px] text-gray-600 dark:text-gray-300'>
        By <span className='italic text-gray-900 dark:text-gray-100'>{post.author}</span> on {' '}
        <NavLink to={`/categories/${post.category.replaceAll(" ","-")}`}> 
          <span className='underline font-bold hover:text-blue-600 transition-colors'>
            {post.category}
          </span> 
        </NavLink>
      </p>
      
      {/* Date */}
      <p className='text-sm mt-[4px] text-gray-500 dark:text-gray-400'> Posted on {post.date} </p>
      
      {/* Content: Readable Gray */}
      <p className='text-md mt-[10px] text-gray-700 dark:text-gray-200 leading-relaxed'> 
        {post.content}
      </p>
      
      {/* Tags */}
      <div className='flex gap-x-3 flex-wrap'>
        {post.tags.map( (tag, index) => (
            <NavLink key={index} to={`/tags/${tag.replaceAll(" ","-")}`}>
                <span className='text-blue-600 dark:text-blue-400 font-semibold text-xs mt-[5px] hover:underline'> 
                  {`#${tag}`}
                </span>
            </NavLink>
        ) )}
      </div>
    </div>
  )
}

export default BlogDetails