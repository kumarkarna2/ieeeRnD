import React from "react";
import Footer from "../Components/Footer/Footer";
import NaviBar from "../Components/Navbar/Navbar";
import "./Contact.css";

export default function Contact() {
  return (
    <div>
      <NaviBar />
      <div className="contact-us-section">
        <div className="contact-us-heading">Contact Us</div>
        <form className="contact-form">
          <label className="fc-title" for="fname">
            First name:
          </label>
          <input
            placeholder="First Name"
            className="input-boxes"
            type="text"
            id="fname"
            name="fname"
          />
          <label className="fc-title" for="lname">
            Last name:
          </label>
          <input
            className="input-boxes"
            placeholder="Last Name"
            type="text"
            id="lname"
            name="lname"
          />
          <label className="fc-title" for="message">
            Message:
          </label>
          <textarea
            className="input-boxes"
            name="message"
            rows="5"
            cols="30"
            placeholder="Enter Your Message Here..."
          />
          <div className="submit-b">
            <input type="submit" value="Submit" className="submit-button-cf" />
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
}
