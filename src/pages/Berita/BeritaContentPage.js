import React, { useEffect, useState } from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import BeritaContent from '../../components/BeritaContent/BeritaContent'
import axios from 'axios'

const BeritaContentPage = () => {

  const [articles, setArticles] = useState([]);

  
  useEffect(() => {
    getArticles();
  }, []);

  const getArticles = async () => {
    const response = await axios.get("http://localhost:4000/articles");
    setArticles(response.data);
  };

  return (
    <div>
        <Header/>
        <BeritaContent articless={articles} />
        <Footer />
    </div>
  )
}

export default BeritaContentPage