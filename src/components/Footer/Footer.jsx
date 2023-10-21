import React from "react";
import { ListGroup, ListGroupItem } from "reactstrap";

import logo from "../../assets/images/res-logo.png";
import "../../styles/footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__logo">
        <img src={logo} alt="logo" />
        <h5>Queen Beauty</h5>
        <p>A World of Beauty Awaits You!</p>
      </div>
      <div>
        <h5 className="footer__title mb-3">Opening times</h5>
        <ListGroup>
          <div className="delivery__time-item border-0 ps-0">
            <p>Monday</p>
            <p>08:00am - 18:30pm</p>
          </div>
          <div className="delivery__time-item border-0 ps-0">
            <p>Tuesday</p>
            <p>08:00am - 18:30pm</p>
          </div>
          <div className="delivery__time-item border-0 ps-0">
            <p>Wednesday</p>
            <p>08:00am - 18:30pm</p>
          </div>
          <div className="delivery__time-item border-0 ps-0">
            <p>Thursday</p>
            <p>08:00am - 18:30pm</p>
          </div>
          <div className="delivery__time-item border-0 ps-0">
            <p>Friday</p>
            <p>08:00am - 18:30pm</p>
          </div>
          <div className="delivery__time-item border-0 ps-0">
            <p>Saturday</p>
            <p>08:00am - 18:30pm</p>
          </div>
          <div className="delivery__time-item border-0 ps-0">
            <span>Sunday</span>
            <span>closed</span>
          </div>

          
        </ListGroup>
        
      </div>


       




    </footer>
  );
};

export default Footer;
