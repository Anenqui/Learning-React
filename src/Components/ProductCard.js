import React from 'react'
import {Link} from 'react-router-dom'
import "../App.css"

function ProductCard(props) {
    return (
        <div className="product-card">
            <Link to={`/products/${props.product.id}`}>
                <div
                    className="product-image"
                    style={{
                        backgroundImage: `url('${props.product.images[0].imageUrl}')`
                    }}
                ></div>
            </Link>
            <div className="product-details">
                <h3 className="product-title">
                    <Link to={`/products/${props.product.id}`}>
                        {props.product.name}
                    </Link>
                </h3>
                <div className="product-price">
                    $ {props.product.price}
                </div>
                <div className="product-description">
                    {props.product.description}
                </div>
                <Link
                    to={`/products/${props.product.id}`}
                    className="product-button"
                >
                    View
                </Link>
            </div>
        </div>
    )
}

export default ProductCard