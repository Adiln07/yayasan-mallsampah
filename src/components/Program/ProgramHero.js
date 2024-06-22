import React from 'react'
import Hero3 from "../../assets/img/Hero/Hero3.jpg"
const ProgramHero = () => {
  return (
    <div className=" relative">
    <div
      className="w-full xl:h-[30em]  md:h-[25em] h-[12em] bg-cover static "
      style={{
        backgroundImage: `url('${Hero3}')`,
      }}
    >
      <div className="bg-black w-full h-full opacity-50"></div>
    </div>
    <div className="font-kanit absolute xl:left-[8em] lg:left-24 xl:top-[11em] top-[3em] md:left-20 md:top-[9em] left-7">
      <p className="  text-white opacity-100  xl:text-6xl lg:text-5xl md:text-4xl text-3xl font-bold ">
        Program<br /> Mall Sampah
      </p>
    </div>
  </div>
  )
}

export default ProgramHero