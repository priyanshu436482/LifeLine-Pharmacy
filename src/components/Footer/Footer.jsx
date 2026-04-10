import { Link } from 'react-router-dom'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          <div className="footer__brand">
            <span className="footer__logo">⚕ LifeLine Pharmacy</span>
            <p className="footer__tagline">
              Your Health, Our Priority. Trusted medicines delivered to your doorstep.
            </p>
          </div>
          <div className="footer__links">
            <h4 className="footer__heading">Quick Links</h4>
            <Link to="/">Home</Link>
            <Link to="/products">Products</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/cart">Cart</Link>
          </div>
          <div className="footer__links">
            <h4 className="footer__heading">Categories</h4>
            <a href="/products?cat=medicines">Medicines</a>
            <a href="/products?cat=healthcare">Healthcare</a>
            <a href="/products?cat=lab-tests">Lab Tests</a>
            <a href="/products?cat=personal-care">Personal Care</a>
          </div>
          <div className="footer__contact">
            <h4 className="footer__heading">Contact</h4>
            <p>📞 1800-123-4567</p>
            <p>✉️ support@lifelinepharmacy.com</p>
          </div>
        </div>
        <div className="footer__bottom">
          <p>&copy; {new Date().getFullYear()} LifeLine Pharmacy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
