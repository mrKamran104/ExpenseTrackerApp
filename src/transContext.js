import React, { createContext, useReducer} from "react";
import TransactionReducer from "./transReducer";


const inittransactions = [
    { amount: 500, desc: "Cash" },
    { amount: -40, desc: "Book" },
    { amount: -200, desc: "Camera" }
]

const TransactionContext = createContext(inittransactions);

export default TransactionContext;

export const TransactionProvider = ({children})=>{
    let [state, dispatch] = useReducer(TransactionReducer, inittransactions);

    function addTransaction(transObj){
        dispatch({
            type: "Add_Trans",
            payload: {
                amount: transObj.amount,
                desc: transObj.desc
            },
        })
    }

    return(
        <TransactionContext.Provider value={{
            transactions: state,
            addTransaction
        }} >
            {children}
        </TransactionContext.Provider>
    )
}