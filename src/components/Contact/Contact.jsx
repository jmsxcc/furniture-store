import React from "react";
import "./contact.css";
import { BsFacebook, BsGithub } from "react-icons/bs";

const Contact = () => {
  return (
    <footer id="contact">
      <div className="con-contact">
        <a href="https://www.facebook.com/chaychan.jamremtrai/" target="_blank">
          <i className="icon-contact">
            <BsFacebook />
          </i>
        </a>

        <a href="https://github.com/jmsxcc" target="_blank">
          <i className="icon-contact">
            <BsGithub />
          </i>
        </a>
      </div>

      <p className="text-footer">&copy;2023 Designed by jmsxcc</p>
    </footer>
  );
};

export default Contact;
