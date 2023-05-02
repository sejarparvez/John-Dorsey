import Location from "@iconscout/react-unicons/icons/uil-location-point";
import Phone from "@iconscout/react-unicons/icons/uil-phone";
import Email from "@iconscout/react-unicons/icons/uil-telegram-alt";

export default function ContractLeft() {
  return (
    <div className=" col-span-1 flex flex-col gap-4 p-2 md:gap-16">
      <div className="flex flex-col gap-2">
        <span className="text-3xl font-bold">Get In Touch</span>
        <span className="h-1 w-20 bg-main-100"></span>
        <span className=" text-gray-800">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat
          placeat in, asperiores ipsa consequatur veritatis.
        </span>
      </div>
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-8 font-semibold">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-main-100">
            <div>
              <Location color="white" />
            </div>
          </div>
          <div>Defolbari Jhenaidah </div>
        </div>
        <div className="flex items-center gap-8 font-semibold">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-main-100">
            <div>
              <Email color="white" />
            </div>
          </div>
          <div>Defolbari Jhenaidah </div>
        </div>
        <div className="flex items-center gap-8 font-semibold">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-main-100">
            <div>
              <Phone color="white" />
            </div>
          </div>
          <div>Defolbari Jhenaidah </div>
        </div>
      </div>
    </div>
  );
}
