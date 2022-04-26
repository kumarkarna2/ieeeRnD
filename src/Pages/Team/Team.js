import React from "react";
// import { Link } from "react-router-dom";
import TeamCard from "./Card/TeamCard";
import "./Team.css";
import Mayank from "./images/Mayank.jpeg";
import NaviBar from "../Components/Navbar/Navbar";
import Footer1 from "../Components/Footer1/Footer1";
import karna from "./images/Karna.jpg";
import aditya from "./images/aditya.png";
import amisha from "./images/amisha.jpeg";
import angel from "./images/angel.jpg";
import annu from "./images/annu.JPG";
import anny from "./images/anny.jpeg";
import arnav from "./images/arnav.jpg";
import arpit from "./images/arpit.jpg";
import geetali from "./images/geetali.jpeg";
import gunjan from "./images/gunjan.jpg";
import gurleen from "./images/gurleen.JPG";
import hridhima from "./images/hridhima.jpg";
import isha from "./images/isha.jpeg";
import manav from "./images/manav.jpg";
import modi from "./images/modi.jpeg";
import om from "./images/om.jpg";
import prakhar from "./images/prakhar.jpg";
import rao from "./images/rao.jpg";
import samagra from "./images/samagra.jpg";
import shubhang from "./images/SHUBHANG.jpg";
import vipul from "./images/vipul.jpg";
import vansh from "./images/vansh.webp";
import vishu from "./images/vishu.jpg";
import vishruti from "./images/vishruti.jpg";
import yash from "./images/yash.jpeg";
import adityas from "./council/aditya.jpg";
import akshat from "./council/akshat.jpg";
import ananya from "./council/ananya.jpg";
import anushka from "./council/anushka.jpg";
import archit from "./council/archit.jpg";
import geetansh from "./council/geetansh.jpg";
import harshit from "./council/harshit.jpg";
import nandini from "./council/nandini.jpg";
import pushp from "./council/pushp.jpg";
import raven from "./council/raven.png";
import ravi from "./council/ravi.jpg";
import ritika from "./council/ritika.jpg";
import shaan from "./council/shaan2.jpg";

