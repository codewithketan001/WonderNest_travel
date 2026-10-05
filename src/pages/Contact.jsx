import React from "react";
import { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    destination: "",
    message: ""
  });

  const [message, setMessage] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const { name, email, phone, destination, message: userMessage } = formData;

    if (!name || !email || !phone || !destination || !userMessage) {
      setMessage("Please fill in all the fields.");
      return;
    }

    if (!email.includes("@") || !email.includes(".")) {
      setMessage("Please enter a valid email address.");
      return;
    }

    if (phone.length < 10) {
      setMessage("Please enter a valid phone number.");
      return;
    }

    setMessage(`Thank you, ${name}! Your travel enquiry has been received.`);

    setFormData({
      name: "",
      email: "",
      phone: "",
      destination: "",
      message: ""
    });
  };

  return (
    <main>
      <section className="section container contact-section">
        <div className="contact-intro">
          <p className="eyebrow">GET IN TOUCH</p>

          <h1>Let's plan your next adventure.</h1>

          <p>
            Have a destination in mind or need help choosing a package?
            Send us a message and our team will get back to you.
          </p>

          <div className="contact-details">
            <div className="contact-item">
              <span>📍</span>
              <div>
                <strong>Location</strong>
                <p>Pune, Maharashtra, India</p>
              </div>
            </div>

            <div className="contact-item">
              <span>📧</span>
              <div>
                <strong>Email</strong>
                <p>hello@wandernest.com</p>
              </div>
            </div>

            <div className="contact-item">
              <span>📞</span>
              <div>
                <strong>Phone</strong>
                <p>+91 98765 43210</p>
              </div>
            </div>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <h2>Send us a message</h2>

          <label htmlFor="name">Full Name</label>
          <input
            id="name"
            name="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
          />

          <label htmlFor="email">Email Address</label>
          <input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="you@example.com"
          />

          <label htmlFor="phone">Phone Number</label>
          <input
            id="phone"
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Enter your phone number"
          />

          <label htmlFor="destination">Preferred Destination</label>
          <select
            id="destination"
            name="destination"
            value={formData.destination}
            onChange={handleChange}
          >
            <option value="">Select a destination</option>
            <option value="sahyadri">Sahyadri</option>
            <option value="konkan">Konkan</option>
            <option value="himalayas">Himalayas</option>
            <option value="other">Other</option>
          </select>

          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            placeholder="Tell us about your trip..."
          />

          <button type="submit" className="btn primary">
            Send Message
          </button>

          {message && <p className="form-message">{message}</p>}
        </form>
      </section>
    </main>
  );
}

export default Contact;