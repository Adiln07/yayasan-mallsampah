import React from "react";
import Kebaikan from "../../assets/img/Tentang Kami/ubahjadikebaikan.jpg";
import Pantai from "../../assets/img/Tentang Kami/pantai.jpg";
import Mantap1 from "../../assets/img/Tentang Kami/mantap1.jpg";
import Kids from "../../assets/img/Tentang Kami/kids.jpg";
import Mantap2 from "../../assets/img/Tentang Kami/mantap2.jpg";
import Sekolah from "../../assets/img/Tentang Kami/sekolah.jpg";
import Start from "../../assets/img/Tentang Kami/start.jpg";

const TentangKamiGallery = () => {
  return (
    <div className="">
      <h1 className="font-kanit text-white font-semibold text-center md:text-4xl text-2xl ">
        Let's join recycling waste
      </h1>
      <div className=" justify-center mt-10 rounded-xl flex md:flex-row flex-col gap-[2em]">
        <div className="">
          <div
            className="xl:w-[28em] lg:w-[24em] md:w-[18em] md:h-[14em] h-[16em] w-[20.5em] m-auto md:m-0  rounded-xl bg-cover bg-center xl:bg-top"
            style={{
              backgroundImage: `url('${Kebaikan}')`,
            }}
          >
            <div
              className=" lg:w-full h-full rounded-xl"
              style={{
                backgroundColor: "rgba(0,0,0, 0.20)",
              }}
            ></div>{" "}
          </div>
          <div
            className="xl:w-[28em] lg:w-[24em] md:w-[18em] md:h-[14em] h-[16em] w-[20.5em] m-auto rounded-xl mt-[2em] bg-cover bg-center"
            style={{
              backgroundImage: `url('${Pantai}')`,
            }}
          >
            <div
              className=" lg:w-full h-full rounded-xl"
              style={{
                backgroundColor: "rgba(0,0,0, 0.20)",
              }}
            ></div>
          </div>
        </div>

        <div
          className=" bg-slate-400 lg:w-[35em] xl:w-[40em] md:w-[26em] w-[20.5em] m-auto md:m-0 md:h-[30em] h-[15em] rounded-xl bg-cover md:bg-center lg:bg-top"
          style={{
            backgroundImage: `url('${Mantap1}')`,
          }}
        >
          <div
            className="w-full h-full rounded-xl"
            style={{
              backgroundColor: "rgba(0,0,0, 0.20)",
            }}
          ></div>
        </div>
      </div>

      <div className=" justify-center rounded-xl flex md:flex-row-reverse flex-col-reverse pt-5 pb-10 gap-[2em]">
        <div className="">
          <div
            className="xl:w-[40em] lg:w-[35em] md:w-[26em] md:h-[14em] h-[16em] w-[20.5em] m-auto md:m-0  rounded-xl bg-cover bg-center xl:bg-top"
            style={{
              backgroundImage: `url('${Mantap2}')`,
            }}
          >
            <div
              className=" lg:w-full h-full rounded-xl"
              style={{
                backgroundColor: "rgba(0,0,0, 0.20)",
              }}
            ></div>{" "}
          </div>
          <div
            className="xl:w-[40em] lg:w-[35em] md:w-[26em] md:h-[14em] h-[16em] w-[20.5em] m-auto rounded-xl mt-[2em] bg-cover bg-center"
            style={{
              backgroundImage: `url('${Sekolah}')`,
            }}
          >
            <div
              className=" lg:w-full h-full rounded-xl"
              style={{
                backgroundColor: "rgba(0,0,0, 0.20)",
              }}
            ></div>
          </div>
        </div>

        <div
          className=" bg-slate-400 lg:w-[24em] xl:w-[28em] md:w-[18em] w-[20.5em] m-auto md:m-0 md:h-[30em] h-[15em] rounded-xl bg-cover bg-center lg:bg-top"
          style={{
            backgroundImage: `url('${Kids}')`,
          }}
        >
          <div
            className="w-full h-full rounded-xl"
            style={{
              backgroundColor: "rgba(0,0,0, 0.20)",
            }}
          ></div>
        </div>
      </div>
      <div className="mt-20">
        <div
          className="m-auto xl:w-[75em] lg:w-[60em] md:w-[45em] lg:h-[25em] md:h-[15em] w-[20em] h-[10em] bg-cover bg-center"
          style={{
            backgroundImage: `url('${Start}')`,
          }}
        >
          {" "}
          <div
            className="w-full h-full  "
            style={{
              backgroundColor: "rgba(0,0,0, 0.40)",
            }}
          >
            <div className="text-white font-kanit font-semibold lg:pt-[7em] md:pt-16 md:ml-10 ml-3 pt-10 ">
              <h2 className="xl:text-6xl lg:text-5xl md:text-4xl text-xl">
                i'ts time For You <br /> To Start
              </h2> 
              <p className="xl:text-3xl lg:text-2xl md:text-xl text-sm pt-2">#ubahjadikebaikan</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TentangKamiGallery;
