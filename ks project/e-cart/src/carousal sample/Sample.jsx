import React from "react";
import { toast, ToastContainer } from 'react-toastify'

export default function Sample() {
    function fun1(){
        toast("your product stored")
    }
  return (
    <>
      <button onClick={fun1}>Click</button>
      <ToastContainer/>
    </>
  );
}
