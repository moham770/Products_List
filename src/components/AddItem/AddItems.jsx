import React, { useContext, useEffect, useRef } from 'react'
import  { dataContext } from '../context/DataContext';

const AddItems = () => {

    const {data,setData} = useContext(dataContext)


    const productItem = useRef(null);
    const priceItem = useRef(null);

    function handleAddProduct(e) {
            if(!(productItem.current.value &&priceItem.current.value)){
                e.preventDefault(); 
                return
            }
        e.preventDefault(); 
        const itemObject={
            productName: productItem.current.value,
            productPrice: priceItem.current.value,
        }
        setData((oldState)=> {
            localStorage.setItem('data',JSON.stringify( [...oldState ,itemObject]))
         return   [...oldState ,itemObject]
        })

        productItem.current.value=""
        priceItem.current.value=""
    }



    
    
  return <>
   <form onSubmit={handleAddProduct}>
 <div className="row my-3 g-2 align-items-center ">
 <div className="col-md-5">
      <div className="label fw-bold ">Product</div>
        <input ref={productItem} type="text" placeholder='Product..' className='form-control' id="" />
      </div>
      <div className="col-md-5">
      <div className="label fw-bold">Price: </div>
        <input ref={priceItem} type="number" inputMode='numeric'  placeholder='Price..' className='form-control' id="" />
      </div>
 <div className="col-md-2 align-self-end text-center">
    <button   className='btn btn-success m-0  w-100 '>ADD</button>
 </div>
 </div>
    </form>
  
  </>
}

export default AddItems
