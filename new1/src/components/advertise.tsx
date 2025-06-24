import { Apple } from "lucide-react";

const Advertise = () => {
  return (
    <div className="w-full bg-[yellowgreen] p-8 sm:p-16 md:p-20 lg:p-24 flex flex-col justify-center items-center gap-4 ">
      <Apple className="text-white size-14 sm:size-20 xl:size-32" />
      <h2 className="text-lg sm:xl md:text-2xl xl:text-4xl text-white font-semibold text-center tracking-[1px] ">
        Completely synergize resource taxing relationships
      </h2>

      <p className="text-sm  md:text-lg xl:text-2xl text-white opacity-70 text-center">
        Professionally cultivate one-to-one customer service with robust ideas.
        Dynamically innovate resource-leveling customer service for state of the
        art customer service.
      </p>
    </div>
  );
};

export default Advertise;
