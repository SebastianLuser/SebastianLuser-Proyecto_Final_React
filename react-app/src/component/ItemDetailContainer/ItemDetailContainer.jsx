import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import {getFirestore,doc,getDoc} from 'firebase/firestore';
import Loading from "../Loading/Loading";

const ItemDetailContainer = () => {

    const [items, setItems] = useState({});
    const {detalleId} = useParams();
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        const querydb = getFirestore();
        const queryDoc = doc(querydb, 'ItemCollection', detalleId)
        getDoc(queryDoc).then((res) => {
            if(res.exists){
                setItems({ id: res.id, ...res.data() });
                setLoading(false);
            }
        }); 
    },[detalleId])

    return(
        <div>
            {loading ? <Loading /> : <ItemDetail items={items} />}
        </div>
    );
}

export default ItemDetailContainer;