import React from 'react'
import Gallery1 from "../../assets/img/Gallery/Gallery1.jpg"
import Gallery2 from "../../assets/img/Gallery/Gallery2.jpg"
import Gallery3 from "../../assets/img/Gallery/Gallery3.jpg"
import Gallery4 from "../../assets/img/Gallery/Gallery4.jpg"
import Gallery5 from "../../assets/img/Gallery/Gallery5.jpg"
import Gallery6 from "../../assets/img/Gallery/Gallery6.jpg"

const Gallery = () => {
  return (
    <div className='bg-[#8CAC84] pb-2 sm:pb-12'>
      <h1 className='text-white text-center font-kanit py-5 lg:py-8 text-3xl lg:text-4xl font-semibold'>Gallery</h1>
      <div className='sm:flex justify-center sm:gap-4 lg:gap-5'>
        <div className=' w-[22em] h-[10em] sm:h-[22em] sm:w-[11em] lg:w-[18em] lg:h-[28em] bg-center bg-cover m-auto sm:m-0 rounded-lg' style={{
          backgroundImage: `url('${Gallery1}')`
        }}>
          <div className='w-full h-full rounded-lg'
                style={{
                  backgroundColor : "rgba(0,0,0, 0.35)"
                }}>
            <h2 className='text-white font-kanit font-medium pt-2 pl-2 text-xl sm:text-lg lg:text-xl' >lorem Ipsum Dolor <br />Amet</h2>
          </div>  
        </div>
        <div className=' w-[22em] h-[14em] sm:h-[22em] lg:w-[35em] lg:h-[28em] bg-cover m-auto my-5 sm:m-0 rounded-lg' style={{
          backgroundImage: `url('${Gallery2}')`
        }}>
          <div className='w-full h-full rounded-lg'
                style={{
                  backgroundColor : "rgba(0,0,0, 0.35)"
                }}>
            <h2 className='text-white font-kanit font-medium pt-2 pl-2 text-xl sm:text-lg lg:text-xl' >lorem Ipsum Dolor <br />Amet</h2>
          </div>  
        </div>
        <div className=' w-[22em] h-[10em] sm:h-[22em] sm:w-[11em] lg:w-[18em] lg:h-[28em] bg-center bg-cover m-auto my-5 sm:m-0 rounded-lg' style={{
          backgroundImage: `url('${Gallery3}')`
        }}>
          <div className='w-full h-full rounded-lg'
                style={{
                  backgroundColor : "rgba(0,0,0, 0.35)"
                }}>
            <h2 className='text-white font-kanit font-medium pt-2 pl-2 text-xl sm:text-lg lg:text-xl' >lorem Ipsum Dolor <br />Amet</h2>
          </div>  
        </div>
      </div>
      
      <div className='sm:flex justify-center sm:gap-4 sm:pt-6  lg:gap-5'>
        <div className=' w-[22em] h-[10em] sm:h-[22em] sm:w-[11em] lg:w-[18em] lg:h-[28em] sm:bg-center bg-cover m-auto sm:m-0 rounded-lg' style={{
          backgroundImage: `url('${Gallery4}')`
        }}>
          <div className='w-full h-full rounded-lg'
                style={{
                  backgroundColor : "rgba(0,0,0, 0.35)"
                }}>
            <h2 className='text-white font-kanit font-medium pt-2 pl-2 text-xl sm:text-lg lg:text-xl' >lorem Ipsum Dolor <br />Amet</h2>
          </div>  
        </div>
        <div className=' w-[22em] h-[14em] sm:h-[22em] lg:w-[35em] lg:h-[28em] bg-cover bg-center m-auto my-5 sm:m-0 rounded-lg' style={{
          backgroundImage: `url('${Gallery5}')`
        }}>
          <div className='w-full h-full rounded-lg'
                style={{
                  backgroundColor : "rgba(0,0,0, 0.35)"
                }}>
            <h2 className='text-white font-kanit font-medium pt-2 pl-2 text-xl sm:text-lg lg:text-xl' >lorem Ipsum Dolor <br />Amet</h2>
          </div>  
        </div>
        <div className=' w-[22em] h-[10em] sm:h-[22em] sm:w-[11em] lg:w-[18em] lg:h-[28em] bg-center bg-cover m-auto my-5 sm:m-0 rounded-lg' style={{
          backgroundImage: `url('${Gallery6}')`
        }}>
          <div className='w-full h-full rounded-lg'
                style={{
                  backgroundColor : "rgba(0,0,0, 0.35)"
                }}>
            <h2 className='text-white font-kanit font-medium pt-2 pl-2 text-xl sm:text-lg lg:text-xl' >lorem Ipsum Dolor <br />Amet</h2>
          </div>  
        </div>
      </div>
    </div>
  )
}

export default Gallery