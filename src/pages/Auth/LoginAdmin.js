import React, { useState } from 'react'
import HeaderForm from '../../components/Admin/HeaderForm'
import LoginForm from '../../components/Admin/Login/LoginForm'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const LoginAdmin = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const Auth = async(e)=>{
    e.preventDefault();
    try {
        await axios.post("http://localhost:4000/login", {
            email: email,
            password:password
        });
        navigate('/Tabel-Berita')
    } catch (error) {
        if(error.response){
            setError(error.response.data.msg);
        }
    }
  }

  return (
    <div>
        <HeaderForm />
        <div className="flex w-full justify-center items-center pt-12 font-inter">
            <div className="md:w-[30em] md:h-[26em] h-[21em]  w-[21em] bg-[#DAD7CD] align-middle m-auto rounded-xl">
                <form onSubmit={Auth}>
                    <div className="md:w-[27em] w-[20em]  m-auto md:mt-20 mt-10 flex flex-col gap-y-5">
                        <h1 className="md:text-4xl text-3xl text-[#3A5A40] font-bold ">
                            MASUK
                        </h1>
                        <input
                            type="text"
                            placeholder="Alamat Email"
                            className="input input-bordered  md:h-[3.5em] border-[#3A5A40] placeholder-black bg-[#A3B18A] w-full mt-5"
                            value={email}
                            onChange={(e)=> setEmail(e.target.value)}
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            className="input input-bordered md:h-[3.5em] border-[#3A5A40] placeholder-black bg-[#A3B18A] w-full"
                            value={password}
                            onChange={(e)=> setPassword(e.target.value)}
                        />
                        <p>{error}</p>
                        <button className="btn bg-[#588157] hover:bg-[#344E41] text-white text-lg">
                            Log In
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default LoginAdmin