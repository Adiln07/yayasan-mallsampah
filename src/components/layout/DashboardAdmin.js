import React from "react";
import Sidebar from "../Admin/Sidebar";
import HeaderAdmiin from "../Admin/HeaderAdmiin";

const DashboardAdmin = ({ children }) => {
  return (
    <div>
      <main className="flex w-full ">
        <Sidebar />
        <div className="flex flex-col items-center bg-[#DAD7CD] text-white basis-full flex-1 px-12">
          <HeaderAdmiin />
          {children}
        </div>
      </main>
    </div>
  );
};

export default DashboardAdmin;
