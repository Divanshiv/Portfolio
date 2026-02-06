import React from 'react';
import './Testimonials.css';
import Image3 from '../../assets/Divanshiv Avatar3 .png'
import Image4 from '../../assets/Divanshiv Avatar4.png'

import { Pagination, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

const Testimonials = () => {

	const data = [
		{
			id: 1,
			image: Image3,
			title: "Rajiv",
			subtitle: "Associate Manager @ Personiv",
			comment: "Divanshiv worked with us as an IT Technician at Personiv and consistently showed strong technical knowledge and responsibility. He handled system support tasks efficiently and ensured smooth day-to-day operations. His dedication and calm approach made him a dependable team member.",
		},
		{
			id: 2,
			image: Image4,
			title: "Poonam Rani",
			subtitle: "Freelancer Client",
			comment: "Working with Divanshiv was a great experience. He built our web application with attention to detail, strong performance, and modern design. Communication was smooth and deadlines were always met.",
		},
	];

	return (
		<section className="testimonials container section">

			<h2 className="section__title">Testimonials</h2>

			<Swiper className="testimonial__container grid"
				modules={[Pagination, Autoplay]}
				spaceBetween={30}
				slidesPerView={1}
				loop={true}
				grabCursor={true}
				autoplay={{
					delay: 3000,
					disableOnInteraction: false,
				}}
				speed={1000}
				pagination={{ clickable: true }}>
				{data.map(({ id, image, title, subtitle, comment }) => {
					return (
						<SwiperSlide className="testimonial__item" key={id}>
							<div className="thumb">
								<img src={image} alt="" />
							</div>
							<h3 className="testimonial__title">{title}</h3>
							<span className="subtitle">{subtitle}</span>
							<div className="comment">{comment}</div>
						</SwiperSlide>
					)
				})}
			</Swiper>
		</section>
	)
}

export default Testimonials