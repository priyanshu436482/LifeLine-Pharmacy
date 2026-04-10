import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import ProductCard from '../../components/ProductCard/ProductCard'
import { products } from '../../data/products'
import './Products.css'

export default function Products() {
  return (
    <div className="layout">
      <Navbar />
      <main className="main products-page">
        <div className="container">
          <header className="products-page__header">
            <h1 className="products-page__title">Our Products</h1>
            <p className="products-page__subtitle">
              Genuine medicines and healthcare products at best prices.
            </p>
          </header>
          <div className="products-page__grid">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
