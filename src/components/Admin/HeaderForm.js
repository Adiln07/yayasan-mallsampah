import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Logo from "../../assets/icon/logo.png"

const HeaderForm = () => {


  return (
<div className='w-full h-20 bg-[#588157] flex sticky top-0 z-50 lg:gap-60 justify-center items-center'>
        <div className='text-white flex items-center gap-2 lg:ml-10 ml-3'>
          <h1 className='font-kanit font-semibold text-2xl'>Planet Bumi</h1>
          <img src={Logo} alt="" className='h-9 '/>
        </div>
    </div>
  )
}

export default HeaderForm