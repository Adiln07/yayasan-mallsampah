import React from "react";
import Program1 from "../../assets/img/Program/program1.jpg";
import Program2 from "../../assets/img/Program/program2.webp";
import Program3 from "../../assets/img/Program/program3.webp";

const ProgramContent = () => {
  return (
    <div className="bg-[#DAD7CD]">
      <div className="py-16">
        <div className="flex justify-center items-center md:flex-row flex-col gap-10 ">
          <img
            src={Program1}
            alt=""
            className="xl:w-[30em] lg:w-[28em] w-[21em] object-cover xl:h-[25em] lg:h-[23em] h-[16em] rounded-xl"
          />
          <div className="xl:w-[30em] lg:w-[28em] w-[21em]">
            <h1 className="font-kanit font-semibold text-[#3A5A40] xl:text-5xl lg:text-4xl md:text-3xl text-2xl ">
              Mall Sampah Box Penukaran Sampah
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
            src={Program2}
            alt=""
            className="xl:w-[30em] lg:w-[28em] w-[21em] object-cover xl:h-[25em] lg:h-[23em] h-[16em] rounded-xl"
          />
          <div className="xl:w-[30em] lg:w-[28em] w-[21em]">
            <h1 className="font-kanit font-semibold text-[#3A5A40] xl:text-5xl lg:text-4xl md:text-3xl text-2xl ">
              Mall Sampah dan Gojek Indonesia{" "}
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
        <div className="flex justify-center items-center md:flex-row flex-col gap-10 ">
          <img
            src={Program3}
            alt=""
            className="xl:w-[30em] lg:w-[28em] w-[21em] object-cover xl:h-[25em] lg:h-[23em] h-[16em] rounded-xl"
          />
          <div className="xl:w-[30em] lg:w-[28em] w-[21em]">
            <h1 className="font-kanit font-semibold text-[#3A5A40] xl:text-5xl lg:text-4xl md:text-3xl text-2xl ">
              Sinergi BUMN dan Green Tech{" "}
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
      </div>
    </div>
  );
};

export default ProgramContent;
