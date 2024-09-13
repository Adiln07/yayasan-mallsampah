import React from 'react'
import Logo from "./../../assets/icon/logo.png"
import { Link } from 'react-router-dom'
import { useState } from 'react'

const Header = () => {

  const [open, setOpen] = useState(false)

  return (
    <div className='w-full h-20 bg-[#588157] flex sticky top-0 z-50 lg:gap-60 items-center justify-between'>
        <div className='text-white flex items-center gap-2 lg:ml-10 ml-3'>
          <h1 className='font-kanit font-semibold text-2xl'>Planet Bumi</h1>
          <img src={Logo} alt="" className='h-9 '/>
        </div>

        <div className="lg:hidden text-3xl text-white pr-5" onClick={()=>setOpen(!open)}>
            <ion-icon name={`${open ? 'close' : 'menu' }`} ></ion-icon>
        </div>

        <ul className='text-white lg:flex items-center hidden pr-10 '>
          <li>
            <Link className='font-kanit font-medium text-lg lg:pr-10 xl:pr-14 ' href="/">Beranda</Link>
          </li>
          <li>
            <a className='font-kanit font-medium text-lg lg:pr-10 xl:pr-14 ' href="/TentangKami">Tentang Kami </a>
          </li>
          <li>
            <a className='font-kanit font-medium text-lg lg:pr-10 xl:pr-14 ' href="/Program">Program</a>
          </li>
          <li>  
            <a className='font-kanit font-medium text-lg lg:pr-10 xl:pr-14 ' href="/Berita">Berita</a>
          </li>
          {/* <li>  
            <a className='font-kanit font-medium text-lg lg:pr-10 xl:pr-14 ' href="/">Publikasi</a>
          </li> */}
          <li>  
            <a className='font-kanit font-medium text-lg pr-10 ' href="/Kontak">Kontak</a>
          </li>
        </ul>
        
        {/* Mobile */}
        <ul className={`
        lg:hidden bg-[#588157] absolute w-full h-full pt-[9rem] py-24 z-[-1] duration-500 ${open ? 'left-0':'left-[-100%]' }
      `}>
          <li>
            <a className='pr-10 bg-[#588157] py-7 px-3 inline-block lg:cursor-pointer font-bold text-white' href="/">Beranda</a>
          </li>
          <li>
            <a className='pr-10 w-full bg-[#588157] py-7 px-3 inline-block lg:cursor-pointer font-bold text-white' href="/">Tentang Kami</a>
          </li>
          <li>
            <a className='pr-10 w-full bg-[#588157] py-7 px-3 inline-block lg:cursor-pointer font-bold text-white' href="/">Program</a>
          </li>
          <li>
            <a className='pr-10 w-full bg-[#588157] py-7 px-3 inline-block lg:cursor-pointer font-bold text-white' href="/">Berita</a>
          </li>
          {/* <li>
            <a className='pr-10 w-full bg-[#588157] py-7 px-3 inline-block lg:cursor-pointer font-bold text-white' href="/">Publikasi</a>
          </li> */}
          <li>
            <a className='pr-10 w-full bg-[#588157] py-7 px-3 inline-block lg:cursor-pointer font-bold text-white' href="/">Kontak</a>
          </li>
        </ul>
    </div>
  )
}

export default Header