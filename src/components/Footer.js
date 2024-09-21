import React, { useState } from "react";
import "./Footer.css"; // Import file CSS untuk styling

// Import ikon lokal
import instagram from "../assets/images/instagram.png";
import facebook from "../assets/images/facebook.png";
import twitter from "../assets/images/twitter.png";
import linkedin from "../assets/images/linkedin.png";
import phone from "../assets/images/phone.png";
import email from "../assets/images/email.png";
import lokasi from "../assets/images/lokasi.png";
import logoikon from "../assets/images/logoikon.png";
import garis from "../assets/images/garis.png";

const Footer = () => {
  const [emailInput, setEmailInput] = useState(""); // State for email input
  const [message, setMessage] = useState(""); // State for response message

  const handleSubscribe = async (e) => {
    e.preventDefault();

    // Send POST request to backend
    try {
      const response = await fetch("http://localhost:5000/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: emailInput }),
      });

      const data = await response.json();
      if (response.status === 200) {
        setMessage("Thank you for subscribing!");
      } else {
        setMessage("Subscription failed. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      setMessage("Error sending subscription request.");
    }
  };

  return (
    <footer className="footer-container">
      {/* Other footer content */}
      <div className="footer-newsletter">
        <div className="kotak-newsletter">
          <h3>Berlangganan Buletin Kami</h3>
          <form onSubmit={handleSubscribe}>
            <input
              type="email"
              placeholder="Your email address"
              value={emailInput}
              onChange={(e) => setEmailInput(e.target.value)} // Update email input state
              required
            />
            <button type="submit">Berlangganan</button>
          </form>
          <p>*Kami Akan Mengirimkan Pembaruan Mingguan Untuk Manajemen Yang Lebih Optimal</p>
          {message && <p>{message}</p>} {/* Display success or error message */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
