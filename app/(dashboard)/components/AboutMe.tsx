import Image from "next/image";

const AboutMe = () => {
  return (
    <div className="w-full h-full py-12 px-20 bg-[#612f75]">
      <div className="flex flex-col md:flex-row gap-y-14 gap-x-20 items-center justify-center">
        <div>
          <Image
            src="/assets/karen.webp"
            alt="Picture of the author"
            width={300}
            height={300}
            className="w-auto h-auto object-cover shadow-2xl drop-shadow-2xl "
          />
        </div>
        <div className="h-full flex flex-col justify-center text-white gap-y-4 ">
          <p className="text-lg md:text-xl font-semibold">
            {" "}
            Specializing in the UnOrdinary
          </p>
          <p className="text-2xl md:text-3xl font-bold text-shadow-black">
            {" "}
            I am Girl Wonder Extraordinaire
          </p>
          <p className="text-md opacity-90">
            {" "}
            Los Angeles based Mixed Media Artist
          </p>
        </div>
      </div>
    </div>
  );
};
export default AboutMe;