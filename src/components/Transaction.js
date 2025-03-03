import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

export const Transaction = ({ transaction }) => {
    const { deleteTransaction } = useContext(GlobalContext);
    const sign = transaction.amount < 0 ? '-' : '+';

    return (
        <li id={`transaction-${transaction.id}`} className={transaction.amount < 0 ? 'minus' : 'plus'}>
            {transaction.text} <span>{sign}${Math.abs(transaction.amount)}</span>
            <button id={`delete-btn-${transaction.id}`} onClick={() => deleteTransaction(transaction.id)} className="delete-btn">x</button>
        </li>
    );
};