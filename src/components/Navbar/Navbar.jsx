import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '../../context/CartContext'
import './Navbar.css'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const { cartCount } = useCart()

  return (
    <header className="navbar">
      <div className="navbar__inner container">
        <Link to="/" className="navbar__logo" onClick={() => setMenuOpen(false)}>
          <span className="navbar__logo-icon">⚕</span>
          <span className="navbar__logo-text">LifeLine Pharmacy</span>
        </Link>

        <button
          type="button"
          className="navbar__toggle"
          aria-label="Toggle menu"
          onClick={() => setMenuOpen((o) => !o)}
        >
          <span />
          <span />
          <span />
        </button>

        <nav className={`navbar__nav ${menuOpen ? 'navbar__nav--open' : ''}`}>
          <Link to="/" className="navbar__link" onClick={() => setMenuOpen(false)}>
            Home
          </Link>
          <Link to="/products" className="navbar__link" onClick={() => setMenuOpen(false)}>
            Products
          </Link>
          <Link to="/about" className="navbar__link" onClick={() => setMenuOpen(false)}>
            About
          </Link>
          <Link to="/contact" className="navbar__link" onClick={() => setMenuOpen(false)}>
            Contact
          </Link>
          <Link
            to="/cart"
            className="navbar__link navbar__cart"
            onClick={() => setMenuOpen(false)}
          >
            <span className="navbar__cart-icon">🛒</span>
            <span className="navbar__cart-text">Cart</span>
            {cartCount > 0 && (
              <span className="navbar__cart-badge">{cartCount}</span>
            )}
          </Link>
        </nav>
      </div>
    </header>
  )
}
