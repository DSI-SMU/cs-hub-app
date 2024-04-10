import React, { useRef } from 'react';
import Slider, { Settings } from 'react-slick';
import { makeStyles } from '@material-ui/core/styles';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

interface CarouselSlide {
    id: number;
    title: string;
    description: string;
    backgroundImage: string;
}

const slidesData: CarouselSlide[] = [
    { id: 1, title: '1st Slide', description: 'Description of the first slide.', backgroundImage: '/images/starfield-banner-blue.jpg' },
    { id: 2, title: '2nd Slide', description: 'Description of the second slide.', backgroundImage: '/images/starfield-banner-blue.jpg' },
    // Add more slides as needed
];

const useStyles = makeStyles(() => ({
    item: {
        background: `url(${process.env.PUBLIC_URL + '/images/starfield-banner-blue.jpg'}) no-repeat center center`,
        backgroundSize: 'cover',
        height: '500px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
    },
}));

const Carousel: React.FC = () => {
    const classes = useStyles();
    
    const sliderRef = useRef<Slider | null>(null);

    const settings: Settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000
    };

    return (
        <div>
            <Slider ref={sliderRef} {...settings}>
                {slidesData.map((slide) => (
                    <div key={slide.id} className={classes.item}>
                        <h3>{slide.title}</h3>
                        <p>{slide.description}</p>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default Carousel;
