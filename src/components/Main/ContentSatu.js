import React from 'react'
import Earth from "../../assets/icon/earth.png"
import Sampah from "../../assets/icon/recycke.png"
import Harimau from "../../assets/icon/harimau2.png"
const ContentSatu = () => {
  return (
    <div className='bg-[#DAD7CD] py-5 m-auto'>
        <h1 className='text-center font-kanit font-semibold text-3xl lg:text-4xl'>Save The World</h1>
        <div className='py-5 lg:py-10 sm:flex  lg:w-[90%] m-auto'>
            <div className=''> 
                <img src={Earth} alt="" className='bg-[#3A5A40] m-auto w-36 lg:w-40 rounded-full' />
                <h2 className='text-center py-5 font-kanit font-semibold text-2xl'>Save Earth Plant</h2>
                <p className=' m-auto text-justify w-[80%] lg:w-[65%] font-roboto'>Bergabunglah dalam Gerakan 'Tanamkan Harapan, Selamatkan Bumi' untuk menjaga keberlanjutan lingkungan dan mewujudkan masa depan yang lebih hijau.</p>
            </div>
            <div className='py-14 sm:py-0'> 
                <img src={Sampah} alt="" className='bg-[#3A5A40] m-auto w-36 lg:w-40 rounded-full' />
                <h2 className='text-center py-5 font-kanit font-semibold text-2xl'>Recycle Your Waste</h2>
                <p className=' m-auto text-justify w-[80%] lg:w-[65%] font-roboto'>Memilah dan Mendaur Ulang Sampah Anda adalah Langkah Kecil yang Berdampak Besar dalam Pelestarian Lingkungan dan Kesejahteraan Bumi Kita.</p>
            </div>
            <div className=''> 
                <img src={Harimau} alt=""  className='bg-[#3A5A40] m-auto w-36 lg:w-40 h-36 lg:h-40 rounded-full' />
                <h2 className='text-center py-5 font-kanit font-semibold text-2xl'>Save Animal Planet</h2>
                <p className=' m-auto text-justify w-[80%] lg:w-[65%] font-roboto'>Lindungi keanekaragaman hayati dengan menghargai habitat alam mereka. Melalui pelestarian satwa liar, kita tidak hanya menjaga keseimbangan ekosistem bumi </p>
            </div>
        </div>
    </div>
  )
}

export default ContentSatu