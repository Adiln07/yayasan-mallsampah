import React, { useState } from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const menuItem = [
    {
      id: 1,
      path: "/admin-kegiatan",
      name: "Tabel Berita",
      icon: <ion-icon name="receipt-outline"></ion-icon>,
    },
  ];

  const [open, setOpen] = useState(false)

  return (
    <div
      className={`${
        open ? "w-[15em]" : "w-[2.5em]"
      } bg-[#3A5A40] h-screen sticky top-0 duration-300 font-inter`}
    >
      <div className="font-roboto  ml-1 mt-16">
        <div className=" flex gap-10 items-center text-white text-3xl ">
          <h1
            className={` font-bold ${
              !open && "hidden"
            } duration-200 origin-left font-kanit `}
          >
            Dashboard
          </h1>

          <div className="flex items-center " onClick={() => setOpen(!open)}>
            <ion-icon name="arrow-back-circle-outline"></ion-icon>
          </div>
        </div>

        <div className="flex flex-col  gap-y-8 py-16 ">
          {menuItem.map((item, index) => (
            <div className="flex gap-5 w-[20em] " key={index}>
              <div className=" text-white text-2xl ">
                <Link href={item.path}> {item.icon} </Link>
              </div>
              <Link href={item.path}>
                <p
                  className={` text-xl font-semibold text-white ${
                    !open && "hidden"
                  } duration-150`}
                >
                  {item.name}
                </p>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
