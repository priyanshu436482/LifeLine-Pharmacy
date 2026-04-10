import { Link } from 'react-router-dom'
import './HeroSection.css'

export default function HeroSection() {
  return (
    <section className="hero">
      <div className="hero__bg" aria-hidden="true" />
      <div className="container hero__inner">
        <div className="hero__content">
          <h1 className="hero__title">
            Your Health, <span className="hero__title-accent">Our Priority</span>
          </h1>
          <p className="hero__subtitle">
            Trusted medicines, healthcare products, and lab tests — all delivered to your doorstep. 
            Order from LifeLine Pharmacy with confidence.
          </p>
          <Link to="/products" className="hero__cta">
            Shop Now
          </Link>
        </div>
      </div>
    </section>
  )
}
