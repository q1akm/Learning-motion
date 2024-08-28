import React, { useEffect } from 'react';
import './styles.css';
import gsap from 'gsap';
import barba from '@barba/core';
import Button from '../../components/Button';

const About = () => {
  useEffect(() => {
    // Function for content animation using GSAP
    function contentAnimation() {
      let tl = gsap.timeline();
      tl.to("h1", {
        top: 0,
        duration: 1,
        ease: "power3.inOut",
        delay: 0.50,
      });
    }

    // Function to add a delay
    function delay(n) {
      n = n || 0;
      return new Promise((done) => {
        setTimeout(() => {
          done();
        }, n);
      });
    }

    // Initialize Barba.js
    barba.init({
      sync: true,
      transitions: [
        {
          async leave(data) {
            const done = this.async();
            await delay(0);
            done();
          },
          async enter(data) {
            contentAnimation();
          },
          async once(data) {
            contentAnimation();
          }
        }
      ]
    });
  }, []); // Run this effect only once when the component mounts

  return (
    <div className='wrapper' data-barba="wrapper">
      <div className="nav text-white">
        <a href="/pagetrans">Home</a>
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
      </div>
    
      <main 
        data-barba="container" 
        data-barba-namespace="home"
        className="container"
      >
        <div className="header">
          <h1>About</h1>
          <div className="header-revealer"></div>
        </div>
        <div className="footer">(02)
        <Button back="/cursor" next="/loading"/>
        </div>
      </main>
    </div>
  );
};

export default About;
