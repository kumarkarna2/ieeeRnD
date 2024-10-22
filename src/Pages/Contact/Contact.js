import React from "react";
import Footer1 from "../Components/Footer1/Footer1";
import NaviBar from "../Components/Navbar/Navbar";
import "./Contact.css";

export default function Contact() {
    return (
        <div>
            <NaviBar />
            <div className="contact-us-section">
                <div className="contact-us-heading">Contact Us</div>
                <iframe
                    className="contact"
                    src="https://docs.google.com/forms/d/e/1FAIpQLSeRxqTOSP-c1GkQJzmdO7LYbsMkCekrtqLn03184NDe7EQ9pQ/viewform?embedded=true"
                    width="640"
                    height="979"
                    frameborder="0"
                    marginheight="0"
                    marginwidth="0"
                >
                    Loading…
                </iframe>
            </div>
            <Footer1 />
        </div>
    );
}
