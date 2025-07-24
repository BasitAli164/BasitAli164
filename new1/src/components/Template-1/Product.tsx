import Image from "next/image";
import img1 from "../../../public/images/microphone.jpg";
import img2 from "../../../public/images/iphone.jpg";
const Product = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex flex-col md:flex-row justify-center items-center gap-10 sm:gap-12 md:gap-14 lg:gap-16 xl:gap-20 p-8 sm:p-10 md:p-14 lg:p-28 ">
        <div className="">
          <Image
            src={img1}
            alt="microphone-img"
            width={400}
            height={400}
            className="rounded-full"
          />
        </div>

        <div className="flex flex-col justify-center items-start gap-2 sm:gap-4 md:gap-6 lg:gap-8">
          <h4 className="text-lg sm:text-xl md:text-2xl xl:text-3xl font-semibold tracking-[1px]">
            Best in Class
          </h4>
          <p className="text-lg lg:text-xl xl:text-2xl opacity-70">
            Holisticly predominate extensible testing procedures for reliable
            supply chains. Dynamically innovate resource-leveling customer
            service for state of the art customer service.
          </p>
          <div>
            <button className="px-6 lg:px-10 py-3 md:py-5 bg-[yellowgreen] border-none outline-none rounded-full text-white text-sm lg:text-lg  hover:bg-green-500 ">
              CLASSIFY IT
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center gap-10 sm:gap-12 md:gap-14 lg:gap-16 xl:gap-20 p-8 sm:p-10 md:p-14 lg:p-28 bg-black text-white ">
        <div className="flex flex-col justify-center items-start gap-2 sm:gap-4 md:gap-6 lg:gap-8">
          <h4 className="text-lg sm:text-xl md:text-2xl xl:text-3xl font-semibold tracking-[1px]">
            Superior Quality
          </h4>
          <p className="text-lg lg:text-xl xl:text-2xl opacity-70">
            Holisticly predominate extensible testing procedures for reliable
            supply chains. Dynamically innovate resource-leveling customer
            service for state of the art customer service.
          </p>
          <div>
            <button className="px-6 lg:px-10 py-3 md:py-5 bg-[yellowgreen] border-none outline-none rounded-full text-white text-sm lg:text-lg  hover:bg-green-500 ">
              TEST IT
            </button>
          </div>
        </div>

        <div>
          <Image
            src={img2}
            alt="iphone-img"
            width={400}
            height={400}
            className="rounded-full "
          />
        </div>
      </div>
    </div>
  );
};

export default Product;
