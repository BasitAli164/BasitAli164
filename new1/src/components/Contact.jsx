import { Mail, Phone, Pin, PinIcon } from "lucide-react";
const Contact = () => {
  return (
    <div className="w-full h-screen flex flex-col mt-20 items-center">
      <div className="flex justify-center items-center flex-col gap-4 mb-10">
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
          <button className="px-10 py-5 border-none outline-none bg-[yellowgreen] text-2xl rounded-full cursor-pointer hover:bg-green-600 transition duration-700 delay-100 text-white ">
            Check Now
          </button>
        </div>
      </div>
      <div className="w-full h-screen bg-[yellowgreen] flex flex-col justify-center items-center gap-8">
        <p className="text-xl md:text-3xl xl:text-5xl font-bold text-white">
          Contact Us
        </p>
        <Phone className="size-10 text-white" />
        <p className="text-lg md:text-xl xl:text-2xl text-white">
          +923 475495500
        </p>
        <Mail className="size-10 text-white" />
        <p className="text-lg md:text-xl xl:text-2xl text-white">
          basitdeveloper911@gamil.com
        </p>
      </div>
    </div>
  );
};

export default Contact;
