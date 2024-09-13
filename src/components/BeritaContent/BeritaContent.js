import React, { useEffect, useState } from 'react'
import BeritaLainnya from '../Berita/BeritaLainnya'
import CardContainer from '../Berita/CardContainer'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const BeritaContent = ({articless}) => {

    const {id} = useParams();
    const [article, setArticle] = useState({});


    useEffect(()=>{
        getArticleById(id, (data)=>{
            setArticle(data);
        });
      }, [id])

      const getArticleById = async() =>{
        const response = await axios.get(`http://localhost:4000/articles/${id}`);
        setArticle(response.data)
      }

  return (
    <div className='bg-[#DAD7CD]'>
        <div className="xl:w-[70em] lg:w-[60em] md:w-[45em] w-[21em] m-auto flex flex-col py-10 gap-y-10">
            <h1 className="text-center font-bold md:text-4xl lg:text-5xl text-2xl font-kanit text-[#3A5A40]">{article.judul}</h1>
            <div className="w-fit m-auto">
                <img
                    src={article.url}
                    alt=""
                    className="w-[60em] object-cover rounded-xl"
                />
                <div className="flex font-semibold text-base mt-2 gap-2 ">
                    <p className="border-r-[3px] border-black h-[1.4em] pr-2">{article.tanggal}</p>
                    <p>Admin</p>
                </div>
            </div>
            <p className="text-justify lg:w-[60em] md:w-[45em] m-auto">
                <div dangerouslySetInnerHTML={{__html: article.deskripsi}}>
                </div>
                
            </p>
        </div>
        <BeritaLainnya />
        <CardContainer articlesss={articless} />
    </div>
  )
}

export default BeritaContent