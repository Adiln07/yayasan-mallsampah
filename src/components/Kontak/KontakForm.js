import React from 'react'
import { Link } from 'react-router-dom'

const KontakForm = () => {
  return (
    <div className="bg-[#DAD7CD]">
            <div className="md:w-[40em] m-auto py-10 ">
                <h1 className="md:text-5xl md:text-start text-center font-kanit text-[#3A5A40] text-2xl font-semibold">
                    Waktunya Mendaur Ulang Sampah
                </h1>
                <form action="" className="">
                    <div className="md:w-[40em] w-[20em]  m-auto md:mt-5 mt-3 flex flex-col gap-y-5">
                        <input
                            type="text"
                            placeholder="Nama Lengkap"
                            className="  font-semibold input input-bordered  md:h-[3.5em] border-[#3A5A40] bg-[#A3B18A] placeholder-black border-[3.5px]  w-full mt-5"
                        />
                        <input
                            type="text"
                            placeholder="Nomor Ponsel"
                            className=" md:h-[3.5em]  font-semibold input input-bordered border-[#3A5A40] bg-[#A3B18A] placeholder-black border-[3.5px] w-full"
                        />
                        <input
                            type="text"
                            placeholder="Alamat Email"
                            className=" md:h-[3.5em]  font-semibold border-[#3A5A40] bg-[#A3B18A] placeholder-black border-[3.5px] input input-bordered w-full"
                        />
                        <textarea
                            className="textarea block w-full h-28 mt-1 font-semibold border-[#3A5A40] bg-[#A3B18A] placeholder-black border-[3.5px]"
                            placeholder="Harapan"
                        ></textarea>

                        <div className="text-end ">
                            <Link>
                                <button className="bg-[#588157] text-white px-8 py-[0.5em] rounded-xl text-sm font-semibold font-roboto">
                                    Kirim
                                </button>
                            </Link>
                        </div>
                    </div>
                </form>
            </div>
        </div>
  )
}

export default KontakForm