import React from 'react'
import Plant from "../../assets/img/plant.jpg"
import Mall from "../../assets/img/mall.jpg"

const ContentDua = () => {
  return (
    <div className='bg-[#3A5A40]'>
        <div className='sm:flex'>
            <img src={Plant} alt="" className='sm:w-[50%] sm:h-[30em] lg:h-[35em] object-cover object-center' />
            <div className='text-white py-5 lg:py-0 w-[80%] sm:w-[45%] m-auto'>
                <h1 className='font-kanit font-semibold text-2xl lg:text-3xl text-center sm:text-left'>Protecting the Earth is a Shared Responsibility for a Better Future</h1>
                <p className='text-justify m-auto font-roboto py-5'>Menjaga bumi adalah tanggung jawab bersama yang bisa dilakukan melalui tindakan sederhana seperti mengurangi plastik, menghemat energi, dan mendukung produk ramah lingkungan. Dengan tindakan kolektif, kita dapat memastikan bumi tetap layak huni bagi generasi mendatang.</p>
            </div>
        </div>
        <div className='sm:flex flex-row-reverse '>
        <img src={Mall} alt="" className='sm:w-[50%] sm:h-[30em] lg:h-[35em] object-cover object-center' />
            <div className='text-white py-5 lg:py-0 w-[80%] sm:w-[45%] m-auto'>
                <h1 className='font-kanit font-semibold text-2xl lg:text-3xl text-center sm:text-left'>The Importance of Waste Recycling for Environmental Sustainability</h1>
                <p className='text-justify m-auto font-roboto py-5'>Daur ulang penting karena mengurangi sampah, menghemat sumber daya, mengurangi emisi, dan mendukung ekonomi dengan menciptakan lapangan kerja. Meski ada tantangan, investasi dan edukasi dapat mengatasinya. Partisipasi dalam daur ulang membantu menciptakan masa depan bumi yang lebih baik.
</p>
            </div>
        </div>
    </div>
  )
}

export default ContentDua