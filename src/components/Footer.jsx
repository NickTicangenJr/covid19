import React, {Component} from 'react';
import { FaFacebookF } from "react-icons/fa";
import {  IoLogoInstagram } from 'react-icons/io';
import {  AiFillGithub } from 'react-icons/ai';

class Footer extends Component {
    render(){
        return(
            <div className="Container-Footer">
                <div className="Container-Reference">
                    References:
                    <a href="http://github.com/CSSEGISandData/COVID-19"> Johns Hopkins University </a>-
                    <a href="http://breakingapi.com/"> breakingapi.com</a>
                </div>

                <div className="Container-Social">
                    <a href="http://www.facebook.com/nick.killipticangen" style={{color: '#eee'}}><FaFacebookF /></a>
                    <a href="http://www.instagram.com/nickkillip11/" style={{color: '#eee'}}><IoLogoInstagram /></a>
                    <a href="http://github.com/NickTicangenJr/" style={{color: '#eee'}}><AiFillGithub /></a>
                </div>

                <div className="Separator"></div>

            </div>
        )
    }
    
}
export default Footer;
