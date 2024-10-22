import React from "react";
import NaviBar from "./Components/Navbar/Navbar";
import Landing from "./Components/Landing/Landing";
import About from "./Components/About/About";
// import FAQ from "./Components/FAQs/FAQ";
import Events from "./Components/Events/Events";
import "./Home.css";
// import Footer from "./Components/Footer/Footer";
import Footer1 from "./Components/Footer1/Footer1";
import Schedule from "./Components/Schedule/Schedule";

export default function Home() {
    return (
        <div>
            <NaviBar />
            <div className="landing-below">
                <Landing />
                <About />
                <Schedule />
                <Events />
                {/* <FAQ /> */}
                <Footer1 />
            </div>
        </div>
    );
}
