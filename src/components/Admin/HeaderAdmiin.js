import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Avatar from "../../assets/icon/avatar.png"
import Logo from "../../assets/icon/logo.png"
const HeaderAdmiin = () => {

    const [login, setLogin] = useState(false);

  return (
    <div className={`bg-[#3A5A40] w-full h-[5.5em] py-5 duration-300 flex items-center justify-between rounded-b-2xl`}>
            <div className='text-white flex items-center gap-2 lg:ml-10 ml-3'>
          <h1 className='font-kanit font-semibold text-2xl'>Planet Bumi</h1>
          <img src={Logo} alt="" className='h-9 '/>
        </div>
            {login ? (
                        <div className="flex items-center gap-1 pr-5">
                            <div className="avatar">
                                <div className="w-14 rounded-full">
                                    <img src={Avatar} />
                                </div>
                            </div>
                            <div className="dropdown dropdown-end">
                                <div
                                    tabIndex={0}
                                    role="button"
                                    className=" m-1"
                                >
                                    <ion-icon
                                        name="chevron-down-outline"
                                        size="large"
                                    ></ion-icon>
                                </div>
                                <ul
                                    tabIndex={0}
                                    className="dropdown-content z-[1] menu p-2 mt-2 shadow bg-base-100 rounded-box w-52"
                                >
                                    <li>
                                        <button
                                            className="text-black text-md font-medium"
                                            onClick={() => {
                                                setLogin(false);
                                            }}
                                        >
                                            keluar
                                        </button>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    ) : (
                        <button
                            className="font-inter font-semibold xl:text-xl lg:text-lg mr-10 px-4 hover:bg-[#8CAC84] hover:text-black py-[0.30rem] rounded-xl text-black bg-white"
                            onClick={() => {
                                setLogin(true);
                            }}
                        >
                            Masuk
                        </button>
                    )}
        </div>
  )
}

export default HeaderAdmiin