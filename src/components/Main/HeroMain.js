import React from 'react'
import Animal from './../../assets/img/remove.png'
import { Link } from 'react-router-dom'
const HeroMain = () => {
  return (
    <div className='pt-20 w-full bg-[#588157]'>
        
        <div className='text-white text-center sm:absolute pt-10 left-1/2 sm:ml-[-50%] w-full'> 
            <h1 className='font-kanit font-semibold lg:text-5xl sm:text-3xl text-2xl'>Website Yayasan Mall Sampah</h1>
            <p className='font-roboto font-reguler lg:text-base  pt-6 w-[95%] m-auto'>Planet Bumi Merupakan Yayasan dari Perusahaan Mall Sampah Indonesia. Yayasan Ini Bergerak <br className=' hidden sm:block' />
            untuk menjaga bumi agar terhindar dari polusi kendaraan dan juga dari sampah-sampah yang dibuang 
            <br className=' hidden sm:block' />
            oleh manusia dengan cara mendaur ulang sampah dan selalu menjaga kebersihan alam di bumi kita ini.</p>
            <Link to="/TentangKami" ><button className=' m-6 lg:w-[150px] lg:h-[40px] w-[120px] h-[30px] text-xs lg:text-base bg-white text-[#588157] rounded-lg'> Pelajari Lebih lanjut </button></Link>
        </div>
        <img src={Animal} alt="" className='w-full object-cover sm:pt-20 '/>
    </div>
  )
}

export default HeroMain