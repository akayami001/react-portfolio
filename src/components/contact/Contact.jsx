import { useState } from "react";
import shake from '../../images/shake.svg'

const Contact = () => {
  const [message, setMessage] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(true);
  };
  return (
    <div className="contact" id="contact">
      <div className="left">
        <img src={shake} alt="" />
      </div>
      <div className="right">
        <h2>Contact.</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="#SendMeYourOffer :D" />
          <textarea placeholder="I will add contacts soon..."></textarea>
          <button type="submit">Send</button>
          {message && <span>Under Construction... :)</span>}
        </form>
      </div>
    </div>
  );
};

export default Contact;
