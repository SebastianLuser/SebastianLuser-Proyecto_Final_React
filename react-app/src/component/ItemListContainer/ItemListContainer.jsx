import React from "react";
import ItemList from "./ItemList.jsx";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Loading from "../Loading/Loading";
import {getFirestore,collection,getDocs, query,where} from 'firebase/firestore';

export const ItemListContainer = () => {

    const [items, setItems] = useState([]);
    const {categoryId} = useParams();
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        const querydb = getFirestore();
        const queryCollection = collection(querydb, 'ItemCollection');
        if(categoryId){
            const queryFilter = query(queryCollection,where('category','==',categoryId));
            getDocs(queryFilter).then((res) =>{
                if(res.size > 0){
                    setItems(res.docs.map(product => ({id: product.id, ...product.data()})));
                    setLoading(false);
                }
            })
        }else{
            getDocs(queryCollection).then((res)=>{
                if(res.size > 0){
                    setItems(res.docs.map(product =>({id: product.id, ...product.data()})));
                    setLoading(false);
                }
            });

        }
    },[categoryId])



    return(
        <div className="container">
            <div className="row">
                    <div key={items.id} className="col-md-3">
                        {loading ? <Loading/> : <ItemList items={items} />}
                    </div>
            </div>
        </div>
    )
}

export default ItemListContainer;
