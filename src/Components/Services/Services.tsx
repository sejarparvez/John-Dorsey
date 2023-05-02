import App from "../../assets/app-icon.png";
import Code from "../../assets/code-icon.png";
import Design from "../../assets/design-icon.png";

export default function Services() {
  return (
    <div
      className="flex flex-col items-center p-4 md:mt-40 md:mb-20"
      id="services"
    >
      <div className=" flex flex-col items-center gap-4 text-center">
        <span className=" font-bold text-main-100">WHAT I DO</span>
        <span className="text-5xl font-bold">Services</span>
        <span className="h-1 w-20 bg-main-100"></span>
        <span className="text-gray-700">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, ut.
        </span>
      </div>
      <div className="flex flex-col items-center justify-center gap-8 py-4 lg:w-[70%] md:flex-row md:py-12">
        <div className=" mb-6 flex flex-col items-center gap-4 border-b-8 border-white bg-white px-4 py-12 text-center duration-300 ease-in-out hover:-translate-y-3 hover:border-[#784cfb] md:w-5/12">
          <img src={Design} className="w-24" alt="" />
          <h3 className="text-2xl font-bold">Web Design</h3>
          <p className="text-gray-800">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Perspiciatis eligendi suscipit placeat nisi eum adipisci!
          </p>
          <button className="btn">Read More</button>
        </div>

        <div className=" mb-6 flex flex-col items-center gap-4 border-b-8 border-white bg-white px-4 py-12 text-center duration-300 ease-in-out hover:-translate-y-3 hover:border-[#784cfb] md:w-5/12">
          <img src={Code} className="w-24" alt="" />
          <h3 className="text-2xl font-bold">Web Development</h3>
          <p className="text-gray-800">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Perspiciatis eligendi suscipit placeat nisi eum adipisci!
          </p>
          <button className="btn">Read More</button>
        </div>

        <div className=" mb-6 flex flex-col items-center gap-4 border-b-8 border-white bg-white px-4 py-12 text-center duration-300 ease-in-out hover:-translate-y-3 hover:border-[#784cfb] md:w-5/12">
          <img src={App} className="w-24" alt="" />
          <h3 className="text-2xl font-bold">Web Develoment</h3>
          <p className="text-gray-800">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Perspiciatis eligendi suscipit placeat nisi eum adipisci!
          </p>
          <button className="btn">Read More</button>
        </div>
      </div>
    </div>
  );
}
