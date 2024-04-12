import React from 'react';
import Slider, { Settings } from 'react-slick';
import { makeStyles } from '@material-ui/core/styles';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

interface CarouselProps {
  slides: Array<{
    id: number;
    title: string;
    subtitle: string;
    imageUrl: string;
  }>;
}

const useStyles = makeStyles(() => ({
    carousel: {
        position: 'relative',
        '& .slick-slide': {
            textAlign: 'center',
            color: 'white',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '300px', 
        },
    // Add other styles if needed
    },
    // Define your custom prev/next arrow styles here
}));

const Carousel: React.FC<CarouselProps> = ({ slides }) => {
    const classes = useStyles();

    const settings: Settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    // You can also add custom prev/next arrows if needed
    };

    return (
        <div className={classes.carousel}>
            <Slider {...settings}>
                {slides.map(slide => (
                    <div
                        key={slide.id}
                        style={{ backgroundImage: `url(${slide.imageUrl})` }}
                    >
                        <h2>{slide.title}</h2>
                        <p>{slide.subtitle}</p>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default Carousel;
