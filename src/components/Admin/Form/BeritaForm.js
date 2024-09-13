import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

const BeritaForm = () => {

    const [title, setTitle] = useState('')
    const [deskripsi, setDeskripsi] = useState('')
    const [date, setDate ] = useState('')
    const [file, setFile ] = useState('')

    const navigate = useNavigate()

    const loadImage = (e) =>{
        const image = e.target.file[0];
        setFile(image);
    }

    const saveArticle = async(e) =>{
        e.preventDefault();
        const formData = new FormData();
        formData.append("file", file);
        formData.append("title", title);
        formData.append("deskripsi", deskripsi);
        formData.append("date", date);

        try {
            await axios.post("http://localhost:4000/articles", formData, {
                headers:{
                    "Content-Type": "multipart/form-data"
                }
            })
            navigate('/');
        } catch (error) {
            console.log(error)
        }
    }

  return (
    <div className="flex w-full justify-center items-center py-10 font-inter bg-[#a9a9a9]">
            <div className="lg:w-[55em] md:h-[41em] md:w-[45em] h-[38em] w-[21em] bg-[#DAD7CD] m-auto rounded-lg">
                <form action="" className="" onSubmit={saveArticle}>
                    <div className="lg:w-[50em] md:w-[40em] w-[20em]  m-auto md:mt-10 mt-10 flex flex-col gap-y-3">
                        <h1 className="md:text-4xl text-3xl font-bold  color-black">
                            Isi Berita
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
                                value={title}
                                onChange={ (e)=>setTitle(e.target.value)}
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
                                onChange={loadImage}
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
                                value={date}
                                onChange={(e)=> setDate(e.target.value)}
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
                                value={deskripsi}
                                onChange={(e)=> setDeskripsi(e.target.value)}
                            ></textarea>
                        </div>
                        <Link>
                            <button className="btn bg-[#588157] hover:bg-[#344E41] mt-2  text-white text-lg w-full" type='submit'>
                                Submit
                            </button>
                        </Link>
                    </div>
                </form>
            </div>
        </div>
  )
}

export default BeritaForm