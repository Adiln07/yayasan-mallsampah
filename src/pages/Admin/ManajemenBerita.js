import React from "react";
import DashboardAdmin from "../../components/layout/DashboardAdmin";
import { Link } from "react-router-dom";
import Mantap from "../../assets/img/Gallery/Gallery1.jpg";
const ManajemenBerita = () => {
  return (
    <DashboardAdmin>
      <div className="font-inter py-16 ">
        <div className={` m-auto `}>
          <div className="md:text-end mb-2 mr-2 ">
            <Link>
              <button className="bg-[#24A0ED] text-white px-2 py-[0.5em] rounded-xl text-sm font-semibold">
                Tambah Berita
              </button>
            </Link>
          </div>
          <table className="table bg-white text-black">
            <thead>
              <tr>
                <th>No</th>
                <th>Judul</th>
                <th>Gambar</th>
                <th> Tanggal</th>
                <th>Body</th>
                <th>Deskripsi</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>1</th>
                <td>
                  <h1 className="line-clamp-2 hover:line-clamp-none">
                    Judul Berita
                  </h1>
                </td>
                <td>
                  <img
                    src={Mantap}
                    alt="Avatar Tailwind CSS Component"
                    className="rounded-xl w- h-[5em] object-cover"
                  />
                </td>
                <td>2121323123123</td>
                <td className="">
                  <p className="text-xs text-justify line-clamp-3 hover:line-clamp-none">
                    {" "}
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Fugiat maiores aliquam veritatis porro officia vel veniam
                    sequi eaque consequuntur mollitia quibusdam possimus, cumque
                    provident voluptatem debitis architecto, molestias numquam
                    autem et quam, soluta quia quasi aliquid? Eaque earum cum
                    rerum sequi eveniet tempore inventore esse aliquam, incidunt
                    labore ratione laborum.
                  </p>
                </td>
                <td>
                  <p className="text-xs text-justify line-clamp-3 hover:line-clamp-none">
                    {" "}
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Dolor ipsa quas labore eum architecto laboriosam facilis
                    aspernatur nihil animi ipsam.
                  </p>
                </td>
                <td>
                  <div className="xl:flex">
                    <Link>
                      <button className="bg-[#04AA6D] text-white px-3 py-[0.5em] mt-2 mr-2 rounded-xl text-sm font-semibold">
                        Edit
                      </button>
                    </Link>
                    <Link>
                      <button className="bg-[#d11a2a] text-white px-2 py-[0.5em] mt-2 mr-2 rounded-xl text-sm font-semibold">
                        Hapus
                      </button>
                    </Link>
                  </div>
                </td>
              </tr>
              <tr>
                <th>1</th>
                <td>
                  <h1 className="line-clamp-2 hover:line-clamp-none">
                    Judul Berita
                  </h1>
                </td>
                <td>
                  <img
                    src={Mantap}
                    alt="Avatar Tailwind CSS Component"
                    className="rounded-xl w- h-[5em] object-cover"
                  />
                </td>
                <td>2121323123123</td>
                <td className="">
                  <p className="text-xs text-justify line-clamp-3 hover:line-clamp-none">
                    {" "}
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Fugiat maiores aliquam veritatis porro officia vel veniam
                    sequi eaque consequuntur mollitia quibusdam possimus, cumque
                    provident voluptatem debitis architecto, molestias numquam
                    autem et quam, soluta quia quasi aliquid? Eaque earum cum
                    rerum sequi eveniet tempore inventore esse aliquam, incidunt
                    labore ratione laborum.
                  </p>
                </td>
                <td>
                  <p className="text-xs text-justify line-clamp-3 hover:line-clamp-none">
                    {" "}
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Dolor ipsa quas labore eum architecto laboriosam facilis
                    aspernatur nihil animi ipsam.
                  </p>
                </td>
                <td>
                  <div className="xl:flex">
                    <Link>
                      <button className="bg-[#04AA6D] text-white px-3 py-[0.5em] mt-2 mr-2 rounded-xl text-sm font-semibold">
                        Edit
                      </button>
                    </Link>
                    <Link>
                      <button className="bg-[#d11a2a] text-white px-2 py-[0.5em] mt-2 mr-2 rounded-xl text-sm font-semibold">
                        Hapus
                      </button>
                    </Link>
                  </div>
                </td>
              </tr>
              <tr>
                <th>1</th>
                <td>
                  <h1 className="line-clamp-2 hover:line-clamp-none">
                    Judul Berita
                  </h1>
                </td>
                <td>
                  <img
                    src={Mantap}
                    alt="Avatar Tailwind CSS Component"
                    className="rounded-xl w- h-[5em] object-cover"
                  />
                </td>
                <td>2121323123123</td>
                <td className="">
                  <p className="text-xs text-justify line-clamp-3 hover:line-clamp-none">
                    {" "}
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Fugiat maiores aliquam veritatis porro officia vel veniam
                    sequi eaque consequuntur mollitia quibusdam possimus, cumque
                    provident voluptatem debitis architecto, molestias numquam
                    autem et quam, soluta quia quasi aliquid? Eaque earum cum
                    rerum sequi eveniet tempore inventore esse aliquam, incidunt
                    labore ratione laborum.
                  </p>
                </td>
                <td>
                  <p className="text-xs text-justify line-clamp-3 hover:line-clamp-none">
                    {" "}
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Dolor ipsa quas labore eum architecto laboriosam facilis
                    aspernatur nihil animi ipsam.
                  </p>
                </td>
                <td>
                  <div className="xl:flex">
                    <Link>
                      <button className="bg-[#04AA6D] text-white px-3 py-[0.5em] mt-2 mr-2 rounded-xl text-sm font-semibold">
                        Edit
                      </button>
                    </Link>
                    <Link>
                      <button className="bg-[#d11a2a] text-white px-2 py-[0.5em] mt-2 mr-2 rounded-xl text-sm font-semibold">
                        Hapus
                      </button>
                    </Link>
                  </div>
                </td>
              </tr>
              <tr>
                <th>1</th>
                <td>
                  <h1 className="line-clamp-2 hover:line-clamp-none">
                    Judul Berita
                  </h1>
                </td>
                <td>
                  <img
                    src={Mantap}
                    alt="Avatar Tailwind CSS Component"
                    className="rounded-xl w- h-[5em] object-cover"
                  />
                </td>
                <td>2121323123123</td>
                <td className="">
                  <p className="text-xs text-justify line-clamp-3 hover:line-clamp-none">
                    {" "}
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Fugiat maiores aliquam veritatis porro officia vel veniam
                    sequi eaque consequuntur mollitia quibusdam possimus, cumque
                    provident voluptatem debitis architecto, molestias numquam
                    autem et quam, soluta quia quasi aliquid? Eaque earum cum
                    rerum sequi eveniet tempore inventore esse aliquam, incidunt
                    labore ratione laborum.
                  </p>
                </td>
                <td>
                  <p className="text-xs text-justify line-clamp-3 hover:line-clamp-none">
                    {" "}
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Dolor ipsa quas labore eum architecto laboriosam facilis
                    aspernatur nihil animi ipsam.
                  </p>
                </td>
                <td>
                  <div className="xl:flex">
                    <Link>
                      <button className="bg-[#04AA6D] text-white px-3 py-[0.5em] mt-2 mr-2 rounded-xl text-sm font-semibold">
                        Edit
                      </button>
                    </Link>
                    <Link>
                      <button className="bg-[#d11a2a] text-white px-2 py-[0.5em] mt-2 mr-2 rounded-xl text-sm font-semibold">
                        Hapus
                      </button>
                    </Link>
                  </div>
                </td>
              </tr>
              <tr>
                <th>1</th>
                <td>
                  <h1 className="line-clamp-2 hover:line-clamp-none">
                    Judul Berita
                  </h1>
                </td>
                <td>
                  <img
                    src={Mantap}
                    alt="Avatar Tailwind CSS Component"
                    className="rounded-xl w- h-[5em] object-cover"
                  />
                </td>
                <td>2121323123123</td>
                <td className="">
                  <p className="text-xs text-justify line-clamp-3 hover:line-clamp-none">
                    {" "}
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Fugiat maiores aliquam veritatis porro officia vel veniam
                    sequi eaque consequuntur mollitia quibusdam possimus, cumque
                    provident voluptatem debitis architecto, molestias numquam
                    autem et quam, soluta quia quasi aliquid? Eaque earum cum
                    rerum sequi eveniet tempore inventore esse aliquam, incidunt
                    labore ratione laborum.
                  </p>
                </td>
                <td>
                  <p className="text-xs text-justify line-clamp-3 hover:line-clamp-none">
                    {" "}
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Dolor ipsa quas labore eum architecto laboriosam facilis
                    aspernatur nihil animi ipsam.
                  </p>
                </td>
                <td>
                  <div className="xl:flex">
                    <Link>
                      <button className="bg-[#04AA6D] text-white px-3 py-[0.5em] mt-2 mr-2 rounded-xl text-sm font-semibold">
                        Edit
                      </button>
                    </Link>
                    <Link>
                      <button className="bg-[#d11a2a] text-white px-2 py-[0.5em] mt-2 mr-2 rounded-xl text-sm font-semibold">
                        Hapus
                      </button>
                    </Link>
                  </div>
                </td>
              </tr>
              <tr>
                <th>1</th>
                <td>
                  <h1 className="line-clamp-2 hover:line-clamp-none">
                    Judul Berita
                  </h1>
                </td>
                <td>
                  <img
                    src={Mantap}
                    alt="Avatar Tailwind CSS Component"
                    className="rounded-xl w- h-[5em] object-cover"
                  />
                </td>
                <td>2121323123123</td>
                <td className="">
                  <p className="text-xs text-justify line-clamp-3 hover:line-clamp-none">
                    {" "}
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Fugiat maiores aliquam veritatis porro officia vel veniam
                    sequi eaque consequuntur mollitia quibusdam possimus, cumque
                    provident voluptatem debitis architecto, molestias numquam
                    autem et quam, soluta quia quasi aliquid? Eaque earum cum
                    rerum sequi eveniet tempore inventore esse aliquam, incidunt
                    labore ratione laborum.
                  </p>
                </td>
                <td>
                  <p className="text-xs text-justify line-clamp-3 hover:line-clamp-none">
                    {" "}
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Dolor ipsa quas labore eum architecto laboriosam facilis
                    aspernatur nihil animi ipsam.
                  </p>
                </td>
                <td>
                  <div className="xl:flex">
                    <Link>
                      <button className="bg-[#04AA6D] text-white px-3 py-[0.5em] mt-2 mr-2 rounded-xl text-sm font-semibold">
                        Edit
                      </button>
                    </Link>
                    <Link>
                      <button className="bg-[#d11a2a] text-white px-2 py-[0.5em] mt-2 mr-2 rounded-xl text-sm font-semibold">
                        Hapus
                      </button>
                    </Link>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </DashboardAdmin>
  );
};

export default ManajemenBerita;
