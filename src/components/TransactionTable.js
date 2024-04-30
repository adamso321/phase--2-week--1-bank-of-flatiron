import React, { useState } from 'react';


const TransactionTable = ({ transactions }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredTransactions = transactions.filter((transaction) =>
    transaction.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <table>
      <thead>
        <tr>
          <th colSpan="50">Royal Bank of Flatiron bg"blue"</th>
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
        {filteredTransactions.map((transaction, index) => (
          <tr key={index}>
            <td>{transaction.date}</td>
            <td>{transaction.category}</td>
            <td>{transaction.description}</td>
            <td>${transaction.amount}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TransactionTable;
