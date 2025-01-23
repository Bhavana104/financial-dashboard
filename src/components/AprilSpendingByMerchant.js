import React, { useState } from 'react';
import './AprilSpendingByMerchant.css';

function AprilSpendingByMerchant() {
  const [activeTab, setActiveTab] = useState('mostSpent');

  const mostSpentData = [
    { merchant: 'Amazon', amount: '$500', transactions: 5 },
    { merchant: 'Walmart', amount: '$300', transactions: 3 },
    { merchant: 'Starbucks', amount: '$100', transactions: 10 }
  ];

  const mostTransactionsData = [
    { merchant: 'Starbucks', amount: '$100', transactions: 10 },
    { merchant: 'Amazon', amount: '$500', transactions: 5 },
    { merchant: 'Walmart', amount: '$300', transactions: 3 }
  ];

  return (
    <div className="april-spending-by-merchant">
      <h2>January Spending by Merchant</h2>
      <div className="tabs">
        <button onClick={() => setActiveTab('mostSpent')}>Most spent</button>
        <button onClick={() => setActiveTab('mostTransactions')}>Most transactions</button>
      </div>
      <div className="merchant-list">
        {activeTab === 'mostSpent' && (
          <table>
            <thead>
              <tr>
                <th>Merchant</th>
                <th>Amount</th>
                <th>Transactions</th>
              </tr>
            </thead>
            <tbody>
              {mostSpentData.map((item, index) => (
                <tr key={index}>
                  <td>{item.merchant}</td>
                  <td>{item.amount}</td>
                  <td>{item.transactions}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
        {activeTab === 'mostTransactions' && (
          <table>
            <thead>
              <tr>
                <th>Merchant</th>
                <th>Amount</th>
                <th>Transactions</th>
              </tr>
            </thead>
            <tbody>
              {mostTransactionsData.map((item, index) => (
                <tr key={index}>
                  <td>{item.merchant}</td>
                  <td>{item.amount}</td>
                  <td>{item.transactions}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}

export default AprilSpendingByMerchant;