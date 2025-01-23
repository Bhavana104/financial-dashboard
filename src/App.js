import React, { useState } from 'react';
import NavBar from './components/NavBar';
import SpendingPlanner from './components/SpendingPlanner';
import Filters from './components/Filters';
import Download from './components/Download';
import AprilSummary from './components/AprilSummary';
import AprilSpendingByCategory from './components/AprilSpendingByCategory';
import AprilSpendingByMerchant from './components/AprilSpendingByMerchant';

// import RecentTransactions from './components/RecentTransactions';
import './App.css';

function App() {
  const [timePeriod, setTimePeriod] = useState('Monthly');
  const [account, setAccount] = useState('All accounts');

  const handleTimePeriodChange = (event) => {
    setTimePeriod(event.target.value);
  };

  const handleAccountChange = (event) => {
    setAccount(event.target.value);
  };

  return (
    <div className="App">
      <NavBar />
      <SpendingPlanner />
      <Filters 
        timePeriod={timePeriod} 
        account={account} 
        onTimePeriodChange={handleTimePeriodChange} 
        onAccountChange={handleAccountChange} 
      />
      <Download />
    
      <AprilSummary timePeriod={timePeriod} account={account} />
      <AprilSpendingByCategory timePeriod={timePeriod} account={account} />
      <AprilSpendingByMerchant timePeriod={timePeriod} account={account} />
      {/* <RecentTransactions timePeriod={timePeriod} account={account} /> */}
      <footer className="disclaimer-footer">
        <p>Disclaimer: The information provided is for reference purposes only and is not intended as financial advice.</p>
      </footer>
    </div>
  );
}

export default App;