export default function Team() {
    return (
        <div>
            <NaviBar />
            <div className="team-page">
                <div className="team">Our Team</div>
                <div className="team-section">
                    <div className="web-team">Faculty Coordinator</div>
                    <div className="team-card-section">
                        <TeamCard
                            img={arpit}
                            alt="Arpit Kaushal"
                            name="Arpit Kaushal"
                            insta="//www.instagram.com/general.broda/"
                        />
                        <TeamCard
                            img={om}
                            alt="Om Hari Shukla"
                            name="Om Hari Shukla"
                            insta="//www.instagram.com/Call__me__hades__/"
                        />
                    </div>
                    <div className="web-team">Mentors</div>
                    <div className="team-card-section">
                        <TeamCard
                            img={arpit}
                            alt="Arpit Kaushal"
                            name="Arpit Kaushal"
                            insta="//www.instagram.com/general.broda/"
                        />
                        <TeamCard
                            img={om}
                            alt="Om Hari Shukla"
                            name="Om Hari Shukla"
                            insta="//www.instagram.com/Call__me__hades__/"
                        />
                    </div>
                    <div className="web-team">Council</div>
                    <div className="team-card-section">
                        <TeamCard
                            img={pushp}
                            alt="Pushp Jain"
                            name="Pushp Jain"
                            insta="https://www.instagram.com/_pushp_jain_/"
                        />
                        <TeamCard
                            img={geetansh}
                            alt="Geetansh Garg"
                            name="Geetansh Garg"
                            insta="https://www.instagram.com/garggeetansh011/"
                        />
                        <TeamCard
                            img={anushka}
                            alt="Anushka Singh"
                            name="Anushka Singh"
                            insta="https://www.instagram.com/_anushka_singh_0_7/"
                        />
                        <TeamCard
                            img={nandini}
                            alt="Nandini Singh"
                            name="Nandini Singh"
                            insta="https://www.instagram.com/nandini0842/"
                        />
                        <TeamCard
                            img={ravi}
                            alt="Ravi Srivastava"
                            name="Ravi Srivastava"
                            insta="https://www.instagram.com/ravi_srivastava123/"
                        />
                        <TeamCard
                            img={ananya}
                            alt="Ananya Sood"
                            name="Ananya Sood"
                            insta="https://www.instagram.com/ananya.sood_/"
                        />
                        <TeamCard
                            img={shaan}
                            alt="Shaan Srivastava "
                            name="Shaan Srivastava"
                            insta="https://www.instagram.com/rated_r754/"
                        />
                        <TeamCard
                            img={harshit}
                            alt="Harshit Singh"
                            name="Harshit Singh"
                            insta="https://www.instagram.com/_harshit_73/"
                        />
                        <TeamCard
                            img={archit}
                            alt="Archit Dogra"
                            name="Archit Dogra"
                            insta=""
                        />
                        <TeamCard
                            img={adityas}
                            alt="Aditya Saxena"
                            name="Aditya Saxena"
                            insta="https://www.instagram.com/saxenaaditya12/"
                        />
                        <TeamCard
                            img={akshat}
                            alt="Akshat"
                            name="Akshat"
                            insta="https://www.instagram.com/_akshat_akd/"
                        />
                        <TeamCard
                            img={raven}
                            alt="Raven Mehta"
                            name="Raven Mehta"
                            insta="https://www.instagram.com/xll_raven_mehta_llx/"
                        />

                        <TeamCard
                            img={ritika}
                            alt="Ritika Tiwari"
                            name="Ritika Tiwari"
                            insta="https://www.instagram.com/_ritika_tiwari/"
                        />
                    </div>
                    <div className="web-team">Web Team</div>
                    <div className="team-card-section">
                        <TeamCard
                            img={karna}
                            alt="Karna Kumar Chaudhary"
                            name="karna Kumar Chaudhary"
                            insta="//www.linkedin.com/in/kumarkarna2"
                        />
                        <TeamCard
                            img={Mayank}
                            alt="Mayank Kumar"
                            name="Mayank Kumar"
                            insta="//www.instagram.com/racinmk/"
                        />
                        <TeamCard
                            img={aditya}
                            alt="Mayank"
                            name="Aditya Sahni"
                            insta="//www.linkedin.com/in/aditya-sahni-58203420a"
                        />
                        <TeamCard
                            img={gunjan}
                            alt="Gunjan Verma"
                            name="Gunjan Verma"
                            insta="//www.instagram.com/gunjanxv/"
                        />
                        <TeamCard
                            img={hridhima}
                            alt="Hridhima Sen"
                            name="Hridhima Sen "
                            insta="//www.instagram.com/hridhimaasen/"
                        />
                        <TeamCard
                            img={om}
                            alt="Om Hari Shukla"
                            name="Om Hari Shukla"
                            insta="//www.instagram.com/Call__me__hades__/"
                        />
                        <TeamCard
                            img={annu}
                            alt="Annu Chauhan"
                            name="Annu Chauhan"
                            insta="//www.instagram.com/annusadhna144/"
                        />
                        <TeamCard
                            img={vishruti}
                            alt="Vishruti Sharma"
                            name="Vishruti Sharma "
                            insta="//www.instagram.com/vishruti_sharma_/"
                        />
                        <TeamCard
                            img={isha}
                            alt="Isha Rawat"
                            name="Isha Rawat"
                            insta="//www.instagram.com/isha__rwtt/"
                        />
                        <TeamCard
                            img={shubhang}
                            alt="Shubhang Shukla"
                            name="Shubhang Shukla"
                            insta="//www.instagram.com/shubhangshukla_/"
                        />
                        <TeamCard
                            img={vishu}
                            alt="Vishu Kumar Banerjee"
                            name="Vishu Kumar Banerjee"
                            insta="//www.instagram.com/__vishuuu3/"
                        />
                        <TeamCard
                            img={geetali}
                            alt="Geetali Goel "
                            name="Geetali Goel "
                            insta="//www.instagram.com/geetali_goel/"
                        />
                    </div>
                    <div className="web-team">Design Team</div>
                    <div className="team-card-section">
                        <TeamCard
                            img={arnav}
                            alt="Arnav Seth"
                            name="Arnav Seth"
                            insta="//www.linkedin.com/in/arnav-seth-a77929211
"
                        />
                        <TeamCard
                            img={isha}
                            alt="Isha Rawat"
                            name="Isha Rawat"
                            insta="//www.instagram.com/isha__rwtt/"
                        />
                        <TeamCard
                            img={vansh}
                            alt="Vansh Gulati"
                            name="Vansh Gulati"
                            insta="//www.linkedin.com/in/vansh-gulati-8a0676215"
                        />
                        <TeamCard
                            img={rao}
                            alt="Anant Rao"
                            name="Anant Rao"
                            insta="//www.linkedin.com/in/anant-rao-437a121b9"
                        />
                        <TeamCard
                            img={karna}
                            alt="Karna Kumar Chaudhary"
                            name="karna Kumar Chaudhary"
                            insta="//www.linkedin.com/in/kumarkarna2"
                        />
                        <TeamCard
                            img={angel}
                            alt="Angel Singh"
                            name="Angel Singh"
                            insta="//www.linkedin.com/in/angel-singh"
                        />
                        <TeamCard
                            img={gurleen}
                            alt="Gurleen Kaur"
                            name="Gurleen Kaur"
                            insta="//www.instagram.com/neeti153/"
                        />
                        <TeamCard
                            img={shubhang}
                            alt="Shubhang Shukla"
                            name="Shubhang Shukla"
                            insta="//www.instagram.com/shubhangshukla_/"
                        />
                    </div>
                    <div className="web-team">Hackathon Team</div>
                    <div className="team-card-section">
                        <TeamCard
                            img={gunjan}
                            alt="Gunjan Verma"
                            name="Gunjan Verma"
                            insta="//www.instagram.com/gunjanxv/"
                        />
                        <TeamCard
                            img={isha}
                            alt="Isha Rawat"
                            name="Isha Rawat"
                            insta="//www.instagram.com/isha__rwtt/"
                        />
                        <TeamCard
                            img={arnav}
                            alt="Arnav Seth"
                            name="Arnav Seth"
                            insta="//www.linkedin.com/in/arnav-seth-a77929211
"
                        />
                        <TeamCard
                            img={modi}
                            alt="Krishna Modi"
                            name="Krishna Modi"
                            insta="//www.instagram.com/krishna_modi_12/"
                        />
                        <TeamCard
                            img={vipul}
                            alt="Vipul Arora"
                            name="Vipul Arora"
                            insta="//www.instagram.com/ar0ravipul/"
                        />
                        <TeamCard
                            img={vansh}
                            alt="Vansh Gulati"
                            name="Vansh Gulati"
                            insta="//www.linkedin.com/in/vansh-gulati-8a0676215"
                        />
                        <TeamCard
                            img={rao}
                            alt="Anant Rao"
                            name="Anant Rao"
                            insta="//www.linkedin.com/in/anant-rao-437a121b9"
                        />
                        <TeamCard
                            img={angel}
                            alt="Angel Singh"
                            name="Angel Singh"
                            insta="//www.linkedin.com/in/angel-singh"
                        />
                        <TeamCard
                            img={gurleen}
                            alt="Gurleen Kaur"
                            name="Gurleen Kaur"
                            insta="//www.instagram.com/neeti153/"
                        />
                        <TeamCard
                            img={shubhang}
                            alt="Shubhang Shukla"
                            name="Shubhang Shukla"
                            insta="//www.instagram.com/shubhangshukla_/"
                        />
                        <TeamCard
                            img={amisha}
                            alt="Amisha Chauhan"
                            name="Amisha Chauhan"
                            insta="//www.instagram.com/amishachauhan.12/"
                        />
                    </div>
                    <div className="web-team">Squid Game Team</div>
                    <div className="team-card-section">
                        <TeamCard
                            img={arpit}
                            alt="Arpit Kaushal"
                            name="Arpit Kaushal"
                            insta="//www.linkedin.com/in/arpit-kaushal-133a911bb"
                        />
                        <TeamCard
                            img={om}
                            alt="Om Hari Shukla"
                            name="Om Hari Shukla"
                            insta="//www.instagram.com/Call__me__hades__/"
                        />
                        <TeamCard
                            img={samagra}
                            alt="Samagra Dvivedi"
                            name="Samagra Dvivedi"
                            insta="//www.instagram.com/samagura.senpai/"
                        />
                        <TeamCard
                            img={modi}
                            alt="Krishna Modi"
                            name="Krishna Modi"
                            insta="//www.instagram.com/krishna_modi_12/"
                        />
                        <TeamCard
                            img={anny}
                            alt="Ananya Dhangar "
                            name="Ananya Dhangar "
                            insta=""
                        />
                        <TeamCard
                            img={vipul}
                            alt="Vipul Arora"
                            name="Vipul Arora"
                            insta="//www.instagram.com/ar0ravipul/"
                        />
                        <TeamCard
                            img={yash}
                            alt="Yashvardhan Sharma"
                            name="Yashvardhan Sharma"
                            insta="//www.instagram.com/261vardhan/"
                        />
                        <TeamCard
                            img={prakhar}
                            alt="Prakhar Jain"
                            name="Prakhar Jain"
                            insta="//www.instagram.com/prakhar_jain28/"
                        />
                    </div>
                    <div className="web-team">VCL Team</div>
                    <div className="team-card-section">
                        <TeamCard
                            img={vishruti}
                            alt="Vishruti Sharma"
                            name="Vishruti Sharma "
                            insta="//www.instagram.com/vishruti_sharma_/"
                        />
                        <TeamCard
                            img={modi}
                            alt="Krishna Modi"
                            name="Krishna Modi"
                            insta="//www.instagram.com/krishna_modi_12/"
                        />
                        <TeamCard
                            img={vipul}
                            alt="Vipul Arora"
                            name="Vipul Arora"
                            insta="//www.instagram.com/ar0ravipul/"
                        />
                        <TeamCard
                            img={Mayank}
                            alt="Mayank"
                            name="Mayank Kumar"
                            insta="//www.instagram.com/racinmk/"
                        />
                        <TeamCard
                            img={rao}
                            alt="Anant Rao"
                            name="Anant Rao"
                            insta="//www.linkedin.com/in/anant-rao-437a121b9"
                        />
                        <TeamCard
                            img={angel}
                            alt="Angel Singh"
                            name="Angel Singh"
                            insta="//www.linkedin.com/in/angel-singh"
                        />
                        <TeamCard
                            img={yash}
                            alt="Yashvardhan Sharma"
                            name="Yashvardhan Sharma"
                            insta="//www.instagram.com/261vardhan/"
                        />
                        <TeamCard
                            img={shubhang}
                            alt="Shubhang Shukla"
                            name="Shubhang Shukla"
                            insta="//www.instagram.com/shubhangshukla_/"
                        />
                        <TeamCard
                            img={amisha}
                            alt="Amisha Chauhan"
                            name="Amisha Chauhan"
                            insta="//www.instagram.com/amishachauhan.12/"
                        />
                    </div>
                    <div className="web-team">Velocity Team</div>
                    <div className="team-card-section">
                        <TeamCard
                            img={arpit}
                            alt="Arpit Kaushal"
                            name="Arpit Kaushal"
                            insta="//www.linkedin.com/in/arpit-kaushal-133a911bb"
                        />
                        <TeamCard
                            img={manav}
                            alt="Manav Gupta"
                            name="Manav Gupta"
                            insta="//www.instagram.com/manav.g27/"
                        />
                        <TeamCard
                            img={modi}
                            alt="Krishna Modi"
                            name="Krishna Modi"
                            insta="//www.instagram.com/krishna_modi_12/"
                        />
                        <TeamCard
                            img={anny}
                            alt="Ananya Dhangar "
                            name="Ananya Dhangar "
                            insta=""
                        />
                        <TeamCard
                            img={vipul}
                            alt="Vipul Arora"
                            name="Vipul Arora"
                            insta="//www.instagram.com/ar0ravipul/"
                        />
                        <TeamCard
                            img={angel}
                            alt="Angel Singh"
                            name="Angel Singh"
                            insta="//www.linkedin.com/in/angel-singh"
                        />
                        <TeamCard
                            img={geetali}
                            alt="Geetali Goel "
                            name="Geetali Goel "
                            insta="//www.instagram.com/geetali_goel/"
                        />
                    </div>
                    <div className="web-team">Gaming Team</div>
                    <div className="team-card-section">
                        <TeamCard
                            img={om}
                            alt="Om Hari Shukla"
                            name="Om Hari Shukla"
                            insta="//www.instagram.com/Call__me__hades__/"
                        />
                        <TeamCard
                            img={vishu}
                            alt="Vishu Kumar Banerjee"
                            name="Vishu Kumar Banerjee"
                            insta="//www.instagram.com/__vishuuu3/"
                        />

                        <TeamCard
                            img={rao}
                            alt="Anant Rao"
                            name="Anant Rao"
                            insta="//www.linkedin.com/in/anant-rao-437a121b9"
                        />
                        <TeamCard
                            img={karna}
                            alt="Karna Kumar Chaudhary"
                            name="karna Kumar Chaudhary"
                            insta="www.linkedin.com/in/kumarkarna2"
                        />
                        <TeamCard
                            img={aditya}
                            alt="Mayank"
                            name="Aditya Sahni"
                            insta="//www.linkedin.com/in/aditya-sahni-58203420a"
                        />
                    </div>
                    <div className="web-team">IoT Team</div>
                    <div className="team-card-section">
                        <TeamCard
                            img={arpit}
                            alt="Arpit Kaushal"
                            name="Arpit Kaushal"
                            insta="//www.instagram.com/general.broda/"
                        />
                        <TeamCard
                            img={om}
                            alt="Om Hari Shukla"
                            name="Om Hari Shukla"
                            insta="//www.instagram.com/Call__me__hades__/"
                        />
                        <TeamCard
                            img={samagra}
                            alt="Samagra Dvivedi"
                            name="Samagra Dvivedi"
                            insta="//www.instagram.com/samagura.senpai/"
                        />
                        <TeamCard
                            img={yash}
                            alt="Yashvardhan Sharma"
                            name="Yashvardhan Sharma"
                            insta="//www.instagram.com/261vardhan/"
                        />
                    </div>
                    <div className="web-team">PR Team</div>
                    <div className="team-card-section">
                        <TeamCard
                            img={arnav}
                            alt="Arnav Seth"
                            name="Arnav Seth"
                            insta="//www.linkedin.com/in/arnav-seth-a77929211
"
                        />
                        <TeamCard
                            img={geetali}
                            alt="Geetali Goel "
                            name="Geetali Goel "
                            insta="//www.instagram.com/geetali_goel/"
                        />
                        <TeamCard
                            img={gunjan}
                            alt="Gunjan Verma"
                            name="Gunjan Verma"
                            insta="//www.instagram.com/gunjanxv/"
                        />
                        <TeamCard
                            img={gurleen}
                            alt="Gurleen Kaur"
                            name="Gurleen Kaur"
                            insta="//www.instagram.com/neeti153/"
                        />
                        <TeamCard
                            img={isha}
                            alt="Isha Rawat"
                            name="Isha Rawat"
                            insta="//www.instagram.com/isha__rwtt/"
                        />
                        <TeamCard
                            img={vishruti}
                            alt="Vishruti Sharma"
                            name="Vishruti Sharma "
                            insta="//www.instagram.com/vishruti_sharma_/"
                        />
                    </div>
                </div>
            </div>
            <Footer1 />
        </div>
    );
}
