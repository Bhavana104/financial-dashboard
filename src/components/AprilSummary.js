import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import TransactionsTable from './TransactionsTable';
import './AprilSummary.css';

function AprilSummary({ account }) {
  const [timePeriod, setTimePeriod] = useState('Monthly');
  const [data, setData] = useState({
    labels: [ 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun' ],
    datasets: [
      {
        label: 'Income',
        backgroundColor: 'rgb(13, 99, 184)',
        data: [3000, 2500, 3200, 2800, 2900, 3100]
      },
      {
        label: 'Spending',
        backgroundColor: 'rgb(72, 191, 145)',
        data: [1500, 2000, 1800, 2200, 2100, 1400]
      }
    ]
  });

  const [showIncomeTable, setShowIncomeTable] = useState(false);
  const [showSpendingTable, setShowSpendingTable] = useState(false);
  const [showIncomeBar, setShowIncomeBar] = useState(false);

  useEffect(() => {
    const fetchData = () => {
      let newData;
      switch (timePeriod) {
        case 'Monthly':
          newData = {
            labels: [ 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun' ],
            datasets: [
              {
                label: 'Income',
                backgroundColor: 'rgb(13, 99, 184)',
                data: [3000, 2500, 3200, 2800, 2900, 3100]
              },
              {
                label: 'Spending',
                backgroundColor: 'rgb(72, 191, 145)',
                data: [1500, 2000, 1800, 2200, 2100, 1400]
              }
            ]
          };
          break;
        case 'Quarterly':
          newData = {
            labels: ['Q1', 'Q2', 'Q3', 'Q4'],
            datasets: [
              {
                label: 'Income',
                backgroundColor: 'rgb(13, 99, 184)',
                data: [9000, 8500, 9500, 10000]
              },
              {
                label: 'Spending',
                backgroundColor: 'rgb(72, 191, 145)',
                data: [5500, 6000, 5800, 6200]
              }
            ]
          };
          break;
        case 'Yearly':
          newData = {
            labels: ['2019', '2020', '2021', '2022', '2023'],
            datasets: [
              {
                label: 'Income',
                backgroundColor: 'rgb(13, 99, 184)',
                data: [36000, 37000, 38000, 39000, 40000]
              },
              {
                label: 'Spending',
                backgroundColor: 'rgb(72, 191, 145)',
                data: [22000, 23000, 24000, 25000, 26000]
              }
            ]
          };
          break;
        case '2023 year-end summary':
          newData = {
            labels: ['Q1', 'Q2', 'Q3', 'Q4'],
            datasets: [
              {
                label: 'Income',
                backgroundColor: 'rgb(13, 99, 184)',
                data: [10000, 10500, 11000, 11500]
              },
              {
                label: 'Spending',
                backgroundColor: 'rgb(72, 191, 145)',
                data: [6200, 6300, 6400, 6500]
              }
            ]
          };
          break;
        default:
          newData = {
            labels: [],
            datasets: []
          };
      }
      setData(newData);
    };

    fetchData();
  }, [timePeriod, account]);

  const handleLegendClick = (label) => {
    if (label === 'Income') {
      setShowIncomeTable(!showIncomeTable);
      setShowSpendingTable(false);
    } else if (label === 'Spending') {
      setShowSpendingTable(!showSpendingTable);
      setShowIncomeTable(false);
    }
  };

  const toggleIncomeBar = () => {
    setShowIncomeBar(!showIncomeBar);
  };

  const incomeTransactions = [
    { date: '01-Apr', amount: '$1000' },
    { date: '15-Apr', amount: '$2100' }
  ];

  const spendingTransactions = [
    { date: '05-Apr', amount: '$500' },
    { date: '20-Apr', amount: '$900' }
  ];

  const filteredData = {
    ...data,
    datasets: data.datasets.filter(dataset => showIncomeBar || dataset.label !== 'Income')
  };

  const onTimePeriodChange = (newTimePeriod) => {
    setTimePeriod(newTimePeriod);
  };

  return (
    <div className="april-summary">
      <h2>January Summary</h2>
      <p>Total Spending: $1,400.00</p>
      <label className="switch">
        <input type="checkbox" checked={showIncomeBar} onChange={toggleIncomeBar} />
        <span className="slider round"></span>
      </label>
      <span>{showIncomeBar ? 'Hide Income Bar' : 'Show Income Bar'}</span>
      <div className="tabs">
        <button className={timePeriod === 'Monthly' ? 'active' : ''} onClick={() => onTimePeriodChange('Monthly')}>Monthly</button>
        <button className={timePeriod === 'Quarterly' ? 'active' : ''} onClick={() => onTimePeriodChange('Quarterly')}>Quarterly</button>
        <button className={timePeriod === 'Yearly' ? 'active' : ''} onClick={() => onTimePeriodChange('Yearly')}>Yearly</button>
        <button className={timePeriod === '2023 year-end summary' ? 'active' : ''} onClick={() => onTimePeriodChange('2023 year-end summary')}>2023 year-end summary</button>
      </div>
      {/* {showIncomeTable && <TransactionsTable title="Income Transactions" transactions={incomeTransactions} />}
      {showSpendingTable && <TransactionsTable title="Spending Transactions" transactions={spendingTransactions} />} */}
      <div className="chart-container">
        <Bar 
          data={filteredData} 
          options={{
            plugins: {
              legend: {
                onClick: (e, legendItem) => handleLegendClick(legendItem.text)
              }
            }
          }}
        />
      </div>
      <div className="legend-container">
        <div className="legend-item" onClick={() => handleLegendClick('Income')}>
          <span>Income</span> <span className="arrow">&#9654;</span>
        </div>
        <div className="legend-item" onClick={() => handleLegendClick('Spending')}>
          <span>Spending</span> <span className="arrow">&#9654;</span>
        </div>
      </div>
      {showIncomeTable && <TransactionsTable title="Income Transactions" transactions={incomeTransactions} />}
      {showSpendingTable && <TransactionsTable title="Spending Transactions" transactions={spendingTransactions} />}
    </div>
  );
}

export default AprilSummary;