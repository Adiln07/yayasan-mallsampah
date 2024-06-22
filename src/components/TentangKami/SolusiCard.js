import React from "react";
import Hijau from "../../assets/icon/hijau.png";
import Orange from "../../assets/icon/orange.png";
import Merah from "../../assets/icon/merah.png";
import Biru from "../../assets/icon/biru.png";
import { Link } from "react-router-dom";

const SolusiCard = () => {
  return (
    <div className="py-10">
      <h1 className="font-kanit font-semibold text-white md:text-4xl text-2xl text-center">
        A technology to end waste
      </h1>
      <div className="py-10 grid  xl:w-[70em] lg:grid-cols-4 md:grid-cols-2 md:w-[35em] lg:w-full gap-y-5 lg:gap-y-0 m-auto ">
        <div className=" w-[15em] h-[17em]  m-auto border-2  rounded-xl">
          <div className="flex  items-center justify-start ml-4 pt-4 gap-4">
            <img
              src={Hijau}
              alt=""
              className="w-[3em] rounded-3xl object-cover"
            />
            <h1 className="text-white font-kanit font-semibold text-xl">
              For Everyone
            </h1>
          </div>
          <p className="font-roboto text-white text-center w-[90%] h-[8.5em] m-auto py-5">
            Ambil langkahmu dan hentikan pencemaran laut terbesar sepanjang
            sejarah dengan daur ulang sampah.{" "}
          </p>
          <div className="text-center ">
            <Link to="https://www.mallsampah.com/solution/everyone">
              <button className="bg-[#3A5A40] text-white mb-5 px-2 py-[0.5em] rounded-xl text-sm font-semibold">
                Pelajari Lebih Lanjut
              </button>
            </Link>
          </div>
        </div>
        <div className=" w-[15em] h-[17em]  m-auto border-2  rounded-xl">
          <div className="flex  items-center justify-start ml-4 pt-4 gap-4">
            <img
              src={Orange}
              alt=""
              className="w-[3em] rounded-3xl object-cover"
            />
            <h1 className="text-white font-kanit font-semibold text-xl">
              Business
            </h1>
          </div>
          <p className="font-roboto text-white text-center w-[90%] h-[8.5em] m-auto py-5">
            Ciptakan bisnis dan kantor ramah lingkungan dengan mendaur ulang
            sampah yang Anda hasilkan.
          </p>
          <div className="text-center ">
            <Link to="https://www.mallsampah.com/solution/bussiness">
              <button className="bg-[#3A5A40] text-white mb-5 px-2 py-[0.5em] rounded-xl text-sm font-semibold">
                Pelajari Lebih Lanjut
              </button>
            </Link>
          </div>
        </div>
        <div className=" w-[15em] h-[17em]  m-auto border-2  rounded-xl">
          <div className="flex  items-center justify-start ml-4 pt-4 gap-4">
            <img
              src={Merah}
              alt=""
              className="w-[3em] rounded-3xl object-cover"
            />
            <h1 className="text-white font-kanit font-semibold text-base">
              Corporate & Brand
            </h1>
          </div>
          <p className="font-roboto text-white text-center w-[90%] h-[8.5em] m-auto py-5">
            membantu perusahaan/brand untuk mengumpulkan dan memulihkan produk
            pasca konsumsi mereka.
          </p>
          <div className="text-center ">
            <Link to='https://www.mallsampah.com/solution/corporate'>
              <button className="bg-[#3A5A40] text-white mb-5 px-2 py-[0.5em] rounded-xl text-sm font-semibold">
                Pelajari Lebih Lanjut
              </button>
            </Link>
          </div>
        </div>
        <div className=" w-[15em] h-[17em] m-auto border-2  rounded-xl">
          <div className="flex  items-center justify-start ml-4 pt-4 gap-4">
            <img
              src={Biru}
              alt=""
              className="w-[3em] rounded-3xl object-cover"
            />
            <h1 className="text-white font-kanit font-semibold text-xl">
              Goverment{" "}
            </h1>
          </div>
          <p className="font-roboto text-white text-center w-[90%] h-[8.5em] m-auto py-5">
            solusi teknologi pengelolaan sampah dan daur ulang bagi pemerintah
            kota dan desa
          </p>
          <div className="text-center ">
            <Link to="https://www.mallsampah.com/solution/government"> 
              <button className="bg-[#3A5A40] text-white mb-5 px-2 py-[0.5em] rounded-xl text-sm font-semibold">
                Pelajari Lebih Lanjut
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SolusiCard;
