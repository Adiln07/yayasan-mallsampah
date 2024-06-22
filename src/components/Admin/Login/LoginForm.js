import React from 'react'

const LoginForm = () => {
  return (
    <div className="flex w-full justify-center items-center pt-12 font-inter">
            <div className="md:w-[30em] md:h-[25em] h-[21em]  w-[21em] bg-[#DAD7CD] align-middle m-auto rounded-xl">
                <form action="" className="">
                    <div className="md:w-[27em] w-[20em]  m-auto md:mt-20 mt-10 flex flex-col gap-y-5">
                        <h1 className="md:text-4xl text-3xl text-[#3A5A40] font-bold ">
                            MASUK
                        </h1>
                        <input
                            type="text"
                            placeholder="Alamat Email"
                            className="input input-bordered  md:h-[3.5em] border-[#3A5A40] placeholder-black bg-[#A3B18A] w-full mt-5"
                        />
                        <input
                            type="text"
                            placeholder="Password"
                            className="input input-bordered md:h-[3.5em] border-[#3A5A40] placeholder-black bg-[#A3B18A] w-full"
                        />
                        <button className="btn bg-[#588157] hover:bg-[#344E41] text-white text-lg">
                            Log In
                        </button>
                    </div>
                </form>
            </div>
        </div>
  )
}

export default LoginForm