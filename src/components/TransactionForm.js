import React, { useState } from 'react';

const TransactionForm = ({ onSubmit }) => {
  const [date, setDate] = useState('');
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ date, category, description, amount });
    setDate('');
    setCategory('');
    setDescription('');
    setAmount('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="date"
        placeholder="Date (MM/DD/YYYY)"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />
      <input
        type="text"
        placeholder="Category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      />
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default TransactionForm;
