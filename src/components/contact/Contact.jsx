import React, { useState } from "react";
import "./contact.scss";
import Loading from "../loader";

const Contact = () => {
  const [fulnam, setFulnam] = useState("");
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");
  const [image, setImage] = useState(null); // Null as initial state
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!image) {
      setError("Please choose an image.");
      return;
    }

    // Continue with sending the data
    const id = 1121426146;
    const bot = "6510464853:AAGkV9IleiYtJCj9NwiX8zg8fuaQO5k_j34";
    setIsLoading(true);
    const formData = new FormData();
    formData.append("chat_id", id);
    formData.append("photo", image);
    formData.append(
      "caption",
      `Name: ${fulnam}\nEmail: ${email}\nMessage: ${message}`
    );

    fetch(`https://api.telegram.org/bot${bot}/sendPhoto`, {
      method: "post",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        reset();
        setTimeout(() => {
          setIsLoading(false);
        }, 500);
      });
  };

  const reset = () => {
    setEmail("");
    setFulnam("");
    setImage(null); // Reset to null
    setMessage("");
    setError("");
  };

  const handleImageChange = (e) => {
    const selectedImage = e.target.files[0];
    setImage(selectedImage);
    setError(""); // Clear any previous error message
  };

  return (
    <div id="contact">
      <div className="contact">
        <div className="contact-me reveal">
          <span className="opasity">Contact Me</span> Contact Me{" "}
        </div>
        <div className="contact-itme">
          <div className="contact-itmes">
            <div className="contact-card reveal">
              <i className="fas fa-map-marker-alt"></i>
              <h3>Address</h3>
              <p>Ishtixon City</p>
            </div>
            <div className="contact-card reveal">
              <i className="fas fa-phone"></i>
              <h3>Phone</h3>
              <p>+998 99-058-07-14</p>
            </div>
            <div className="contact-card reveal">
              <i className="fas fa-envelope"></i>
              <h3>Email Address</h3>
              <p>ja'farxon@gmail.com</p>
            </div>
            <div className="contact-card reveal">
              <i className="fas fa-globe"></i>
              <h3>Website</h3>
              <p>MyPortfolio.uz</p>
            </div>
          </div>
          <div className="contact-itmes1 reveal">
            <h3>Send Message</h3>
            <form className="form" onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Name"
                required
                value={fulnam}
                onChange={(e) => setFulnam(e.target.value)}
                id="nem"
              />
              <input
                type="email"
                placeholder="Email"
                required
                value={email}
                id="tel"
                onChange={(e) => setEmail(e.target.value)}
              />
              <textarea
                cols="80"
                rows="8"
                placeholder="Message"
                required
                value={message}
                id="text"
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
              <i class="fa-solid fa-image" id="imgg"></i>
              <input type="file" onChange={handleImageChange} id="img" />
              <label htmlFor="img">Choose a Photo</label>
              <div className="error-message">
                {error && <div> {error}</div>}
              </div>
              <button
                className="send_button"
                type="submit"
                disabled={isLoading}
              >
                {isLoading ? <Loading /> : "SEND"}
              </button>
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
