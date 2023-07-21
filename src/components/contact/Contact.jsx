import React, { useState } from "react";
import "./contact.scss";
const Contact = () => {
  const [fulnam, setFulnam] = useState("");
  const [tel, setTel] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const id = 1121426146;
    const bot = "6229717040:AAH25e0ViIbOVvb0njOkVVElFf_H7Ol3lGA";

    let massge = `Name: ${fulnam}\nEmail: ${tel}\nMessage: ${email}`;

    fetch(`https://api.telegram.org/bot${bot}/sendMessage`, {
      method: "post",
      body: JSON.stringify({
        chat_id: id,
        text: massge,
      }),
      headers: {
        "Content-Type": "application/json",
        "cache-control": "no-cache",
      },
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };
  return (
    <div id="contact">
      <div className="contact">
        <div className="contact-me reveal">Contact Me </div>
        <div className="contact-itme">
          <div className="contact-itmes">
            <div className="contact-card reveal">
              <i class="fas fa-map-marker-alt"></i>
              <h3>Address</h3>
              <p>Ishtixon City</p>
            </div>
            <div className="contact-card reveal">
              <i class="fas fa-phone"></i>
              <h3>Phone</h3>
              <p>+998 99-058-07-14</p>
            </div>
            <div className="contact-card reveal">
              <i class="fas fa-envelope"></i>
              <h3>Email Address</h3>
              <p>ja'farxon@gmail.com</p>
            </div>
            <div className="contact-card reveal">
              <i class="fas fa-globe"></i>
              <h3>Website</h3>
              <p>MyPortfolio.uz</p>
            </div>
          </div>
          <div className="contact-itmes1 reveal">
            <h3>Send Message</h3>
            <form className="form" onSubmit={handleSubmit}>
              <input
                type="name "
                placeholder="Name"
                required
                value={fulnam}
                onChange={(e) => setFulnam(e.target.value)}
              />
              <input
                type="email"
                placeholder="Email"
                required
                value={tel}
                onChange={(e) => setTel(e.target.value)}
              />
              <textarea
                cols="80"
                rows="8"
                placeholder="Message"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              ></textarea>
              <button type="submit">SEND</button>
            </form>
          </div>
        </div>
      </div>
      <div className="up">
        <h3>Ja'farxon Saidumarov</h3>
        <p>Copyright @2023. All Rights Reserved.</p>
      </div>
    </div>
  );
};

export default Contact;