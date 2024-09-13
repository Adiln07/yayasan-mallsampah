import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Avatar from "../../assets/icon/avatar.png"
import Logo from "../../assets/icon/logo.png"
const HeaderAdmiin = () => {

    const [login, setLogin] = useState(false);

  return (
    <div className={`bg-[#3A5A40] w-full h-[5.5em] py-5 duration-300 flex items-center justify-center rounded-b-2xl`}>
            <div className='text-white flex items-center gap-2 lg:ml-10 ml-3'>
          <h1 className='font-kanit font-semibold text-2xl'>Planet Bumi</h1>
          <img src={Logo} alt="" className='h-9 '/>
        </div>
        </div>
  )
}

export default HeaderAdmiin