import React, { useState} from "react";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import Success from "../Success/Success";
import { useCartContext } from "../Context/CartContext";

const Checkout = () => {
    const {cart, clearCart, totalCart} =  useCartContext();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [orderId, setOrderId] = useState("");

    const sendOrder = () => {
        if ((name !== "") && (email !== "") && (phone !== "")) {

            //Date order
            const date = new Date();
            const now = date.getDate() + "-" + (date.getMonth()+1) + "-" + date.getFullYear() + " " + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();

            //Order Object
            const order = {
                buyer: 
                {
                    name:name,
                    email:email,
                    phone:phone,
                },
                items: cart.map(product => ({id: product.id, title: product.title, price: product.price, quantity: product.quantity})),
                date:now , 
                total:totalCart()
            };
            //Function to conect the Firestore
            const callFirebase = () => {
                const db = getFirestore();
                const orderCollection =  collection(db, 'Orders');
                addDoc(orderCollection, order).then(({id}) => {
                    console.log(id);
                    setOrderId(id);
                    clearCart();
                });
            }
            callFirebase();
        }
    }
    if(cart.length === 0){
        if(orderId !== ""){
            return(
                <>
                <Success id={orderId} />
                </>
            )
        }
        else{
            return(
                <>
                <div className="alert alert-danger text-center" role="alert">No products found</div>
                </>
            )
        }
    }
    return (
        // FORM
        <div className="container py-5">
            
            <div className="row">
                <div className="col-md-4 offset-md-2">
                        <div className="mb-3">
                            <label for="nombre" className="form-label">Name</label>
                            <input type="text" className="form-control" id="name" onInput={(e) => setName(e.target.value)} />
                        </div>
                        <div className="mb-3">
                            <label for="email" className="form-label">Email</label>
                            <input type="text" className="form-control" id="email" onInput={(e) => setEmail(e.target.value)} />
                        </div>
                        <div className="mb-3">
                            <label for="phone" className="form-label">Phone</label>
                            <input type="text" className="form-control" id="phone" onInput={(e) => setPhone(e.target.value)} />
                        </div>
                        <button type="button" className="btn btn-success" onClick={() => {sendOrder()}}>Generate Order</button>
                </div>
                <div className="col-md-4">
                    <div>
                        {cart.map(product => (
                        <div key={product.id}>
                            <img src={product.image} alt={product.title} />
                            <div>
                                <p>{product.title} X {product.quantity}</p>
                                <p>${product.quantity * product.price}</p>
                            </div>
                        </div>
                        ))}
                    </div>
                    <div>
                        <p className="text-end fw-bold">Total Payment</p>
                        <p className="text-end fw-bold">${totalCart()}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Checkout; 