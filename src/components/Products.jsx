import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../store/cartSlice";

function Products() {
  const [products, setProducts] = useState([]);

  const dispatch = useDispatch()
  

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        console.log(res.data);
        setProducts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleCart = (product) => {
            dispatch(addToCart(product))

  };
  return (
    <div className="productsWrapper">
      {products.map((product) => (
        <div className="card" key={product.id}>
          <img src={product.image} alt="" />
          <h4>{product.title}</h4>
          <h5>{product.price}</h5>
          <button onClick={() => handleCart(product)} className="btn">
            Add to cart
          </button>
        </div>
      ))}
    </div>
  );
}

export default Products;
