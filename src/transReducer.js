
const TransactionReducer = ((state, action) => {
    switch (action.type) {
        case "Sub_Trans":
            return {
                ...state,
                transactions: state.transactions
                    .filter(transaction => transaction.id !== action.payload)
            }
        case "Add_Trans":
            return {
                ...state,
                transactions: [action.payload, ...state.transactions]
            }
        default:
            return state;
    }
})

export default TransactionReducer;