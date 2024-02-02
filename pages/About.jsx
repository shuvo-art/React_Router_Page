import React from "react";
import { Link } from "react-router-dom";
import image from "../img/image2.png";

export default function About() {
    return (
        <div className="about-page-container">
            <img src={image} className="about-hero-image" alt="van" />
            <div className="about-page-content">
                <h1>Don’t squeeze in a sedan when you could relax in a van.</h1>
                <p>Our mission is to enliven your road trip with the perfect travel van rental. Our vans are recertified before each trip to ensure your travel plans can go off without a hitch. (Hitch costs extra 😉) Our team is full of vanlife enthusiasts who know firsthand the magic of touring the world on 4 wheels.</p>
            </div>
            <div className="about-page-cta">
                <h2>Your destination is waiting. Your van is ready. Add your favourite Van. </h2>
                <Link className="link-button" to="/Vans">Explore our vans</Link>
            </div>
        </div>
    )
}