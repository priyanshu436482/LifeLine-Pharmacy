import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import './About.css'

export default function About() {
  return (
    <div className="layout">
      <Navbar />
      <main className="main about-page">
        <div className="container">
          <header className="about-page__header">
            <h1 className="about-page__title">About LifeLine Pharmacy</h1>
            <p className="about-page__lead">
              Your trusted partner in health and wellness since day one.
            </p>
          </header>

          <section className="about-block">
            <h2 className="about-block__title">Who We Are</h2>
            <p className="about-block__text">
              LifeLine Pharmacy is a modern online pharmacy committed to making healthcare 
              accessible, affordable, and reliable. We deliver genuine medicines, healthcare 
              products, and lab test services right to your doorstep, so you can focus on 
              what matters most — your health.
            </p>
          </section>

          <section className="about-block">
            <h2 className="about-block__title">Our Mission</h2>
            <p className="about-block__text">
              To provide every household with easy access to authentic medicines and 
              healthcare solutions at transparent prices. We believe everyone deserves 
              quality care without compromise, and we work every day to make that a reality.
            </p>
          </section>

          <section className="about-block">
            <h2 className="about-block__title">Our Services</h2>
            <ul className="services-list">
              <li><strong>Medicines:</strong> Prescription and OTC medicines from verified sources.</li>
              <li><strong>Healthcare Products:</strong> Devices, supplements, and wellness products.</li>
              <li><strong>Lab Tests:</strong> At-home collection and accurate reports.</li>
              <li><strong>Personal Care:</strong> Daily essentials and hygiene products.</li>
              <li><strong>Fast Delivery:</strong> Quick, discreet delivery across the country.</li>
            </ul>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  )
}
