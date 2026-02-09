import React from 'react';
import './Certifications.css';

import { RiExternalLinkLine } from 'react-icons/ri';

import Image1 from '../../assets/blog-1.svg';
import Image2 from '../../assets/blog-2.svg';
import Image3 from '../../assets/blog-3.svg';

const Certifications = () => {
    return (
        <section className="certifications container section" id="certifications">
            <h2 className="section__title">Certifications</h2>

            <div className="certifications__container grid">
                <div className="certifications__card">
                    <div className="certifications__thumb">
                        <div><span className="certifications__category">Technical Certifications</span></div>
                        <div><img src={Image1} alt="" className='certifications__img' /></div>
                    </div>
                    <div className="certifications__details">
                        <h3 className="certifications__title">
                            Mern - Full Stack Developers
                        </h3>
                        <div className="certifications__meta">
                            <span>July, 2024</span>
                            <span className="certifications__dot">.</span>
                            <span>GeekforGeeks</span>
                        </div>
                        <a href="https://media.geeksforgeeks.org/courses/certificates/305920063c3f4c716b9c88624d557cdf.pdf" target="_blank" rel="noreferrer" className="certifications__button">
                            Check out <RiExternalLinkLine className="certifications__button-icon" />
                        </a>
                    </div>
                </div>

                <div className="certifications__card">
                    <div className="certifications__thumb">
                        <div><span className="certifications__category">Technical Certifications</span></div>
                        <div><img src={Image2} alt="" className='certifications__img' /></div>
                    </div>
                    <div className="certifications__details">
                        <h3 className="certifications__title">
                            Django
                        </h3>
                        <div className="certifications__meta">
                            <span>August, 2024</span>
                            <span className="certifications__dot">.</span>
                            <span>GeekforGeeks</span>
                        </div>
                        <a href="https://media.geeksforgeeks.org/courses/certificates/1cc9b1d4fec962e5a0b094e1e328e11c.pdf" className="certifications__button">
                            Check out <RiExternalLinkLine className="certifications__button-icon" />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Certifications;