const Service = () => {
  const items = [
    { title: "Synergize", image: "/images/concert.jpg" },
    { title: "Pontificate", image: "/images/pencil_sharpener.jpg" },
    { title: "Engage", image: "/images/writing.jpg" },
  ];

  return (
    <div className="w-full flex flex-col xl:flex-row justify-center">
      {items.map((item, index) => (
        <div
          key={index}
          role="button"
          aria-label={item.title}
          className="w-full h-64 overflow-hidden" // This contains the overflow
        >
          <div
            className="w-full h-full bg-cover bg-center flex justify-center items-center transform hover:scale-[1.08] transition duration-700 delay-100 cursor-pointer"
            style={{ backgroundImage: `url(${item.image})` }}
          >
            <h3 className="text-4xl sm:text-5xl xl:text-2xl text-white font-semibold drop-shadow-md">
              {item.title}
            </h3>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Service;
