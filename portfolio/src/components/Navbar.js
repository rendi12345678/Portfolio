import React from 'react';
import '../styles/reset.css';

const Navbar = () => {
return (
<header>
  <div class="nav-container">
  <h2>Rendi's <span>Portfolio</span></h2>
  <nav>
    <ul>
      <li><a href="#">Home</a></li>
      <li><a href="#">About</a></li>
      <li><a href="#">Projects</a></li>
      <li><a href="#">Contact</a></li>
    </ul>
  </nav>
  </div>
</header>
);
}

export default Navbar;