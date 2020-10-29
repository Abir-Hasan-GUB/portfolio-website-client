import React from 'react';
import './Skill.css';

const Skill = () => {
    return (
        <section id="skills">
        <div className="container">
            <div className="row">
                <div className="col">
                    <div className="contai">
                        <h2>My Skills</h2>
                        <div className="skills">
                            <span className="name">Html</span>
                            <div className="percent">
                                <div className="progress" style={{width: "95%"}}></div>
                            </div>
                            <span className="value">95%</span>
                        </div>
                        <div className="skills">
                            <span className="name">css</span>
                            <div className="percent">
                                <div className="progress" style={{width: "90%"}}></div>
                            </div>
                            <span className="value">90%</span>
                        </div>
                        <div className="skills">
                            <span className="name">bootstrap</span>
                            <div className="percent">
                                <div className="progress" style={{width: "90%"}}></div>
                            </div>
                            <span className="value">80%</span>
                        </div>
                        <div className="skills">
                            <span className="name">javascript</span>
                            <div className="percent">
                                <div className="progress" style={{width: "95%"}}></div>
                            </div>
                            <span className="value">85%</span>
                        </div>
                        <div className="skills">
                            <span className="name">React</span>
                            <div className="percent">
                                <div className="progress" style={{width: "85%"}}></div>
                            </div>
                            <span className="value">85%</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    );
};

export default Skill;