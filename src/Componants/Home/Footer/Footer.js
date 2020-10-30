import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCodeBranch } from '@fortawesome/free-solid-svg-icons'

const github = <FontAwesomeIcon icon={faCodeBranch} />

const Footer = () => {
    return (
        <div className='foooter'>
            <div className="container skill">
                <div className="row copy">
                    <div className="footerMainDiv col-12 col-sm-12 col-md-12 d-flex justify-content-center align-items-center justify-content-between">
                        <p>Copyright &copy; 2020 Abir Hasan</p>
                        <div className="d-flex align-items-center dev">
                            <a href="https://github.com/Abir-Hasan-GUB" target="_blank" rel="noopener noreferrer" >{github}</a>
                            <h4> <span className="heart">&hearts;</span> Developed BY ME</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;