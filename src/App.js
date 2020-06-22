import React from 'react';
import './App.css';
// import Child from './Child';
// import './child.css';
// import { TransactionProvider } from './transContext';
import { Header } from './components/Header';
import { Balance } from './components/Balance';
import { AccountSummary } from './components/AccountSummary';
import { TransactionHistory } from './components/TransactionHistory';
import { AddTransaction } from './components/AddTransaction';

// Import Provider
import { GlobalProvider } from './context/GlobalState';

function App() {
  return (
    <GlobalProvider>
        <Header />
        <div className="container">
          <Balance />
          <AccountSummary />
          <TransactionHistory />
          <AddTransaction />
        </div>
      </GlobalProvider>

    // <TransactionProvider >
    //   <Child />
    // </TransactionProvider>
  );
}

export default App;
