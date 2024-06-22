import React from "react";
import Waste from "../../assets/icon/waste.png";
const SampahCard = () => {
  return (
    <div className="lg:w-[60em] md:w-[45em] w-[21em] h-[44em] md:h-fit bg-[#588157] m-auto rounded-lg ">
      <h1 className="text-white font-kanit lg:text-4xl md:text-3xl font-semibold pt-3 md:ml-5 md:text-start text-2xl text-center ">
        Recycle For Everyone
      </h1>
      <div className="md:flex justify-center items-center lg:gap-20 gap-16 md:py-3  ">
        <img
          src={Waste}
          alt=""
          className="lg:w-[21em] md:w-[16em] w-[14em] m-auto md:m-0 "
        />
        <div className=" grid md:grid-cols-2 gap-x-5 gap-y-4 lg:h-[14em] justify-center md:justify-start md:h-[11em] mt-6 md:mt-0">
          <div className="lg:w-[14em] md:w-[10em] w-[18em] h-[6em]  bg-[#3A5A40] text-white rounded-lg lg:h-[6em] md:h-[5em] flex flex-col justify-center items-center">
            <p className="font-kanit font-semibold lg:text-4xl md:text-2xl text-3xl">
              1jt Kg+
            </p>
            <p className="font-roboto lg:text-xl md:text-base text-xl">Sampah Daur Ulang</p>
          </div>
          <div className="lg:w-[14em]  w-[18em] h-[6em]  md:w-[10em] bg-[#3A5A40] text-white rounded-lg lg:h-[6em] md:h-[5em] flex flex-col justify-center items-center">
            <p className="font-kanit font-semibold lg:text-4xl md:text-2xl text-3xl">
              100+
            </p>
            <p className="font-roboto lg:text-xl md:text-base text-xl">Gudang Sortir</p>
          </div>
          <div className="lg:w-[14em] md:w-[10em]  w-[18em] h-[6em] bg-[#3A5A40] text-white rounded-lg lg:h-[6em] md:h-[5em] flex flex-col justify-center items-center">
            <p className="font-kanit font-semibold lg:text-4xl md:text-2xl text-3xl">
              500+
            </p>
            <p className="font-roboto lg:text-xl md:text-base text-xl">Kolektor Lokal</p>
          </div>
          <div className="lg:w-[14em]  md:w-[10em]  w-[18em] h-[6em] bg-[#3A5A40] text-white rounded-lg lg:h-[6em] md:h-[5em] flex flex-col justify-center items-center">
            <p className="font-kanit font-semibold lg:text-4xl md:text-2xl text-3xl">
              30rb+
            </p>
            <p className="font-roboto lg:text-xl md:text-base text-xl">Pengguna</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SampahCard;
