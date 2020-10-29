import React from 'react';
import './Contacts.css';

const Contacts = () => {
    return (
        <section id="contact">
        <div class="container">
            <h2>Contact Me</h2>
            <div class="row100">
                <div class="col">
                    <div class="inputBox">
                        <input type="text" name="" required="required"/>
                        <span class="text">First Name</span>
                        <span class="line"></span>
                    </div>
                </div>
                <div class="col">
                    <div class="inputBox">
                        <input type="text" name="" required="required"/>
                        <span class="text">Last Name</span>
                        <span class="line"></span>
                    </div>
                </div>
            </div>
            <div class="row100">
                <div class="col">
                    <div class="inputBox">
                        <input type="text" name="" required="required"/>
                        <span class="text">Email</span>
                        <span class="line"></span>
                    </div>
                </div>
                <div class="col">
                    <div class="inputBox">
                        <input type="text" name="" required="required"/>
                        <span class="text">Mobile</span>
                        <span class="line"></span>
                    </div>
                </div>
                <div class="row100">
                    <div class="col">
                        <div class="inputBox textarea">
                            <textarea required="required"></textarea>
                            <span class="text">Type your massage</span>
                            <span class="line"></span>
                        </div>
                    </div>
                </div>
                <div class="row100">
                    <div class="col">
                        <a href="#" target="_blank" class="btn">
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            Send</a>
                    </div>
                </div>
            </div>
        </div>
    </section>
    );
};

export default Contacts;