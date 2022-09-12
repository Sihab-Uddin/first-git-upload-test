import React from 'react'
import { Link } from 'react-router-dom';

const Navigation = () => {
    return (
        <>
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow">
  <div className="container">
    
    <div>
      <ul className="nav">
        <li >
          <Link className="nav-link text-white active" aria-current="page" to="/">Home</Link>
        </li>
        <li>
        <Link className="nav-link text-white active" aria-current="page" to="/Option2">Option2</Link>
        </li>
        <li>
        <Link className="nav-link text-white active" aria-current="page" to="/Error">Error</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>  
        </>
    );
};

export default Navigation;