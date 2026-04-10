import { Link } from 'react-router-dom'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import HeroSection from '../../components/HeroSection/HeroSection'
import ProductCard from '../../components/ProductCard/ProductCard'
import { categories, products } from '../../data/products'
import './Home.css'

export default function Home() {
  const featuredProducts = products.slice(0, 8)

  return (
    <div className="layout">
      <Navbar />
      <main className="main">
        <HeroSection />

        <section className="section categories-section">
          <div className="container">
            <h2 className="section__title">Shop by Category</h2>
            <div className="categories-grid">
              {categories.map((cat) => (
                <Link
                  key={cat.id}
                  to={cat.path}
                  className="category-card"
                >
                  <span className="category-card__icon">{cat.icon}</span>
                  <span className="category-card__name">{cat.name}</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="section products-section">
          <div className="container">
            <div className="section__header">
              <h2 className="section__title">Featured Products</h2>
              <Link to="/products" className="section__link">
                View All
              </Link>
            </div>
            <div className="products-grid">
              {featuredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
