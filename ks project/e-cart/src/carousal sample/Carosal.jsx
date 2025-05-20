import { useEffect, useState } from "react"

const Carosal = () => {
   const url=["https://imgv3.fotor.com/images/slider-image/A-clear-close-up-photo-of-a-woman.jpg","https://media.istockphoto.com/id/480354734/photo/the-shepherd-and-the-moon.jpg?s=612x612&w=0&k=20&c=lk8i2p-_mQNtPVY7ne0w87ujIBsEAlBURZCFPXTHtGA=","https://www.shaadidukaan.com/vogue/wp-content/uploads/2019/08/hug-kiss-images.jpg"]
    const[dataa,setDataa]=useState(0)

    const pre=()=>{
        setDataa((dataa)=>dataa == 0?url.length -1:dataa-1)
    }
    const nex=()=>{
        setDataa((dataa)=>dataa == url.length -1?0:dataa+1)
    }
    useEffect(()=>{
        setInterval(nex,2000)
    },[])
    // const myinter = setInterval(nex,2000)

  return (
    <>

    <div className="row">

      <div className="btn_1 col-lg-3">
        <button className="btn btn-success ms-5" onClick={pre}>Prev</button>
      </div>
      <div className="img-fluid d-flex col-lg-6 justify-content-center mt-5">
        {url.map((v,i)=>
        <img src={v} alt="no-image" height={500} width={500} style={dataa == i?{display:"block"}:{display:"none"}} />
        )}
      </div>
      <div className="btn_1 col-lg-3">
        <button className="btn btn-success" onClick={nex}>Next</button>
      </div>
    </div>
    </>
  )
}

export default Carosal
