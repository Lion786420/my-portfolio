import "../index.css";

const ContactForm = () => {
  return (
    <form className="contact-form">
      <h2 className="form-heading">Get in touch</h2>
      <hr className="form-hr" />
      <input type="text" placeholder="Enter your name" className="form-name" />
      <input
        type="email"
        placeholder="Enter your email"
        className="form-email"
      />
      <textarea
        id=""
        cols="30"
        rows="10"
        placeholder="Enter your message"
        className="form-message"
      ></textarea>
      <button type="submit" className="form-button">
        Send Message
      </button>
    </form>
  );
};

export default ContactForm;
