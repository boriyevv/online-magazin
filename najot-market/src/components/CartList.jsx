import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'


let items = [
    {
        product: {

            id: 1,
            title: "Product 1",
            description: "Lorem ipsum dolor sit amet.",
            price: 123.45,
            image: "https://yt3.googleusercontent.com/VR7BWPPZXIoSu1H2YvCpaEZbesDGIIvU7DEGSpNIxD6RKVd9cfxoFoV-14J_KBHjpcmmBm1V=s900-c-k-c0x00ffffff-no-rj"
        },
        count: 2
    },
    {
        product: {

            id: 2,
            title: "Product 2",
            description: "Lorem ipsum dolor sit amet.",
            price: 543.21,
            image: "https://assets.thehansindia.com/h-upload/2022/07/18/1303611-pro.webp"
        },
        count: 2
    }
]

const CartList = () => {

    const {items} =useSelector((s)=> s.cart)

    const dispatch = useDispatch()

    function handleIncItem(id){
        dispatch({type:"INC_ITEM_COUNT", payload:id})
    }
    function handleDecItem(id){
        dispatch({type:"DEC_ITEM_COUNT", payload:id})
    }
    function handleRemoveItem(id){
        dispatch({type:"REMOVE_FROM_CART", payload:id})
    }

    return <section className="text-bg-light my-5 w-75 m-auto">
        <div className="container py-4">
            <div className="d-flex justify-content-between">
                <h1>Your Cart</h1>
                <span>Total: ${items.reduce((p,c)=> p+c.product.price*c.count, 0).toFixed(2)}</span>
            </div>

            {items.length === 0 && <h2 className='text-center'>Cart is empty</h2>}

            <ul className="list-group">
                {

                    items.map((item, index) => (
                        <li key={index} className="list-group-item d-flex row align-items-center my-1">
                            <div className="col-1">

                                <img className='img-fluid' width={150} height={150} src={item.product.image} alt={item.product.title} />
                            </div>

                            <div className='col-md-7'>
                                <h2>{item.product.title} </h2>
                                <p>{item.product.description} </p>
                            </div>
                            <div className='col-md-1'>
                                ${item.product.price}
                            </div>
                            <div className='col-md-1 d-flex align-items-center justify-content-between'>
                                <button className="btn btn-secondary" onClick={()=>handleDecItem(item.product.id)}
                                disabled={item.count===1 }>
                                    -
                                </button>
                                <span> {item.count}</span>
                                <button className="btn btn-secondary" onClick={()=>handleIncItem(item.product.id)}>
                                    +
                                </button>
                            </div>
                            <div className='col-md-1'>
                                <span>${item.count * item.product.price}</span>
                            </div>
                            <div className="col-md-1">
                                <button className="btn btn-danger">
                                    <i className="fa-solid fa-trash" onClick={()=>handleRemoveItem(item.product.id)} ></i>
                                </button>

                            </div>

                        </li>
                    ))

                }
            </ul>

            <div className="d-flex justify-content-between">
                <Link to={'/'} className="btn btn-outline-danger"> <i className="fa-solid fa-arrow-left"> </i> Back to shopping</Link>
                <button className="btn btn-outline-success" disabled={items.length===0}> Proceed to payment <i className="fa-solid fa-arrow-right"></i></button>
            </div>

        </div>
    </section>

}

export default CartList