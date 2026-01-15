'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import { Star, ArrowUpRight, User } from 'lucide-react';

import 'swiper/css';
import 'swiper/css/pagination';
import './TestimonialSection.scss';

const testimonials = [
  {
    id: 1,
    text: "Bharat Edge contact me for our Startup certificate and am very much satisfied with their support and services. They handle my issues very quickly and professionally and here I like to mention one name Sakshi Bharadia...",
    author: "Shilpi Sengupta",
  },
  {
    id: 2,
    text: "The service provided was exceptional. They managed our documentation flawlessly and the communication was transparent throughout the entire process.",
    author: "Arjun Mehta",
  }
];

const TestimonialSection = () => {
  return (
    <section className="testimonial-section">
      <div className="inner-container">
        
        {/* Left Side: Header Content */}
        <div className="text-content">
          <div className="badge">
            <span className="dot">•</span> TESTIMONIALS
          </div>
          <h2 className="headline">
            Smart Consulting <br />
            Backed by <span className="green-text">Real Results</span>
          </h2>
          <button className="cta-btn">
            All Services <ArrowUpRight size={20} />
          </button>
        </div>

        {/* Right Side: Card Content */}
        <div className="card-container">
          <div className="testimonial-card">
            <Swiper
              modules={[Pagination, Autoplay]}
              spaceBetween={20}
              slidesPerView={1}
              pagination={{ clickable: true }}
              autoplay={{ delay: 5000 }}
              className="feedback-swiper"
            >
              {testimonials.map((t) => (
                <SwiperSlide key={t.id}>
                  <p className="feedback-paragraph">"{t.text}"</p>
                  <div className="user-row">
                    <div className="user-avatar">
                      <User size={20} color="white" />
                    </div>
                    <span className="user-name">{t.author}</span>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            <div className="card-footer-ratings">
              <div className="rating-item">
                <span className="g-logo">G</span>
                <div className="rate-info">
                  <span className="label">Google Rating</span>
                  <div className="stars">4.7 <Star size={12} fill="#ffb400" color="#ffb400" /></div>
                </div>
              </div>

              <div className="rating-item border-line">
                <div className="rate-info">
                  <span className="label">4.7 Rated</span>
                  <div className="stars"><span className="jd-text">Justdial</span> <Star size={10} fill="#ffb400" color="#ffb400" /></div>
                </div>
              </div>

              <div className="rating-item border-line hide-mobile">
                <div className="rate-info">
                  <span className="label">Total Rating 4.7 Base</span>
                  <span className="sub-label">On 1950+ Reviews</span>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default TestimonialSection;