import React from 'react'
import Image from 'next/image';


export default async function({params}:any ) {
    const res = await fetch(`http://127.0.0.1:1337/api/blogs/${params.slug}`);
    const blog = await res.json();
    return(
        <div className='mt-[300px] text-white'>
     
 <div className="flex justify-center items-center">
    <div className=" xs:min-w-[350px] md:min-w-[280px] bg-gray-700 xxs:p-0   text-white text-opacity-80 border-2 border-white border-opacity-50 max-w-[1200px]  ">
      <div className="sm:grid sm:grid-cols-2 md:flex md:flex-col xxs:flex xxs:flex-col  ">
        <Image width={600} height={600} className="w-full" src={blog.data.attributes.blogImage} alt="Image" />
        <div className="flex flex-col p-6">
        <h5 className="text-xl tracking-tight">
        {blog.data.attributes.blogAuthor}
          </h5>
          <h5 className=" xxl:text-3xl sm:text-3xl xs:text-xl xxs:text-lg font-bold mb-8">
          {blog.data.attributes.blogTitle}
          </h5>
          <div className="flex justify-between items-center w-full my-1 ">
          <p className="font-normal ">
          {blog.data.attributes.blogDate}
          </p>
          <div className="border-2 border-opacity-80 rounded-full flex justify-center items-center px-3 py-1 bg-primary opacity-80 text-opacity-100 text-white">
          {blog.data.attributes.duration}
          </div>
          </div>
          </div>
      
      </div>
    </div>

</div>
        </div>
    )
}