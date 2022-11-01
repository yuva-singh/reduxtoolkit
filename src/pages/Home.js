import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { add } from "../Store/CartSlice";
import {STATUSES} from '../Store/ProductSlice';
import { fetchProducts } from "../Store/ProductSlice";

function Home() {
  const dispatch = useDispatch([]);
  // const [apidata, setapidata] = useState([]);(
  const {data:product,status} = useSelector((state)=>state.product);
  useEffect(() => {
    dispatch(fetchProducts());
    // let apifunction = async () => {
    //   const api = "https://fakestoreapi.com/products/";
    //   const apidata = await fetch(api);
    //   const result = await apidata.json();
    //   setapidata(result);
    // };
    // apifunction();
  }, []);
  const handleAdd = (product) => {
    dispatch(add(product));
  };
  if(status === STATUSES.LOADING){
    return <h2>loading....</h2>
  }
  if(status === STATUSES.ERROR){
    return <h2>SOMETHING WENT WORNG</h2>
  }

  return (
    <>
      {product.map((apiproduct) => {
        const { id, image, category, price } = apiproduct;
        return (
          <div className="col-lg-3 col-md-4 text-center mt-2" key={id}>
            <div className="shadow-sm border rounded p-3">
              <img src={image} height="100px" width="auto" alt="" />
              <h5 className="text-center">{category}</h5>
              <p className="text-center">{price}</p>
              <button
                onClick={()=>handleAdd(apiproduct)}
                className="btn btn-sm btn-primary"
              >
                Add
              </button>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default Home;
