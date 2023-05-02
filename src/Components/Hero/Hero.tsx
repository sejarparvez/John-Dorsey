import Circle from "../../assets/circle.png";
import HalfCircle from "../../assets/half-circle.png";
import Letters from "../../assets/letters.png";
import Person from "../../assets/person.png";
import Points1 from "../../assets/points1.png";
import Points2 from "../../assets/points2.png";
import Squire from "../../assets/square.png";
import Triangle from "../../assets/triangle.png";
import Weve from "../../assets/wave.png";
import X from "../../assets/x.png";

export default function Hero() {
  return (
    <div className="relative">
      <div className="absolute top-[71%] right-[68%] hidden md:block">
        <img src={Squire} alt="" className="h-[3.5rem] opacity-20 " />
      </div>
      <div className="absolute bottom-[63%] left-[38%] hidden md:block">
        <img src={Circle} alt="" className="h-[3.5rem] opacity-20" />
      </div>
      <div className="absolute bottom-[82%] left-[50%] hidden md:block">
        <img src={HalfCircle} alt="" className="h-[3.5rem] opacity-20" />
      </div>
      <div className="absolute top-[67%] left-[5%] hidden md:block">
        <img src={HalfCircle} alt="" className="h-[3.5rem] opacity-20" />
      </div>
      <div className="absolute right-[4%] bottom-[50%] hidden md:block">
        <img src={X} alt="" className="h-[3.5rem] opacity-20" />
      </div>
      <div className="absolute bottom-[75%] left-[20%] hidden md:block">
        <img src={Weve} alt="" className="h-[2rem] opacity-20" />
      </div>
      <div className="absolute bottom-[8%] right-[55%] hidden md:block">
        <img src={Weve} alt="" className="h-[2rem] opacity-20" />
      </div>
      <div className="absolute right-[7%] bottom-[75%]">
        <img src={Triangle} alt="" className="h-[3.5rem] opacity-20" />
      </div>
      <div className="mx-auto grid max-w-[90%] grid-cols-1 items-center gap-12 md:grid-cols-12 md:gap-0 lg:max-w-[75%]">
        <div className="md:col-span-5">
          <h1 className="py-2 text-5xl font-bold">John Dorsey</h1>
          <p className="py-4 text-gray-800">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque,
            ipsum. Nam natus provident odit eligendi deserunt id veniam? Dolore
            suscipit dolores labore minus
          </p>
          <div>
            <button className="btn my-2">Contact Me</button>
          </div>
        </div>
        <div className="flex justify-center md:col-span-7 md:justify-end">
          <img src={Person} className="h-[25rem] lg:h-[35rem]" alt="Person" />
        </div>
        <div className="absolute top-[85%] left-2 hidden md:block">
          <img src={Points1} alt="" className="w-[30%] opacity-30" />
        </div>
        <div className="absolute top-[65%] left-[71%] -z-10 hidden md:block">
          <img src={Points2} alt="" className="w-[80%] opacity-20" />
        </div>
        <div className="absolute -top-20 left-2">
          <img src={Letters} alt="" className="w-[24%] opacity-20" />
        </div>
      </div>
    </div>
  );
}
