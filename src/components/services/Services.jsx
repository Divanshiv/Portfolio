import React from 'react';
import './Services.css';
import Image1 from '../../assets/service-1.svg'
import Image2 from '../../assets/service-2.svg'
import Image3 from '../../assets/service-3.svg'

const data = [
    {
        id: 1,
        image: Image1,
        title: "Frontend Development",
        description:
            "Building responsive, modern, and user-friendly interfaces using React.js, JavaScript, and Tailwind CSS with clean component architecture.",
    },
    {
        id: 2,
        image: Image2,
        title: "Full Stack MERN Development",
        description:
            "Developing scalable web applications using MongoDB, Express, React, and Node.js with authentication, APIs, and dynamic UI integration.",
    },
    {
        id: 3,
        image: Image3,
        title: "Mobile Responsive Design",
        description:
            "Creating mobile-first, fully responsive layouts that work smoothly across phones, tablets, and desktops using modern CSS and React techniques.",
    },
];

const Services = () => {
    return (
        <section className="services container section" id="services">
            <h2 className="section__title">Skills</h2>

            <div className="services__container grid">
                {data.map(({ id, image, title, description }) => {
                    return (
                        <div className="services__card" key={id}>
                            <img src={image} alt='' className='services__img' width="80" />

                            <h3 className="services__title">{title}</h3>
                            <p className="services__description">{description}</p>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}

export default Services