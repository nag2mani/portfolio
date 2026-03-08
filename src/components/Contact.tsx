import React, { useEffect, useRef, useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import './Contact.css';

const Contact: React.FC = () => {
  const [state, handleSubmit] = useForm('xreygpde');
  const [showSuccess, setShowSuccess] = useState(false);
  const formRef = useRef<HTMLFormElement | null>(null);

  useEffect(() => {
    if (!state.succeeded) return;

    formRef.current?.reset();
    setShowSuccess(true);
    const timer = window.setTimeout(() => {
      setShowSuccess(false);
    }, 3500);

    return () => window.clearTimeout(timer);
  }, [state.succeeded]);

  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        <div className="contact-left">
          <h2>Get in Touch</h2>
          <p className="contact-intro">
            I am open to discussing opportunities, collaborations, or technical discussions. Feel free to reach out via email or connect on LinkedIn.
          </p>
          <div className="contact-links">
            <a href="mailto:nag2mani@gmail.com" className="contact-link">
              <span className="link-icon">📧</span>
              nag2mani@gmail.com
            </a>
            <div className="social-links">
              <a
                href="https://www.linkedin.com/in/nag2mani/"
                className="social-icon"
                title="LinkedIn"
                target="_blank"
                rel="noreferrer"
              >
                in
              </a>
              <a
                href="https://github.com/nag2mani"
                className="social-icon"
                title="GitHub"
                target="_blank"
                rel="noreferrer"
              >
                gh
              </a>
              <a
                href="https://leetcode.com/nag2mani/"
                className="social-icon"
                title="LeetCode"
                target="_blank"
                rel="noreferrer"
              >
                lc
              </a>
            </div>
          </div>
        </div>

        <form ref={formRef} className="contact-form" onSubmit={handleSubmit}>
          {showSuccess && (
            <p className="form-success">Thank you for your message. I will get back to you soon.</p>
          )}
          <div className="form-group">
            <label>Name</label>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
            />
            <ValidationError
              prefix="Name"
              field="name"
              errors={state.errors}
            />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input
              id="email"
              type="email"
              name="email"
              placeholder="Your Email"
              required
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </div>
          <div className="form-group">
            <label>Message</label>
            <textarea
              id="message"
              rows={4}
              name="message"
              placeholder="Your Message"
              required
            ></textarea>
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
          </div>
          <button type="submit" className="send-btn" disabled={state.submitting}>
            {state.submitting ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
