import React, { useState } from "react";
import "./Footer.css";
import Logo from "../Logo";
import axios from "axios";
import { Link, withRouter } from 'react-router-dom';
import {connect } from 'react-redux';

const Footer = (props) => {
  const [subscribe, setSubscribe] = useState("");
  const [isSubcribed, setIsSubscribed] = useState(false);

  const addSub = async () => {
    const response = await axios.post("/api/subscribers", { email: subscribe });
    setIsSubscribed(true);
  };

  return (
    <div className="footer">
      <div className="footer-logo Logo">
        <Link to='/'>
        <Logo />
        </Link>
        <div className="subscribe">
          {isSubcribed ? (
            <div className="did-sub">Thank you {subscribe}!</div>
          ) : (
            <>
              <p className="sub">SUBSCRIBE!</p>
              <input
                className="subscribe-input"
                placeholder="EMAIL"
                onChange={(e) => setSubscribe(e.target.value)}
              ></input>
              <button className="sub-btn" onClick={addSub}>
                SUBMIT
              </button>{" "}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return (
    state
  )
}

export default withRouter(connect(mapStateToProps)(Footer));
