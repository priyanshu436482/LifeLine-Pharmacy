import { useState } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import './Contact.css'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setForm({ name: '', email: '', message: '' })
  }

  return (
    <div className="layout">
      <Navbar />
      <main className="main contact-page">
        <div className="container">
          <header className="contact-page__header">
            <h1 className="contact-page__title">Contact Us</h1>
            <p className="contact-page__subtitle">
              Have a question or feedback? We’d love to hear from you.
            </p>
          </header>

          <div className="contact-page__content">
            <form className="contact-form" onSubmit={handleSubmit}>
              {submitted && (
                <div className="contact-form__success">
                  Thank you! Your message has been sent. We’ll get back to you soon.
                </div>
              )}
              <div className="contact-form__group">
                <label htmlFor="name" className="contact-form__label">Name</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={form.name}
                  onChange={handleChange}
                  className="contact-form__input"
                  placeholder="Your name"
                />
              </div>
              <div className="contact-form__group">
                <label htmlFor="email" className="contact-form__label">Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  className="contact-form__input"
                  placeholder="your@email.com"
                />
              </div>
              <div className="contact-form__group">
                <label htmlFor="message" className="contact-form__label">Message</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  className="contact-form__input contact-form__textarea"
                  placeholder="Your message..."
                />
              </div>
              <button type="submit" className="contact-form__submit">
                Submit
              </button>
            </form>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
