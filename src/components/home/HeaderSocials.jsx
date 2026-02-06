import React from 'react';
import { FaGithub, FaFacebookF, FaLinkedinIn, FaTwitter, FaDev, FaInstagram } from 'react-icons/fa';

const HeaderSocials = () => {
    return (
        <div className='home__socials'>
            <a href='https://github.com/Divanshiv' className='home__social-link' target='_blank' rel='noreferrer'>
                <FaGithub />
            </a>

            <a href='https://dev.to/divanshivkumar' className='home__social-link' target='_blank' rel='noreferrer'>
                <FaDev />
            </a>

            <a href='https://www.linkedin.com/in/divanshiv-kumar28/' className='home__social-link' target='_blank' rel='noreferrer'>
                <FaLinkedinIn />
            </a>

            <a href='https://www.facebook.com/divanshiv.kumar.5' className='home__social-link' target='_blank' rel='noreferrer'>
                <FaFacebookF />
            </a>

            <a href='https://x.com/DivanshivKumar' className='home__social-link' target='__blank' rel='noreferrer'>
                <FaTwitter />
            </a>

            <a href='https://www.instagram.com/divanshiv.28/' className='home__social-link' target='__blank' rel='noreferrer'>
                <FaInstagram />
            </a>
        </div>
    );
};

export default HeaderSocials;
