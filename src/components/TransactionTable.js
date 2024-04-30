import React, { useState } from 'react';
import Rows from "./Rows.js"



const TransactionTable = ({ transactions,setTransactions }) => {
  const [searchTerm, setSearchTerm] = useState('');
  

  const filteredTransactions = transactions.filter((transaction) =>
    transaction.description.toLowerCase().includes(searchTerm.toLowerCase())

  );
  const mappedRows = transactions.map((item,index)=>{
    return (<Rows key={index} date={item.date} category={item.category} description={item.description} amount={item.amount}/>)})
  

  return (
    <table>
      <thead>
        <tr>
          <th colSpan="50">Royal Bank of Flatiron </th>
        </tr>
        <tr>
            <th colSpan="150">
              <input
                type="text"
                placeholder="Search by descriptions,"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </th>
          </tr>
        <tr>
          <th>Date</th>
          <th>Category</th>
          <th>Description</th>
          <th>Amount</th>
        </tr>
      </thead>
      <tbody>
      {mappedRows}
      
      </tbody>
    </table>
  );
};

export default TransactionTable;
