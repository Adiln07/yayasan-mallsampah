import React from 'react'
import Beritautama from "../../assets/img/Berita/beritaUtama.jpg"
import BeritaLainnya from './BeritaLainnya'
import CardContainer from './CardContainer'

const BeritaContainer = () => {
  return (
    <div className='bg-[#DAD7CD] '>
        <div className='py-10'>
            <div className='xl:w-[60em] xl:h-[35em] lg:w-[55em] lg:h-[30em] md:w-[45em] md:h-[25em] w-[20.5em] h-[15em] bg-cover m-auto rounded-xl' style={{
            backgroundImage: `url('${Beritautama}')`,
          }}>
            <div className="w-full h-full rounded-xl  "
            style={{
              backgroundColor: "rgba(0,0,0, 0.50)",
            }}>
                <div className='text-white ml-[1em] xl:pt-[29em] lg:pt-[25em] md:pt-[20em] pt-[11em] '>
                    <p className='font-roboto md:text-lg'>15 Juli  2021</p>
                    <h1 className='font-kanit font-semibold md:text-4xl text-xl'>Mall Sampah ada di Jakarta</h1>
                </div>
            </div>
            </div>
        </div>

        <BeritaLainnya />
        <CardContainer />
    </div>
  )
}

export default BeritaContainer