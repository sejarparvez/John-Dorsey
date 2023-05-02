import User from "@iconscout/react-unicons/icons/uil-edit";
import React from "react";

type BlogPostProps = {
  img: string;
  title: string;
  text: string;
};

const BlogPost: React.FC<BlogPostProps> = ({ img, title, text }) => {
  return (
    <div className=" z-10 my-10 md:w-1/3 border-b-4 border-white bg-white duration-500 hover:-translate-y-4 hover:border-b-4 hover:border-[#784cfb]">
      <img src={img} alt="" className="h-40 w-full" />
      <div className="bg-white px-1 py-2">
        <div className="flex justify-between pb-2 text-[#784cfb]">
          <span>March, 19 2023</span>
          <span className="flex ">
            <span>
              <User />
            </span>
            <span>Admin</span>
          </span>
        </div>
        <div className="py-2 text-xl font-bold">{title}</div>
        <div className=" pb-4 text-gray-800">{text}</div>
        <button className="btn">READ MORE</button>
      </div>
    </div>
  );
};

export default BlogPost;
