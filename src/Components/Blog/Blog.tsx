import img1 from "../../assets/img1.jpeg";
import img2 from "../../assets/img2.jpeg";
import img3 from "../../assets/img3.jpeg";
import point from "../../assets/points1.png";
import BlogPost from "./BlogPost";

export default function Blog() {
  return (
    <div
      className="relative mx-auto flex flex-col items-center px-4 lg:w-2/3 "
      id="blog"
    >
      <div className="absolute bottom-0 left-0 z-0 opacity-40">
        <img src={point} alt="" className="w-40" />
      </div>
      <div className="mb-12 text-center">
        <h2 className="text-lg font-bold text-[#784cfb] md:text-2xl">
          Last News
        </h2>
        <h1 className="text-4xl font-bold md:text-5xl">My Blog</h1>
        <div className="mx-auto my-4 h-1 w-20 bg-[#784cfb]"></div>
        <p className="text-gray-800">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
          consectetur sapiente, impedit obcaecati quidem facilis?
        </p>
      </div>
      <div className="flex flex-col justify-center md:flex-row md:gap-8">
        <BlogPost
          img={img1}
          title="This is a short heading"
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
          consectetur sapiente, impedit obcaecati quidem facilis?"
        />
        <BlogPost
          img={img2}
          title="This is a short heading"
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
          consectetur sapiente, impedit obcaecati quidem facilis?"
        />
        <BlogPost
          img={img3}
          title="This is a short heading"
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
          consectetur sapiente, impedit obcaecati quidem facilis?"
        />
      </div>
    </div>
  );
}
