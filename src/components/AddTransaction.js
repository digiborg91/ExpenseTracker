import React, { useState, useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

export const AddTransaction = () => {
  const [text, setText] = useState('');
  const [amount, setAmount] = useState('');

  const { addTransaction } = useContext(GlobalContext);

  const onSubmit = e => {
      e.preventDefault();

      if (!text || !amount) return; // Prevent adding empty transactions

      const newTransaction = {
          id: Math.floor(Math.random() * 10000000),
          text,
          amount: +amount
      };

      addTransaction(newTransaction);

      // Clear fields after submission
      setText('');
      setAmount('');
  };

    return (
        <>
            <h3 id="add-transaction-title">Add new transaction</h3>
            <form id="transaction-form" onSubmit={onSubmit}>
                <div className="form-control">
                    <label htmlFor="text">Text</label>
                    <input id="transaction-text" type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Enter text..." />
                </div>
                <div className="form-control">
                    <label htmlFor="amount">Amount <br />(negative - expense, positive - income)</label>
                    <input id="transaction-amount" type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Enter amount..." />
                </div>
                <button id="add-transaction-btn" className="btn">Add transaction</button>
            </form>
        </>
    );
};