import React, { useEffect, useState } from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import BeritaContainer from '../../components/Berita/BeritaContainer'
import BeritaHero from '../../components/Berita/BeritaHero'
import axios from 'axios'


const BeritaPage = () => {
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
        <Header />
        <BeritaHero />
        <BeritaContainer articless={articles} />
        <Footer />
    </div>
  )
}

export default BeritaPage