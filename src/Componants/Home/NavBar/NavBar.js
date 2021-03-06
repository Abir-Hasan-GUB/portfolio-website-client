import React from 'react';
import './NavBar.css';

const NavBar = () => {
    return (
        <header id="home">
            <nav class="navbar navbar-dark navbar-expand-lg hasan">
            <div class="container">
                <a href="/" class="navbar-brand abir">Abir Hasan</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <div class="menu-item  ml-auto">
                        <ul class="navbar-nav" id="scroll-active">
                            <li class="nav-item">
                                <a class="nav-link active" href="#home">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#about">About</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#skills">Skills</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#service">Services</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#portfolio">Portfolio</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/blog">Blog</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#contact">Contact</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="https://drive.google.com/file/d/1Q75AR9iqDaGWWgF4GspfvpLngDW8eD1W/view#" target="_blank"><button class="btn btn-dark navResumeBtn">Get Resume</button></a>
                            </li>

                        </ul>
                    </div>
                </div>
            </div>
        </nav>
        </header>
    );
};

export default NavBar;