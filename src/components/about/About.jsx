import React from 'react';
import './About.css';
import Image from '../../assets/Divanshiv Avatar2 .png';
import Resume from '../../assets/Divanshiv Resume .pdf';
import AboutBox from './AboutBox';

const About = () => {
    const downloadResume = async () => {
        window.open(Resume, '_blank');
    }


    return (
        <section className="about container section" id="about">
            <h2 className="section__title">About Me </h2>

            <div className="about__container grid">
                <img src={Image} alt="" className='about__img' />

                <div className="about__data grid">
                    <div className="about__info">
                        <p className="about__description">
                            Hello! I'm Divanshiv Kumar, a passionate Frontend Developer based in Delhi/NCR, India. I graduated with a BCA (First Division Honors) from DAV Centenary College, Maharishi Dayanand University, where I built a strong foundation in programming and web technologies.<br /><br />
                            Fast forward to today, it's been an exciting journey of learning, building, and growing. I enjoy turning ideas into interactive, user-friendly web experiences and constantly pushing myself to learn new technologies. My current focus is on expanding my portfolio by building real-world projects, improving performance and UI/UX, and growing as a reliable team player who enjoys collaboration and problem-solving.<br /><br />
                            Here are a few technologies I've been working with recently:
                        </p>
                        <ul className="about__list">
                            <li>JavaScript (ES6+)</li>
                            <li>React.js</li>
                            <li>Tailwind CSS</li>
                            <li>Node.js</li>
                            <li>Express.js</li>
                            <li>MongoDB</li>
                            <li>Python</li>
                        </ul>
                        <p className="about__description">
                            I'm always curious about new tools, frameworks, and ideas—and I love building things that people actually enjoy using.
                        </p>
                        <button className="btn" onClick={downloadResume}>Donwload CV</button>
                    </div>
                </div>
            </div>

            <AboutBox />
        </section>
    )
}

export default About