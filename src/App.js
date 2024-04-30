import React, { useState } from 'react';
import './App.css';
import TransactionForm from './components/TransactionForm.js';
import TransactionTable from './components/TransactionTable.js';
import Rows from './components/Rows.js';


function App() {
  const  data = [{
    date:'2024-5-6',
    description:'Sport wear',
    category:'Nike shoes',
    amount:'5000'
  },
  {
    date:'2024-7-8',
    description:'Merdicinal herbs',
    category:'hedex',
    amount:'3420'
  },  
  {
    date:'2024',
    description:'kitchen appliances',
    category:'sufuria',
    amount:'200000'
  },
  {
    date:'2023',
    description:'home appliances',
    category:'sofa set',
    amount:'700000'}] 
  const [transactions, setTransactions] = useState(data);

  

  const handleAddTransaction = (transaction) => {
    setTransactions([...transactions, transaction]);
  };

  return (
    <div className="App">
      <h1>Bank of Flatiron</h1>
      <TransactionForm onSubmit={handleAddTransaction} />
      <TransactionTable transactions={transactions} setTransactions={setTransactions}/>
      
      
    </div>
  );
}

export default App;
