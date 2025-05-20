


import { useEffect, useState } from "react";


const Homecard = ({cat}) => {
    const[datas,setDatas]=useState([])
    useEffect(()=>{
        fetch("https://fakestoreapi.com/products")
        .then((res)=>res.json())
        .then((resdata)=>setDatas(resdata))
    },[])
    
    const def=datas.filter((val)=>val.category === cat).slice(1,4)
    console.log(def)
    // setAudios(def)
    // console.log(def);    
  return (
    <>
    <div className="container">
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 ">
            {def.map((v,i)=>(<div className="container mt-3 pb-5">
                    <div className="card mt-5 mb-5 bg-body rounded shadow-lg border border-5 border-secondary cardy">
                      <img
                        src={v.image}
                        className="card-img-top p-5"
                        alt="..."
                        height={400}
                      ></img>
                      <div className="card-body text-center">
                        <h4 className="card-title">{v.brand}</h4>
                        <h5 className="text-danger">From ${Math.floor(v.price)} Only !</h5>
                      </div>
                    </div>
                  </div>
            ))}
        </div>
    </div>
      
    </>
  )
}

export default Homecard
