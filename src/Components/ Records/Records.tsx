export default function Records() {
  return (
    <div
      className=" my-16 flex flex-wrap items-center justify-center gap-4 bg-[#784cfb] md:gap-20 md:py-16"
      id="records"
    >
      <div className=" flex h-36 w-36 scale-75 flex-col items-center justify-center gap-2 rounded-full border-[3px] md:scale-100">
        <div className="text-4xl font-bold text-white">235</div>
        <div className=" font-bold uppercase text-white">Projects</div>
      </div>
      <div className=" flex h-40 w-40 scale-[0.7] flex-col items-center justify-center gap-2 rounded-full border-[8px] border-[#b1d4ed] bg-white  text-black md:scale-100">
        <div className="text-4xl font-bold">177</div>
        <div className=" font-bold uppercase">Happy Client</div>
      </div>
      <div className=" flex h-36 w-36 scale-75 flex-col items-center justify-center gap-2 rounded-full border-[3px] md:scale-100">
        <div className="text-4xl font-bold text-white">805</div>
        <div className=" font-bold uppercase text-white">Work hour</div>
      </div>
      <div className=" flex h-36 w-36 scale-75 flex-col items-center justify-center gap-2 rounded-full border-[3px] md:scale-100">
        <div className="text-4xl font-bold text-white">80</div>
        <div className=" font-bold uppercase text-white">Awards</div>
      </div>
    </div>
  );
}
