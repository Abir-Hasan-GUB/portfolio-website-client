import React from 'react';
import './Portfolio.css';
import picture1 from '../../Images/portfolio1.png';
import picture2 from '../../Images/portfolio2.png';
import picture3 from '../../Images/portfolio3.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShare } from '@fortawesome/free-solid-svg-icons';

const share = <FontAwesomeIcon icon={faShare} />
const Portfolio = () => {
    return (

        <section id="portfolio">
            <div class="container">
                <div class="row">
                    <div class="col little-description">
                        <h5>My Portfolio</h5>
                        <h2>CHECK OUT MY RECENT PRACTICE WORK</h2>
                    </div>
                </div>
                <div class="row justify-content-center control">
                    {/* <div class="portfolio-filter">
                        <button type="button" data-filter="all">All</button>
                        <button type="button" data-filter=".psd ">PSD TO HTML</button>
                        <button type="button" data-filter=".bootstrap">PSD TO BOOTSTRAP</button>
                        <button type="button" data-filter=".up">UPCOMING</button>
                    </div> */}
                </div>
                <div class="row portfolio-gallery">
                    <div class="col-md-4 mix psd">
                        <div class="port-img">
                            {/* <img src="images/portfolio3.JPG" alt="portfoloi" className="img-fluid"> */}
                            <img src={picture1} className="img-fluid" alt="" />
                            <a
                                href="https://creative-agency-by-abir.netlify.app/" target="_blank" class="view"><i>{share}</i></a>
                        </div>
                    </div>
                    <div class="col-md-4 mix psd">
                        <div class="port-img">
                            <img src={picture2} className="img-fluid" alt="" />
                            <a
                                href="https://doctors-portal-by-abir.netlify.app/" target="_blank" class="view"><i>{share}</i></a>
                        </div>
                    </div>
                    <div class="col-md-4 mix psd">
                        <div class="port-img">
                            <img src={picture3} className="img-fluid" alt="" />
                            <a
                                href="https://volunteer-network-by-abir.netlify.app/" target="_blank" class="view"><i>{share}</i></a>
                        </div>
                    </div>
                    {/* <div class="col-md-4 mix psd">
                        <div class="port-img">
                            <img src={picture} className="img-fluid" alt="" />
                            <a
                                href="https://abir-hasan-gub.github.io/Glozzom/" target="_blank" class="view"><i>{share}</i></a>
                        </div>
                    </div>
                    <div class="col-md-4 mix bootstrap">
                        <div class="port-img">
                            <img src={picture} className="img-fluid" alt="" />
                            <a
                                href="https://abir-hasan-gub.github.io/Glozzom/" target="_blank" class="view"><i>{share}</i></a>
                        </div>
                    </div>
                    <div class="col-md-4 mix bootstrap">
                        <div class="port-img">
                            <img src={picture} className="img-fluid" alt="" />
                            <a
                                href="https://abir-hasan-gub.github.io/Glozzom/" target="_blank" class="view"><i>{share}</i></a>
                        </div>
                    </div>
                    <div class="col-md-4 mix bootstrap">
                        <div class="port-img">
                            <img src={picture} className="img-fluid" alt="" />
                            <a
                                href="https://abir-hasan-gub.github.io/Glozzom/" target="_blank" class="view"><i>{share}</i></a>
                        </div>
                    </div>
                    <div class="col-md-4 mix up">
                        <div class="port-img">
                            <img src={picture} className="img-fluid" alt="" />
                            <a
                                href="https://abir-hasan-gub.github.io/Glozzom/" target="_blank" class="view"><i>{share}</i></a>
                        </div>
                    </div>
                    <div class="col-md-4 mix up">
                        <div class="port-img">
                            <img src={picture} className="img-fluid" alt="" />
                            <a
                                href="https://abir-hasan-gub.github.io/Glozzom/" target="_blank" class="view"><i>{share}</i></a>
                        </div>
                    </div> */}
                </div>
            </div>
        </section>

    );
};

export default Portfolio;