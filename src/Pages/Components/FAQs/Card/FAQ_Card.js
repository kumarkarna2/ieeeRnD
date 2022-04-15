import React from "react";
import "./FAQ_Card.css";

export default function FAQ_Card(parse) {
  return (
    <div className="full-faq-card">
      <div className="faq-card">
        <div className="card-content">
          <div className="card-title">{parse.question}</div>
          <div className="description-faq">{parse.answer}</div>
        </div>
      </div>
    </div>
  );
}
