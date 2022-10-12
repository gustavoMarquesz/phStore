import { useState, useEffect } from "react";

import { db } from "../firebase/config";
import { collection, query, orderBy, onSnapshot, Timestamp } from "firebase/firestore";

export const useFetchDocuments = (docCollection, serch = null, uid = null)=>{

    const [loading, setLoading] = useState(null)
    const [pcs, setPcs] = useState(undefined)

    const [cancelled, setCancelled] = useState(false)

    useEffect(()=>{
            async function loadData(){
                if(cancelled) return
                
                const collectionRef = await collection(db, docCollection)

                if (pcs == undefined){
                 
                    const q =  query(collectionRef, orderBy("createdAt", "desc"))
    
                    await onSnapshot(q, (querySnapshot)=>{
                        setPcs(
                            querySnapshot.docs.map((doc)=>({
                                id: doc.id, ...doc.data(),
                                }))
                            )   
                    })
                
                }
             
            }
            loadData()
    },[docCollection, cancelled, serch, uid])

    useEffect(()=>{
        return()=> setCancelled(true)
    },[])

    return {pcs, loading}

}