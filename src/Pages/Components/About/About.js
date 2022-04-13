import React from "react";
import Card from 'react-bootstrap/Card';
import { Button } from "react-bootstrap";
import "./About.css";

export default function About() {
  return (
    <div className="about-website">
      <Card className="text-center about-us-cm">
        <Card.Body>
          <Card.Title>About Us</Card.Title>
          <Card.Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam dictum tellus ex, vel egestas ipsum ornare ut. Cras ultrices sit amet lorem eget pretium. Donec egestas ac urna sed consequat. Pellentesque eget placerat mi. Etiam rhoncus nec ex at egestas. Vivamus laoreet massa sit amet dolor dictum, at scelerisque turpis interdum. Maecenas massa est, accumsan nec egestas eu, dapibus quis ligula. Nullam nisi urna, tincidunt ac nunc eget, volutpat commodo metus.</Card.Text>
          <Button variant="primary">Know More</Button>
        </Card.Body>
      </Card>
    </div>
  );
}
