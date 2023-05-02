import img from "../../assets/testi.png";
import Review from "./Review";

export default function Testimonials() {
  return (
    <div
      className="my-16 flex flex-col items-center justify-center  md:gap-10 lg:mx-48"
      id="testimonials"
    >
      <div className="flex flex-col gap-3 text-center">
        <span className="font-bold text-[#784cfb]">WHAT PEOPLE SAY</span>
        <span className="text-4xl font-bold">Testimonials</span>
        <span className="mx-auto h-1 w-20 bg-[#784cfb]"></span>
      </div>
      <div className="flex flex-col-reverse items-center justify-center gap-20 md:flex-row">
        <div className="md:w-[28rem] w-80 overflow-hidden">
          <Review />
        </div>
        <div>
          <img src={img} className="w-80" alt="" />
        </div>
      </div>
    </div>
  );
}
