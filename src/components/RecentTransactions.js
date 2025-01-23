// import React, { useState, useEffect } from 'react';
// // import './RecentTransactions.css';

// function RecentTransactions({ timePeriod, account }) {
//   const [transactions, setTransactions] = useState([]);
//   const [currentPage, setCurrentPage] = useState(1);
//   const transactionsPerPage = 10;

//   useEffect(() => {
//     // Fetch transactions data based on timePeriod, account, and currentPage
//     const fetchTransactions = async () => {
//       // Replace with actual data fetching logic
//       const data = await fetchData(timePeriod, account, currentPage, transactionsPerPage);
//       setTransactions(data);
//     };

//     fetchTransactions();
//   }, [timePeriod, account, currentPage]);

//   const fetchData = async (timePeriod, account, page, limit) => {
//     // Mock data fetching function
//     // Replace with actual API call
//     const totalTransactions = 50; // Example total transactions
//     const start = (page - 1) * limit;
//     const end = start + limit;
//     return Array.from({ length: totalTransactions }).slice(start, end).map((_, index) => ({
//       id: start + index + 1,
//       date: `2023-04-${(start + index + 1).toString().padStart(2, '0')}`,
//       description: `Transaction ${start + index + 1}`,
//       amount: (Math.random() * 100).toFixed(2)
//     }));
//   };

//   const totalPages = Math.ceil(50 / transactionsPerPage); // Example total pages

//   const handlePreviousPage = () => {
//     setCurrentPage((prevPage) => Math.max(prevPage, 1));
//   };

//   const handleNextPage = () => {
//     setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
//   };

//   return (
//     <div className="recent-transactions">
//       <h2>Recent Transactions</h2>
//       <ul>
//         {transactions.map((transaction) => (
//           <li key={transaction.id}>
//             <span>{transaction.date}</span>
//             <span>{transaction.description}</span>
//             <span>${transaction.amount}</span>
//           </li>
//         ))}
//       </ul>
//       <div className="pagination-controls">
//         <button onClick={handlePreviousPage} disabled={currentPage === 1}>
//           Previous
//         </button>
//         <span>Page {currentPage} of {totalPages}</span>
//         <button onClick={handleNextPage} disabled={currentPage === totalPages}>
//           Next
//         </button>
//       </div>
//     </div>
//   );
// }

// export default RecentTransactions;