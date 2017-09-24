import React, { Component } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import image1 from '../Images/1.jpg'
import image2 from '../Images/2.jpg'
import image3 from '../Images/3.jpg'

export default class SimpleSlider extends Component {

    render() {
        var settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 3000
        };
        return (
            <Slider {...settings}>
                <div><img src={image2} alt="" /></div>
                <div><img src={image3} alt="" /></div>
                <div><img src={image1} alt="" /></div>
            </Slider>
        );
    }
}