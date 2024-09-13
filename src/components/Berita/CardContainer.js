import React, { useEffect, useState } from 'react'
import BeritaCard from './BeritaCard'
import { Link } from 'react-router-dom'
import ReactPaginate from "react-paginate";

const CardContainer = ({articlesss}) => {

  const [page, setPage] = useState(0);
  const [filterData, setFilterData] = useState();
  const n = 6;

  useEffect(()=>{
      setFilterData(
        articlesss.filter((item, index)=>{
          return(index >= page * n) & (index < (page + 1)* n);
        })
      )
  }, [filterData])
  console.log("filter Data ", filterData)
  return (
    <div className="">
            <div className="flex flex-wrap md:max-w-[45em] lg:max-w-[70em]  m-auto pt-5 pb-8 gap-x-12 gap-y-10 justify-center ">
                {/* {articlesss.map((article, index)=>(
                  
                    <BeritaCard  key={article.id} {...article} />
                  
              
                ))} */}
                {filterData && filterData.map((item, index )=> (

                  <BeritaCard  key={item.id} {...item} />

                ))}
            </div>
            <div className="flex m-auto items-center justify-center flex-col pb-5">
                <ReactPaginate
                    containerClassName={"join"}
                    activeClassName={"btn-active"}
                    pageClassName={"join-item btn"}
                    onPageChange={(event) => setPage(event.selected)}
                    breakLabel="..."
                    pageCount={Math.ceil(articlesss.length / n)}
                    previousLabel={<button className="join-item btn">«</button>}
                    nextLabel={<button className="join-item btn">»</button>}
                />
            </div>
        </div>
  )
}

export default CardContainer