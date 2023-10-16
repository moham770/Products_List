import React, { useEffect, useState } from 'react'
import { createContext } from "react";
export const dataContext = createContext()

export default function DataContext({children}) {


const [data ,setData] = useState([])

useEffect(()=>{
    if(localStorage.getItem('data')){
        setData(JSON.parse(localStorage.getItem('data')))
    }else{
        setData([])
    }
},[])

  return <dataContext.Provider value={{data ,setData}}>
{children}



  </dataContext.Provider>


  

}



