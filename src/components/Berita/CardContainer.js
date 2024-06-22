import React from 'react'
import BeritaCard from './BeritaCard'

const CardContainer = () => {
  return (
    <div className="">
            <div className="flex flex-wrap md:max-w-[45em] lg:max-w-[70em] m-auto py-5 gap-y-5">
                <BeritaCard />
                <BeritaCard />
                <BeritaCard />
                <BeritaCard />
                <BeritaCard />
                <BeritaCard />
            </div>
        </div>
  )
}

export default CardContainer