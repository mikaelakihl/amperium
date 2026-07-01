import { useState } from 'react';
import { Hamburger } from '../Hamburger/Hamburger';
import styles from './Navbar.module.css';

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav>
      <Hamburger open={menuOpen} onClick={() => setMenuOpen(!menuOpen)} />
      {menuOpen && <div>Menu</div>}
    </nav>
  );
}
