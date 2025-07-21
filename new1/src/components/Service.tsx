const Service = () => {
  return (
    <div className=" w-full  flex flex-col xl:flex-row justify-center  ">
      <div className="bg-[url(/images/concert.jpg)] bg-cover bg-center flex justify-center items-center transform hover:scale-[1.08] cursor-pointer transition duration-700 delay-100  w-full h-64">
        <h3 className="text-5xl xl:text-2xl text-white">Synergize</h3>
      </div>
      <div className="bg-[url(/images/pencil_sharpener.jpg)] bg-cover bg-center flex justify-center items-center transform hover:scale-[1.09] cursor-pointer transition duration-700 delay-100 w-full h-64">
        <h3 className="text-5xl xl:text-2xl text-white">Pontificate</h3>
      </div>
      <div className="bg-[url(/images/writing.jpg)] bg-cover bg-center  flex justify-center items-center transform hover:scale-[1.09] cursor-pointer transition duration-700 delay-100 w-full h-64">
        <h3 className="text-5xl xl:text-2xl text-white">Engage</h3>
      </div>
    </div>
  );
};

export default Service;
