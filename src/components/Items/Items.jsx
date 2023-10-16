import React, { useContext, useEffect } from 'react'
import { dataContext } from '../context/DataContext'



const Items = ({data,index}) => {
  const {productName,productPrice} = data
  const x= useContext(dataContext)
 

  
  function deleteProduct(index){
        const updatedData = [...x.data];
    updatedData.splice(index, 1);
    x.setData(updatedData);
    localStorage.setItem('data',JSON.stringify(updatedData))
   

  }





  return (
 <>

 <tr>
      <td style={{minWidth:'150px'}} className='border  py-2'>{productName}</td>
      <td style={{minWidth:'150px'}} className='border  py-2'>{productPrice}</td>
      <td onClick={()=>deleteProduct(index)} style={{width:'150px',cursor:'pointer'}} className='border text-bg-danger'>x</td>
  </tr>

 
 
 
 
 </>
  )
}

export default Items
