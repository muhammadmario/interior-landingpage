import React from "react";

function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <div className="contact">
          <p>Contact us</p>
          <span>saler@gmail.com</span>
          <span>furniture@yahoo.com</span>
          <span>+246-584-365</span>
        </div>
        <div className="question">
          <p>Do you have question?</p>
          <div className="input-wrapper">
            <input type="text" placeholder="write your question" />
            <button>Send</button>
          </div>
        </div>
        <div className="mediasocial">
          <p>Instagram</p>
          <p>Facebook</p>
          <p>Twitter</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
