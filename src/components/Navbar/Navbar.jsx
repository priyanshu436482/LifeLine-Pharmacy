import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useCart } from '../../context/CartContext'
import { useSearch } from '../../context/SearchContext'
import './Navbar.css'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const { cartCount } = useCart()
  const { searchQuery, setSearchQuery, setSelectedCategory } = useSearch()
  const navigate = useNavigate()

  const handleSearchChange = (e) => {
    const query = e.target.value
    setSearchQuery(query)
    // Clear category when searching
    setSelectedCategory('all')
    // If we're not on the products page, navigate to it when searching
    if (query && window.location.hash !== '#/products') {
      navigate('/products')
    }
  }

  const handleSearchSubmit = (e) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      setSelectedCategory('all')
      navigate('/products')
    }
  }

  const handleLinkClick = () => {
    setMenuOpen(false)
    // Clear search and category when clicking main nav links
    setSearchQuery('')
    setSelectedCategory('all')
  }

  return (
    <header className="navbar">
      <div className="navbar__inner container">
        <Link to="/" className="navbar__logo" onClick={handleLinkClick}>
          <span className="navbar__logo-icon">⚕</span>
          <span className="navbar__logo-text">LifeLine Pharmacy</span>
        </Link>

        <form className="navbar__search" onSubmit={handleSearchSubmit}>
          <input
            type="text"
            placeholder="Search medicines..."
            className="navbar__search-input"
            value={searchQuery}
            onChange={handleSearchChange}
          />
          <span className="navbar__search-icon">🔍</span>
          {searchQuery && (
            <button 
              type="button" 
              className="navbar__search-clear"
              onClick={() => setSearchQuery('')}
            >
              ✕
            </button>
          )}
        </form>

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
          <Link to="/" className="navbar__link" onClick={handleLinkClick}>
            Home
          </Link>
          <Link to="/products" className="navbar__link" onClick={handleLinkClick}>
            Products
          </Link>
          <Link to="/about" className="navbar__link" onClick={handleLinkClick}>
            About
          </Link>
          <Link to="/contact" className="navbar__link" onClick={handleLinkClick}>
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
