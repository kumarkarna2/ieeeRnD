import React from "react";
import FAQ_Card from "./Card/FAQ_Card";
import "./FAQ.css";

export default function FAQ() {
    return (
        <div className="faq-section">
            <div className="faq-heading">Faqs</div>
            <div className="faq-cards-main-page">
                <FAQ_Card
                    question="What is R&D Expo?"
                    answer="Lorem  ahd sfio oaseha aouhda bhro a uskseh uehsk ks oeihs sfehyfgs ifvgsyu vstufsef sef."
                />
                <FAQ_Card
                    question="What is R&D Expo?"
                    answer="Lorem  ahd sfio oaseha aouhda bhro a uskseh uehsk ks oeihs sfehyfgs ifvgsyu vstufsef sef."
                />
                <FAQ_Card
                    question="What is R&D Expo?"
                    answer="Lorem  ahd sfio oaseha aouhda bhro a uskseh uehsk ks oeihs sfehyfgs ifvgsyu vstufsef sef."
                />
            </div>
        </div>
    );
}
