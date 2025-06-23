import { Pin, PinIcon } from "lucide-react";
const Contact = () => {
  return (
    <div className="w-full h-screen flex flex-col mt-20 items-center">
      <div className="flex justify-center items-center flex-col gap-4">
        <PinIcon
          className="transform rotate-[60deg] text-4xl text-[yellowgreen]"
          size={40}
        />
        <h3 className="text-2xl lg:text-3xl font-bold">Sanity Check</h3>
        <p className="text-xl lg:text-2xl text-center opacity-70">
          Holisticly predominate extensible testing procedures for reliable
          supply chains. Dynamically innovate resource-leveling customer service
          for state of the art customer service.
        </p>
        <div>
          <button className="px-10 py-5 border-none outline-none bg-[yellowgreen] text-2xl rounded-full cursor-pointer hover:bg-green-600 transition duration-700 delay-100 text-white ">Check Now</button>
        </div>
      </div>
      <div className="bg-[yellowgreen]">

      </div>
    </div>
  );
};

export default Contact;
