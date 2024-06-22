import React from 'react'
import Logo from "./../../assets/icon/logo.png"
import Facebook from "../../assets/icon/facebook.png"
import Instagram from "../../assets/icon/instagram.png"
import Twitter from "../../assets/icon/twitter.png"
import Linkedin from "../../assets/icon/linkedin.png"
import Youtube from "../../assets/icon/youtube.png"
import Whatsapp from "../../assets/icon/whatsapp.png"

const Footer = () => {
  return (
    <div className='bg-[#344E41]'>
      <div className='text-white text-center py-6'>
      <div className='text-white flex items-center gap-2 lg:ml-10 ml-3 m-auto justify-center'>
          <h1 className='font-kanit font-semibold text-3xl sm:text-4xl'>Planet Bumi</h1>
          <img src={Logo} alt="" className='h-9 sm:h-10'/>
        </div>
        <p className='font-roboto w-[75%] sm:w-[90%] lg:w-[75%] m-auto py-8 text-center '>Mallsampah ialah platform daur ulang sampah online yang menghubungkan pengguna layanan dengan unit-unit pengelola sampah (pemulung dan pengepul) yang menjadi mitra mereka <span className='hidden sm:inline'>Mallsampah di desain untuk menangkap sampah dari sumbernya, dengan ukuran paling kecil sekalipun, dengan memiliki 1jt kg+ sampah didaur ulang 100+ gudang sortir 500+ kolektor lokal dan 30rb+ pengguna aplikasi</span> </p>
        <div className='flex justify-center gap-4'>
          <img src={Facebook} alt="" href="www.youtube.com" className='w-6'/>
          <img src={Instagram} alt="" href="" className='w-6'/>
          <img src={Twitter} alt="" href="" className='w-6'/>
          <img src={Linkedin} alt="" href="" className='w-6'/>
          <img src={Youtube} alt="" href="" className='w-6'/>
          <img src={Whatsapp} alt="" href="" className='w-6'/>
        </div>
        <h2 className='font-kanit font-semibold pt-8'>© PT Mall Sampah Indonesia 2023</h2>
      </div>
    </div>
  )
}

export default Footer