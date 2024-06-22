import React from "react";
import Hero1 from "../../assets/img/Hero/Hero1.jpg";

const HeroPage = () => {
  return (
    <div className=" relative">
      <div
        className="w-full xl:h-[30em]  md:h-[25em] h-[12em] bg-cover static "
        style={{
          backgroundImage: `url('${Hero1}')`,
        }}
      >
        <div className="bg-black w-full h-full opacity-50"></div>
      </div>
      <div className="font-kanit absolute xl:left-[8em] lg:left-24 xl:top-[11em] top-[3em] md:left-20 md:top-[9em] left-7">
        <p className="  text-white opacity-100  xl:text-6xl lg:text-5xl md:text-4xl text-3xl font-bold ">
          We Are The <br /> Recycling Network
        </p>
        <p className="font-kanit font-semibold text-white xl:text-2xl md:text-xl pt-1">#UbahJadiKebaikan</p>
      </div>
    </div>
  );
};

export default HeroPage;
