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
    <td className='border'>{productName}</td>
    <td className='border'>{productPrice}</td>
    <td onClick={()=>deleteProduct(index)} style={{cursor:'pointer'}} className='border text-bg-danger'>X</td>
  </tr>


 
 
 
 
 </>
  )
}

export default Items
