import React from 'react';
import './NavBar.css';

function NavBar() {
  return (
    <nav className="nav-bar">
      <ul>
        <li>Accounts</li>
        <li>Pay & transfer</li>
        <li>Plan & track</li>
        <li>Investments</li>
      </ul>
      <div className="nav-buttons">
        <button>Open an account</button>
        <button>Sign out</button>
      </div>
    </nav>
  );
}

export default NavBar;