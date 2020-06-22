import React, {useContext, useState} from 'react';
import TransactionContext from './transContext';

function Child() {

  // let transactions = [
  //   { amount: 500, desc: "Cash" },
  //   { amount: -40, desc: "Book" },
  //   { amount: -200, desc: "Camera" }
  // ]

  let  {transactions, addTransaction} = useContext(TransactionContext);
  let [newDesc, setDesc] = useState("");
  let [newAmount, setAmount] = useState(0);

  const operation = (event) => {
    event.preventDefault();
    if(Number(newAmount) === 0){
      alert("Hey, you can't Add Zero(0) amount!!!");
      return false;
    }
    addTransaction({
      amount: Number (newAmount),
      desc: newDesc
    });

    setDesc("");
    setAmount(0);
  }

  const getIncome = () =>{
    let income = 0;
    for (var i=0; i<transactions.length; i++){
      if(transactions[i].amount > 0)
        income += transactions[i].amount;
    }
    return income;
  }

  const getExpense = () =>{
    let expense = 0;
    for (var i=0; i<transactions.length; i++){
      if(transactions[i].amount < 0)
      expense += transactions[i].amount;
    }
    return expense;
  }

  return (
    <div className="container">
      <h3 className="text-center">Expense Tracker</h3>
      <h3>Your Balance <br />  ${getIncome() + getExpense()}</h3>

      <div className="balance-container">
        <h3>INCOME <br /> ${getIncome()}</h3>
        <h3>EXPENSE <br /> ${getExpense()}</h3>
      </div>

      <h3>History</h3>
      <hr />

      <ul className="transaction-list">
        {transactions.map((transObj, ind)=>{
          return(
            <li key>
          <span>{transObj.desc}</span>
          <span>${transObj.amount}</span>
        </li>
          )
        })}
      </ul>

      <h3>Add new transaction</h3>
      <hr />

      <form className="transaction-form" onSubmit={operation}>
        <label>
          Enter Description <br />
          <input type="text" value={newDesc} placeholder="Description..." onChange={(e)=> setDesc(e.target.value)} required />
        </label>
        <br />
        <label>
          Amount <br />
          <input type="number" value={newAmount} placeholder="Amount" onChange={(e)=> setAmount(e.target.value)} required />
        </label>
        <br />
        <div className="text-center">
          <input type="submit" value="Add Transcation" />
        </div>

      </form>
    </div>
  );
}

export default Child;
