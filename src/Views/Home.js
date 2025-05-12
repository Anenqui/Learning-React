import React from 'react'
import Loader from '../Components/Loader'
import ProductCard from '../Components/ProductCard'
import { useAxiosGet } from '../Hooks/HttpRequests'
import "../App.css"
import axios from 'axios'

function Home() {
  const url = `https://5e9623dc5b19f10016b5e31f.mockapi.io/api/v1/products?page=1&limit=10`;
  let products = useAxiosGet(url);

  let content = null;

  if (products.error) {
    content = (
      <div>
        <div className="info-message">
          si ves este error recuerda que tienes que crear tu propia API <a href="https://mockapi.io/"> en mock API</a>.
        </div>
        <div className="error-message">
          si ves este error, recarga la pagina porfavor mas tarde
        </div>
      </div>
    );
  }

  if (products.loading) {
    content = (
      <div className="loading-container">
        <Loader />
      </div>
    );
  }

  if (products.data) {
    content = products.data.map((product) => (
      <div key={product.id} className="product-wrapper">
        <ProductCard product={product} />
      </div>
    ));
  }

  return (
    <div className="home-container">
      <h1 className="home-title"> Las mejores Ventas</h1>
      <div className="products-grid">{content}</div>
    </div>
  );
}

export default Home;