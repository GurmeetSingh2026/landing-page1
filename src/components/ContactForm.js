function ContactSection() {
  return (
    <section className="contact">
      <div className="contact__container">

        <div className="contact__card">

          <div className="contact__left">
            <h2 className="contact__title">
              Get in Touch
            </h2>
            <p className="contact__subtitle">
              Let’s discuss how Vasitum can transform your hiring process.
            </p>
          </div>

          <div className="contact__right">
            <input type="text" placeholder="Your Name" />
            <input type="email" placeholder="Email Address" />
            <textarea placeholder="Your Message"></textarea>
            <button>Send Message</button>
          </div>

        </div>

      </div>
    </section>
  );
}

export default ContactSection;
