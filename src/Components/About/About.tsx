import image from "../../assets/about.png";
import Skills from "./Skills";

export default function About() {
  return (
    <div className="mx-auto flex px-4 lg:w-[75%] lg:px-0" id="about">
      <div className="flex flex-col items-center justify-center gap-10">
        <div className="flex flex-col gap-3">
          <span className="text-center font-bold text-[#784cfb]">WHO AM I</span>
          <span className="text-center text-3xl font-bold">About Me</span>
          <span className="mx-auto h-1 w-20 bg-[#784cfb]"></span>
        </div>
        <div className="flex flex-col-reverse items-center justify-center gap-6 md:flex-row md:gap-40">
          <div>
            <div className="text-bold pb-6 text-xl">Hello, I'm</div>
            <div className=" text-gray-800">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
              necessitatibus dolorum voluptas accusamus placeat, voluptatibus
              odit quasi fugit similique quia tempore odio voluptatum vel.
            </div>
            <div>
              <Skills />
            </div>
          </div>
          <div>
            <img src={image} className="w-[80rem]" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
