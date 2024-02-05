import "../index.css";

const Touch = () => {
  return (
    <div className="touch">
      <div className="touch-container">
        <h2 className="touch-heading">Stay in Touch</h2>
        <p className="touch-details">
          Share your email address with us so that I can contact you.
        </p>
        <hr className="touch-hr" />
        <form className="touch-form">
          <input type="email" placeholder="Enter your email address" />

          <button type="submit">Share</button>
        </form>
      </div>
    </div>
  );
};

export default Touch;
