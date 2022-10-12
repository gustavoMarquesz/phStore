import { useState, useEffect, useReducer } from "react";
import { collection, addDoc, Timestamp } from "firebase/firestore";
import {db} from "../firebase/config"

const initialState = { loading: null, error: null}

const insertReducer = (state, action) =>{
    switch (action.type) {
        case "LOADING":
            return{loading: true, error: null}
        
        case "ERROR":
            return{loading: false, error: action.error}

        default: 
            return state;
    }
}

export const useInsertPc = (docCollection)=>{

    const [cancelled, setCanceled] = useState(false)
    const [response, dispatch]  = useReducer(insertReducer, initialState)

    const checkBeforeDispatch = (action)=>{
        if (!cancelled){
            dispatch(action)
        }
    }

    const insertPc = async(pcs)=>{

        checkBeforeDispatch({
            type: "LOADING"
        })
        
        try {
            const newPc = {...pcs, createdAt: Timestamp.now()}

            const insertedPc = await addDoc( collection(db, docCollection), newPc)
            checkBeforeDispatch({type: "INSERTED_DOCUMENT",payload: insertedPc})
        } catch (error) {
            checkBeforeDispatch({type: "ERROR",payload: error.message})
            
        }
    }

useEffect (()=>{
    return ()=> setCanceled(true)
},[])

return {insertPc, response}

}