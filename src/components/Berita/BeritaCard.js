import React from 'react'
import Mantap from "../../assets/img/Tentang Kami/mantap1.jpg"
const BeritaCard = () => {
  return (
    <div className="m-auto   w-[20em] h-[28em]  text-black">
            <img src={Mantap} alt="" className="rounded-lg" />
            <p className=" pl-2 pt-2 font-roboto">20 Februari 2020</p>
            <h1 className="mt-4 ml-2 font-bold text-2xl font-kanit text-[#3A5A40] ">
                Ngaji Bareng Pak Ustadz{" "}
            </h1>
            <p className="ml-2 h-[6.5em] font-roboto mt-3 text-justify ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
                numquam, ipsum officia suscipit esse doloribus repellendus
                obcaecati dignissimos eius distinctio.
            </p>
        </div>
  )
}

export default BeritaCard