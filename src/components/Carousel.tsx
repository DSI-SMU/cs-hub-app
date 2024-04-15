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
            backgroundSize: 'initial', // This will keep the image at its original size
            backgroundRepeat: 'repeat', // This will tile the image
            backgroundPosition: 'center center',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '300px',
            backgroundImage: 'url(\'/images/starfield-banner-blue.jpg\')',
        },
    // Add other styles if needed
    },
    textContainer: {
        width: '100%', // Ensure it spans the full width of the slide
        height: '100%', // Ensure it spans the full height of the slide
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center', // Centers text vertically
        alignItems: 'center', // Centers text horizontally
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
                {slides.map((slide) => (
                    <div
                        key={slide.id}
                        className="slick-slide"
                    >
                        <div className={classes.textContainer}>
                            <h1>{slide.title}</h1>
                            <h2>{slide.subtitle}</h2>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default Carousel;
