function Contact() {
  return (
    <section>
      <h2>Get In Touch</h2>
      <p>I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology.</p>
      
      {/* Contact Information */}
      <div className="contact-info" style={{ marginTop: "20px", marginBottom: "30px" }}>
        <div className="contact-card">
          <h3>Contact Information</h3>
          <div className="contact-item">
            <span className="contact-icon">📧</span>
            <div>
              <strong>Email:</strong>
              <a href="mailto:gowthamp669@gmail.com">gowthamp669@gmail.com</a>
            </div>
          </div>
          <div className="contact-item">
            <span className="contact-icon">📱</span>
            <div>
              <strong>Phone:</strong>
              <a href="tel:+917010306825">+91 7010306825</a>
            </div>
          </div>
          <div className="contact-item">
            <span className="contact-icon">📍</span>
            <div>
              <strong>Location:</strong>
              <span>Dindigul, Tamil Nadu</span>
            </div>
          </div>
        </div>
      </div>

      {/* Social Media Links */}
      <div className="social-links" style={{ marginBottom: "30px" }}>
        <h3>Connect With Me</h3>
        <div className="social-grid">
          <a href="https://github.com/GOWTHAM6233" className="social-link" target="_blank" rel="noopener noreferrer">
            <span className="social-icon">🐙</span>
            <span>GitHub</span>
          </a>
          <a href="https://www.linkedin.com/in/gowtham-p6233dot/" className="social-link" target="_blank" rel="noopener noreferrer">
            <span className="social-icon">💼</span>
            <span>LinkedIn</span>
          </a>
          <a href="https://gowtham6233.github.io/Portfolio-website/" className="social-link" target="_blank" rel="noopener noreferrer">
            <span className="social-icon">🌐</span>
            <span>Portfolio</span>
          </a>
        </div>
      </div>

      {/* Contact Form */}
      <div className="contact-form">
        <h3>Send Me a Message</h3>
        <p>Have a question or want to work together? Drop a message below.</p>
        <form className="form" action="https://formsubmit.co/gowthamp669@gmail.com" method="POST" style={{ marginTop: "12px" }}>
          {/* FormSubmit options */}
          <input type="hidden" name="_subject" value="New message from portfolio" />
          <input type="hidden" name="_template" value="table" />
          <input type="hidden" name="_captcha" value="false" />
          {/* Honeypot */}
          <input type="text" name="_honey" style={{ display: "none" }} />

          <div className="form-row">
            <div className="form-group">
              <label>Name</label>
              <input className="input" name="name" type="text" placeholder="Your name" required />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input className="input" name="email" type="email" placeholder="Your email" required />
            </div>
          </div>
          <div className="form-group">
            <label>Subject</label>
            <input className="input" name="subject" type="text" placeholder="What's this about?" required />
          </div>
          <div className="form-group">
            <label>Message</label>
            <textarea className="textarea" name="message" placeholder="Write your message here..." rows="5" required></textarea>
          </div>
          <button className="btn" type="submit">Send Message</button>
        </form>
      </div>

      {/* Availability Status */}
      <div className="availability" style={{ marginTop: "30px", textAlign: "center" }}>
        <h3>Current Status</h3>
        <p>🟢 <strong>Available for new opportunities</strong></p>
        <p>I'm currently open to freelance projects, full-time positions, and interesting collaborations.</p>
      </div>
    </section>
  );
}

export default Contact;
