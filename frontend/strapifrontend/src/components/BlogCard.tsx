import React from "react";
import Image from "next/image";


const BlogCard = ({imgSrc, authorName, blogTitle, date, duration}:any) => {

  return (
    <div className="">
    <div className=" xs:min-w-[350px] md:min-w-[280px] bg-gray-700 xxs:p-0   text-white text-opacity-80 border-2 border-white border-opacity-50  ">
      <div className="sm:grid sm:grid-cols-2 md:flex md:flex-col xxs:flex xxs:flex-col  ">
        <Image width={600} height={600} className="w-full" src={imgSrc} alt="Image" />
        <div className="flex flex-col p-6">
        <h5 className="text-xl tracking-tight">
            {authorName}
          </h5>
          <h5 className=" xxl:text-3xl sm:text-3xl xs:text-xl xxs:text-lg font-bold mb-8">
            {blogTitle}
          </h5>
          <div className="flex justify-between items-center w-full my-1 ">
          <p className="font-normal ">
            {date}
          </p>
          <div className="border-2 border-opacity-80 rounded-full flex justify-center items-center px-3 py-1 bg-primary opacity-80 text-opacity-100 text-white">
           {duration}
          </div>
          </div>
          </div>
      
      </div>
    </div>

</div>
  );
};

export default BlogCard;