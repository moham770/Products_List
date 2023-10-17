import React, { useContext } from 'react'
import styles from './Home.module.css'
import AddItems from '../AddItem/AddItems'
import Items from '../Items/Items'
import { dataContext } from '../context/DataContext'

const Home = () => {
    const {data}=  useContext(dataContext)

  const totalSum = data.reduce((sum, item) => sum + parseFloat(item.productPrice), 0);


  return <>
  <div className=" container">
   <AddItems/>
  <div className="d-flex  justify-content-center align-items-center w-100  ">
<div className="text-center w-100">
  <h1>Products List</h1>
  <table className='table bg-danger text-center w-100 mx-auto p-0'>
    <thead >
      <tr className='border' >
        <th style={{backgroundColor:'#09c'}} className='border'>Product</th>
        <th style={{backgroundColor:'#09c'}} className='border'>Price</th>
        <th style={{backgroundColor:'#09c'}} className='border'>Edite</th>
      </tr>
    </thead>
    <tbody>
  {data.length !== 0 ? (
    data.map((element, index) => <Items key={index} index={index} data={element} />)
  ) : (
    <tr>
      <td className='fs-2 bg-secondary' colSpan="3">No Products Added</td>
    </tr>
  )}
</tbody>

  </table>
 
  <p style={{backgroundColor:'#ddd'}} className=' m-0 py-3 w-100 border h4' >  total Price: <span className='fw-bold text-success bg-transparent'> {totalSum} EGP</span></p>

</div>


</div>
  </div>
  
  </>
}

export default Home

 {/* <table className='table bg-danger border'>
    <thead>
  <tr >
  <th  style={{minWidth:'100px',backgroundColor:'#09c'}} className='border  py-3 '>Product</th>
  <th  style={{minWidth:'100px',backgroundColor:'#09c'}} className='border  py-3 '>Price</th>
  <th style={{minWidth:'100px',backgroundColor:'#09c'}}  className='border  py-3 '>Edite</th>
  </tr>
    </thead>
    <tbody>
  {data.length !== 0 ? (
    data.map((element, index) => <Items key={index} index={index} data={element} />)
  ) : (
    <tr>
      <td className='fs-2 bg-secondary' colSpan="3">No Products Added</td>
    </tr>
  )}
</tbody>

 </table> */}