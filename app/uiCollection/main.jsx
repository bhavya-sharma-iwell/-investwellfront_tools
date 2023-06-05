import React from 'react'
import { Outlet, Link } from "react-router-dom";
import '../media/css/main.css'
const Main = () => {
  return (
    <>
      <nav>
        <ul className="buttoncontainer">
        
          <li className="button">
            <Link to="/invoiceGenerator"  style={{ color: 'inherit', textDecoration: 'inherit'}}>Tax Invoice Generator</Link>
          </li>
          <li className="button">
            <Link to="/portfolioCorrelation" style={{ color: 'inherit', textDecoration: 'inherit'}}>Portfolio Correlation</Link>
          </li>
          <li className="button">
            <Link to="/portfolioOverlap" style={{ color: 'inherit', textDecoration: 'inherit'}}>Portfolio Overlap</Link>
          </li>

        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Main;