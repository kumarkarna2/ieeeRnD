import React from 'react';
import "./FAQ_Card.css";

export default function FAQ_Card(parse) {
  return (
    <div className='faq-card'>
        <h2s className="card-title">{parse.question}</h2s>
        <p className="description-faq">{parse.answer}</p>
    </div>
  )
}