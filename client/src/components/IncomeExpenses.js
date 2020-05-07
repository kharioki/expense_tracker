import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { numberWithCommas } from '../util/format';

function IncomeExpenses() {
  const { transactions } = useContext(GlobalContext);

  const amounts = transactions.map(transaction => transaction.amount);

  const income = amounts
    .filter(amount => amount > 0)
    .reduce((a, b) => (a += b), 0)
    .toFixed(2);

  const balance = amounts
    .filter(amount => amount < 0)
    .reduce((a, b) => (a += b), 0);

  return (
    <div className="inc-exp-container">
      <div>
        <h4>Income</h4>
        <p className="money plus">+${numberWithCommas(income)}</p>
      </div>
      <div>
        <h4>Expense</h4>
        <p className="money minus">
          -${numberWithCommas(Math.abs(balance).toFixed(2))}
        </p>
      </div>
    </div>
  );
}

export default IncomeExpenses;
