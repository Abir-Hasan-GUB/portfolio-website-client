import React from 'react';
import './Sarvice.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import momin from '../../Images/momink.png';

const icon = <FontAwesomeIcon icon={faCoffee} />

const Sarvice = () => {
    return (
        
    <section id="service">
    <div class="container">
        <h1>My Services</h1>
        <div class="row">
            <div class="col-lg-4">
                <div class="main">
                    <div class="service">
                        <div class="service-logo">
                        <i className = "abc">{icon}</i>
                        </div>
                        <h4>PSD to HTML</h4>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis ea quam sapiente
                            eligendi odit asperiores cupiditate corrupti perferendis, quaerat. Esse.
                        </p>
                    </div>
                    <div class="shadowOne"></div>
                    <div class="shadowTwo"></div>
                </div>
            </div>
            <div class="col-lg-4">
                <div class="main">
                    <div class="service">
                        <div class="service-logo">
                                <i>{icon}</i>
                        </div>
                        <h4>Web Design</h4>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis ea quam sapiente
                            eligendi odit asperiores cupiditate corrupti perferendis, quaerat. Esse.
                        </p>
                    </div>
                    <div class="shadowOne"></div>
                    <div class="shadowTwo"></div>
                </div>
            </div>
            <div class="col-lg-4">
                <div class="main">
                    <div class="service">
                        <div class="service-logo">
                        <i>{icon}</i>
                        </div>
                        <h4>Responsive Design</h4>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis ea quam sapiente
                            eligendi odit asperiores cupiditate corrupti perferendis, quaerat. Esse.
                        </p>
                    </div>
                    <div class="shadowOne"></div>
                    <div class="shadowTwo"></div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-lg-4">
                <div class="main">
                    <div class="service">
                        <div class="service-logo">
                        <i>{icon}</i>
                        </div>
                        <h4>HTML to React</h4>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis ea quam sapiente
                            eligendi odit asperiores cupiditate corrupti perferendis, quaerat. Esse.
                        </p>
                    </div>
                    <div class="shadowOne"></div>
                    <div class="shadowTwo"></div>
                </div>
            </div>
            <div class="col-lg-4">
                <div class="main">
                    <div class="service">
                        <div class="service-logo">
                        <i>{icon}</i>
                        </div>
                        <h4>React Bug Fix</h4>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis ea quam sapiente
                            eligendi odit asperiores cupiditate corrupti perferendis, quaerat. Esse.
                        </p>
                    </div>
                    <div class="shadowOne"></div>
                    <div class="shadowTwo"></div>
                </div>
            </div>
            <div class="col-lg-4">
                <div class="main">
                    <div class="service">
                        <div class="service-logo">
                        <i>{icon}</i>
                        </div>
                        <h4>Upcomming</h4>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis ea quam sapiente
                            eligendi odit asperiores cupiditate corrupti perferendis, quaerat. Esse.
                        </p>
                    </div>
                    <div class="shadowOne"></div>
                    <div class="shadowTwo"></div>
                </div>
            </div>
        </div>
    </div>
</section>

    );
};

export default Sarvice;