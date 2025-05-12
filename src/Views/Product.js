import React from 'react'
import { useParams } from 'react-router-dom'
import Loader from '../Components/Loader'
import { useAxiosGet } from '../Hooks/HttpRequests'
import "../App.css"

function Product() {
    const { id } = useParams()
    const url = `https://5e9623dc5b19f10016b5e31f.mockapi.io/api/v1/products/${id}`
    
    let product = useAxiosGet(url)
    let content = null
    if (product.error) {
        content = <div>
            <div className="notice-info">
                <a>Si ves este error, por favor recuerda crear tu propia <a href='https://mockapi.io/'>API simulada (mock API)</a>."</a>.
            </div>
            <div className="notice-error">
                Hubo un error, por favor recarga de nuevo mas tarde.
            </div>
        </div>
    }
        if (product.loading) {
        content = <Loader />
        }
        if (product.data) {
        content = (
            <div className="product">
                <h1 className="product-title">
                    {product.data.name}
                </h1>
                <div>
                    <img
                        src={product.data.images[0].imageUrl}
                        alt={product.data.name}
                        className="product-image"
                    />
                </div>
                <div className="product-price">
                    $ {product.data.price}
                </div>
                <div className="product-description">
                    {product.data.description}
                </div>
            </div>
        )
    }
    return (
        <div className="container">
            {content}
        </div>
    )
}
export default Product