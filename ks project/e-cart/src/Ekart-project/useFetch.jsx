import React, { useEffect, useState } from 'react'
const useFetch = (url) => {
    const [data, setData] =useState([])
    useEffect(() =>{
        fun1()
    },[url])
    function fun1() {
        fetch(url)
        .then((response) => response.json())
        .then((data) => setData(data))
    }
  return data
}

export default useFetch
