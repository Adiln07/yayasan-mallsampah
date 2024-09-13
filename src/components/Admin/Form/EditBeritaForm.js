import React from 'react'
import { Link } from 'react-router-dom'
const EditBeritaForm = () => {
  return (
    <div className="flex w-full justify-center items-center py-10 font-inter bg-[#a9a9a9]">
            <div className="lg:w-[55em] md:h-[41em] md:w-[45em] h-[38em] w-[21em] bg-[#DAD7CD] m-auto rounded-lg">
                <form action="" className="">
                    <div className="lg:w-[50em] md:w-[40em] w-[20em]  m-auto md:mt-10 mt-10 flex flex-col gap-y-3">
                        <h1 className="md:text-4xl text-3xl font-bold  color-black">
                            Edit Berita
                        </h1>
                        <div className="mt-5">
                            <label
                                htmlFor=""
                                className="pl-1 font-bold text-lg"
                            >
                                Judul
                            </label>
                            <input
                                type="text"
                                placeholder="Judul"
                                className="input input-bordered  md:h-[3.5em] border-[#3A5A40] bg-[#A3B18A] placeholder-black   w-full mt-1 "
                            />
                        </div>

                        <div className="">
                            <label
                                htmlFor=""
                                className="pl-1 font-bold text-lg"
                            >
                                Gambar
                            </label>
                            <input
                                type="file"
                                className="file-input md:h-[3.5em] border-[#3A5A40] bg-[#A3B18A] placeholder-black   w-full mt-1 flex items-center justify-center "
                            />
                        </div>

                        <div className="">
                            <label
                                htmlFor=""
                                className="pl-1 font-bold text-lg"
                            >
                                Tanggal
                            </label>
                            <input
                                type="date"
                                placeholder="Tanggal"
                                className="input input-bordered  md:h-[3.5em] border-[#3A5A40] bg-[#A3B18A] placeholder-black   w-full mt-1 "
                            />
                        </div>

                        <div className="">
                            <label
                                htmlFor=""
                                className="pl-1 font-bold text-lg"
                            >
                                Deskripsi
                            </label>
                            <textarea
                                className="textarea block w-full h-28 mt-1 border-[#3A5A40] bg-[#A3B18A] placeholder-black"
                                placeholder="Deskripsi Berita"
                            ></textarea>
                        </div>
                        <Link>
                            <button className="btn bg-[#588157] hover:bg-[#344E41] mt-2  text-white text-lg w-full">
                                Submit
                            </button>
                        </Link>
                    </div>
                </form>
            </div>
        </div>
  )
}

export default EditBeritaForm