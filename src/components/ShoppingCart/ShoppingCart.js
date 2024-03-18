import React, { useState } from 'react';
import './shoppingCart.css'; // Import the CSS file for styling
import { FaTrash,FaPlusSquare, FaMinusSquare } from 'react-icons/fa'; // Import the trash, - , +  icon from react-icons


const ShoppingCart = () => {
    const [items, setItems] = useState([
        { id: '091091001', name: 'COTTON T-SHIRT', color: 'White', size: 'M', price: 9.99, quantity: 2 },
        { id: '056289891', name: 'WHITE T-SHIRT', color: 'White', size: 'XL', price: 20.9, quantity: 2 }
    ]);

    const updateQuantity = (index, delta) => {
        const newItems = [...items];
        newItems[index].quantity += delta;
        if (newItems[index].quantity <= 0) {
            newItems.splice(index, 1);
        }
        setItems(newItems);
    };
    

    const removeItem = (index) => {
        const newItems = [...items];
        newItems.splice(index, 1);
        setItems(newItems);
    };

    const subtotal = items.reduce((acc, item) => acc + (item.price * item.quantity), 0);

    return (
        <div className="container shopping-cart-container" id="zero-pad">
            <div className="row d-flex justify-content-center">
                <div className="col-lg-10 col-12 pt-3">
                    
                    <div className="d-flex flex-row px-lg-5 mx-lg-5 mobile" id="heading">
                        <div className="text-white col-6" id="produc">PRODUCTS</div>
                        <div className="text-white col-2 text-center" id="prc">PRICE</div>
                        <div className="text-white col-2 text-center" id="quantity">QUANTITY</div>
                        <div className="text-white col-2 text-center" id="total">TOTAL</div>
                    </div>
                    {items.map((item, index) => (
                        <div key={item.id} className="d-flex flex-row justify-content-between align-items-center pt-lg-4 pt-2 pb-3 border-bottom mobile">
                            <div className="d-flex flex-row align-items-center col-6">
                                <div><img src="https://images.unsplash.com/photo-1529374255404-311a2a4f1fd9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" width="110" height="110" alt="" id="image" /></div>
                                <div className="d-flex flex-column pl-md-3 pl-1" id='productDesc'>
                                    <div><h6 className="text-white">{item.name}</h6></div>
                                    <div className="text-white">Art.No:<span className="pl-2">{item.id}</span></div>
                                    <div className="text-white">Color:<span className="pl-3">{item.color}</span></div>
                                    <div className="text-white">Size:<span className="pl-4"> {item.size}</span></div>
                                </div>                    
                            </div>
                            <div className="pl-md-0 pl-1 text-white col-2 text-center"><b>${item.price.toFixed(2)}</b></div>
                            <div className="pl-md-0 pl-2 col-2 text-center">
                                <FaMinusSquare className="text-secondary" id='minusSquare' onClick={() => updateQuantity(index, -1)} />
                                <span className="px-md-3 px-1 text-white">{item.quantity}</span>
                                <FaPlusSquare className="text-secondary" id='plusSquare' onClick={() => updateQuantity(index, 1)} />
                            </div>
                            <div className="d-flex justify-content-between align-items-center col-2 text-center">
                                <div><b className="text-white">${(item.price * item.quantity).toFixed(2)}</b></div>
                                <div onClick={() => removeItem(index)}><FaTrash className="text-white" /></div>
                            </div>
                        </div>
                    ))}

                    <div className="d-flex justify-content-end px-lg-5 mx-lg-5">
                        <div className="pt-lg-4 pt-2 pb-3">
                            <b className="text-white">SUBTOTAL<span className="pl-4">${subtotal.toFixed(2)}</span></b>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShoppingCart;
