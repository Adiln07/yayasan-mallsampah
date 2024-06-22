import React from "react";
import Green from "../../assets/img/Tentang Kami/green.jpg";
import Angkut from "../../assets/img/Tentang Kami/angkut.jpg";
import SampahCard from "./SampahCard";

const TentangKamiContainer = () => {
  return (
    <div className="bg-[#DAD7CD]">
      <div className=" py-16 ">
        <div className="flex justify-center items-center md:flex-row flex-col gap-10 ">
          <img
            src={Green}
            alt=""
            className="xl:w-[30em] lg:w-[28em] w-[21em] object-cover xl:h-[25em] lg:h-[23em] h-[16em] rounded-xl"
          />
          <div className="xl:w-[30em] lg:w-[28em] w-[21em]">
            <h1 className="font-kanit font-semibold text-[#3A5A40] xl:text-5xl lg:text-4xl md:text-3xl text-2xl ">
              Together We Create A Green World{" "}
            </h1>
            <p className="lg:text-lg md:text-base text-sm text-justify pt-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Sapien
              eget mi proin sed libero enim sed. Lobortis feugiat vivamus at
              augue eget arcu dictum varius. Suspendisse ultrices gravida dictum
              fusce ut placerat. Aliquam vestibulum morbi blandit cursus. Dictum
              fusce ut placerat orci nulla. At tempor commodo{" "}
            </p>
          </div>
        </div>
        <div className="flex justify-center items-center md:flex-row-reverse flex-col gap-10 py-10 ">
          <img
            src={Angkut}
            alt=""
            className="xl:w-[30em] lg:w-[28em] w-[21em] object-cover xl:h-[25em] lg:h-[23em] h-[16em] rounded-xl"
          />
          <div className="xl:w-[30em] lg:w-[28em] w-[21em]">
            <h1 className="font-kanit font-semibold text-[#3A5A40] xl:text-5xl lg:text-4xl md:text-3xl text-2xl ">
              Recycle Your Waste To Make Better Life{" "}
            </h1>
            <p className="lg:text-lg md:text-base text-sm text-justify pt-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Sapien
              eget mi proin sed libero enim sed. Lobortis feugiat vivamus at
              augue eget arcu dictum varius. Suspendisse ultrices gravida dictum
              fusce ut placerat. Aliquam vestibulum morbi blandit cursus. Dictum
              fusce ut placerat orci nulla. At tempor commodo{" "}
            </p>
          </div>
        </div>

        <SampahCard />
      </div>
    </div>
  );
};

export default TentangKamiContainer;
