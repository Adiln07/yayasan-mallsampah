import React from 'react'
import Mantap from "../../assets/img/Tentang Kami/mantap1.jpg"
import { Link } from 'react-router-dom'
const BeritaCard = ({judul, tanggal,url, deskripsi, id}) => {
  return (
    <Link to={`/Berita-Content/${id}`}>
      <div className="m-auto   w-[20em] h-[28em]  text-black" >
            <img src={url} alt="" className="rounded-lg w-full h-[12em] " />
            <p className=" pl-2 pt-2 font-roboto">{tanggal}</p>
            <h1 className="mt-4 ml-2 font-bold text-2xl font-kanit text-[#3A5A40] ">
                {judul.substring(0,70)}
            </h1>
            <p className="ml-2 h-[6.5em] font-roboto mt-3 text-justify ">
                {deskripsi.substring(0,150)}
            </p>
        </div>
    </Link>
    
  )
}

export default BeritaCard