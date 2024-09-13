import React, { useEffect, useState } from "react";
import axios from "axios";
import DashboardAdmin from "../../components/layout/DashboardAdmin";
import { Link, useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";


const ManajemenBerita = () => {
  const [articles, setArticles] = useState([]);
  const [name, setName] = useState('')
  const [token, setToken] = useState('')
  const [expired, setExpired] = useState('')
  const navigate = useNavigate()
  

  useEffect(() => {
    refreshToken();
    getArticles();
  }, []);

  const refreshToken = async()=>{
    try {
      const response = await axios.get('http://localhost:4000/token');
      setToken(response.data.accessToken);
      const decoded = jwtDecode(response.data.accessToken)
      setName(decoded.name);
      setExpired(decoded.exp);
    } catch (error) {
      if(error.response){
        navigate('/Login')
      }
    }
  }

  const getArticles = async () => {
    const response = await axios.get("http://localhost:4000/articles");
    
    setArticles(response.data);
  };

  const deleteArticle = async (articleId) => {
    try {
      await axios.delete(`http://localhost:4000/articles/${articleId}`);
      getArticles();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <DashboardAdmin>
  
      <div className="font-inter py-16  ">
        <div className={` m-auto `}>
          <div className="md:text-end mb-2 mr-2 ">
            <Link to="/Form-Berita">
              <button className="bg-[#588157] text-white px-2 py-[0.5em] rounded-xl text-sm font-semibold">
                Tambah Berita
              </button>
            </Link>
          </div>
          {articles.length > 0 ? (
            <table className="table bg-white text-black">
              <thead>
                <tr>
                  <th>No</th>
                  <th>Judul</th>
                  <th>Gambar</th>
                  <th> Tanggal</th>
                  <th>Deskripsi</th>
                </tr>
              </thead>
              <tbody>
                {articles.map((article, index) => (
                  <tr key={article.id}>
                    <th>{index + 1}</th>
                    <td>
                      <h1 className="line-clamp-2 hover:line-clamp-none">
                        {article.judul}
                      </h1>
                    </td>
                    <td>
                      <img
                        src={article.url}
                        alt="Image"
                        className="rounded-xl  h-[5em] object-cover"
                      />
                    </td>
                    <td>{
                         (article.tanggal)
                      }</td>
                    <td className="">
                      <p className="text-xs text-justify line-clamp-3 hover:line-clamp-none">
                        {article.deskripsi}
                      </p>
                    </td>

                    <td>
                      <div className="xl:flex">
                        <Link to={`/Edit-Form-Berita/${article.id}`}>
                          <button className="bg-[#04AA6D] text-white px-3 py-[0.5em] mt-2 mr-2 rounded-xl text-sm font-semibold">
                            Edit
                          </button>
                        </Link>
                        <button
                          className="bg-[#d11a2a] text-white px-2 py-[0.5em] mt-2 mr-2 rounded-xl text-sm font-semibold"
                          onClick={() => deleteArticle(article.id)}
                        >
                          Hapus
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <h1 className="font-bold text-black font-kanit">Tidak Ada Berita</h1>
          )}
        </div>
      </div>
    </DashboardAdmin>
  );
};

export default ManajemenBerita;
