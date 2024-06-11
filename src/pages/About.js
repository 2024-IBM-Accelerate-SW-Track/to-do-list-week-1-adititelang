import React, { Component } from 'react';
import "./About.css";
import adititelangphoto from "../assets/adititelangphoto.png";

  
export default class About extends Component {
  render() {
    return (
      <div>
        <div>
          <div className="split left">
            <div className="centered">
              <img 
                className="profile_image"
                src={adititelangphoto}
                alt="Profile Pic"
              ></img>
            </div>
          </div>
          <div className="split right">
            <div className="centered">
              <div className="name_title">Aditi Telang</div>
              <div className="brief_description">
                Hi! My name is Aditi Telang and I am an undergraduate student studying Computer Science at the University of California, Berkeley. I am an aspiring engineer, and am particularly interested in the intersection between business strategy, data analytics, and technology.
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}