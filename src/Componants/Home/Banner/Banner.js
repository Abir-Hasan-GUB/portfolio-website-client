import React from 'react';
import './Banner.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import momin from '../../Images/momink.png';

const icon = <FontAwesomeIcon icon={faCoffee} />

const Banner = () => {
    return (
        <section id="hom">
            <div className="container">
            <div className="row">
            <div class="col-lg-6 md-12">
                    <div class="banner-content">
                        <h3>Hi there,</h3>
                        <h1>I'm Abir Hasan</h1>
                        <h4>Web Designer and Developer</h4>
                        <div class="icons">
                            <a href="#" target="_blank">{icon}</a>
                            <a href="#" target="_blank">{icon}</a>
                            <a href="#" target="_blank">{icon}</a>
                            <a href="#" target="_blank">{icon}</a>
                            <a href="#" target="_blank">{icon}</a>
                            <a href="#" target="_blank">{icon}</a>
                        </div>
                        <a href="#" target="_blank" class="btn">
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            Hire Me</a>
                    </div>
                </div>
                <div class="col-lg-6 md-12">
                <div class="hero-img">
                       <img class="img-fluid" src={momin} alt="momin khan" />
                    </div>
                </div>
            </div>
        </div>
        </section>
    );
};

export default Banner;