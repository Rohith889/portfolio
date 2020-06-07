import React,{Component} from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faTwitter,
  faMedium,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import "./Social.css";


class Social extends Component{
    render(){
        return(
    <div className="main-container">
        <div className="inside-container">
      >
     
       
        <div className="social-icon">
          <a
            href="https://github.com/Rohith889?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} className="icon" />
          </a>
        
       
          <a
            href="https://www.linkedin.com/in/rohith-reddy-974810152/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} className="icon" />
          </a>
          <h3>Feel Free to Check in ....</h3>
        </div>
      </div>
    </div>
        )
    }
}
export default Social;