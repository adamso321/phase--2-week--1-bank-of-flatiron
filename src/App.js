import React, { useState } from 'react';
import './App.css';
import TransactionForm from './components/TransactionForm.js';
import TransactionTable from './components/TransactionTable.js';

function App() {
  const [transactions, setTransactions] = useState([]);

  const handleAddTransaction = (transaction) => {
    setTransactions([...transactions, transaction]);
  };

  return (
    <div className="App">
      <h1>Bank of Flatiron</h1>
      <TransactionForm onSubmit={handleAddTransaction} />
      <TransactionTable transactions={transactions} />
    </div>
  );
}

export default App;
