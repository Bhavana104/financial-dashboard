import React from 'react';
import './Filters.css';

function Filters({ timePeriod, account, onTimePeriodChange, onAccountChange }) {
  return (
    <div className="filters">
      <select value={timePeriod} onChange={onTimePeriodChange}>
        <option>Monthly</option>
        <option>Quarterly</option>
        <option>Yearly</option>
        <option>2023 year-end summary</option>
      </select>
      <select value={account} onChange={onAccountChange}>
        <option>All accounts</option>
        <option>Checking account ....8976</option>
        <option>Checking account ....8637</option>
      </select>
      <div className="nav-buttons">
  <a href="path/to/your/file.csv" download>
    <button>Download CSV</button>
  </a>
  <a href="path/to/your/file.pdf" download>
    <button>Download PDF</button>
  </a>
</div>
    </div>
  );
}

export default Filters;