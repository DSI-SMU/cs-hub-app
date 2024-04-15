import Slider, { CustomArrowProps, Settings } from 'react-slick';
import { makeStyles } from '@material-ui/core/styles';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos'; // Import left arrow icon
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos'; // Import right arrow icon

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
        '& .slick-dots': {
            bottom: '10px',
        },
        '& .slick-dots li button:before': {
            color: 'white', // Sets the default color of the dots
        },
        '& .slick-dots li.slick-active button:before': {
            color: 'white', // Sets the color of the active dot
        },
        '& .slick-arrow': {
            zIndex: 1,
        },
        '& .slick-prev': {
            left: '10px',
        },
        '& .slick-next': {
            right: '10px',
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
}));

// Custom arrow component for the previous arrow
const PrevArrow: React.FC<CustomArrowProps> = ({ className, style, onClick }) => {
    return (
        <ArrowBackIosIcon
            className={className}
            style={{ ...style, color: 'white' }}
            onClick={onClick}
        />
    );
};

// Custom arrow component for the next arrow
const NextArrow: React.FC<CustomArrowProps> = ({ className, style, onClick }) => {
    return (
        <ArrowForwardIosIcon
            className={className}
            style={{ ...style, color: 'white' }}
            onClick={onClick}
        />
    );
};

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
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
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
