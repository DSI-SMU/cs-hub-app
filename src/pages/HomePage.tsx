import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Carousel from '../components/Carousel';
import Header from '../components/Header';
import Footer from '../components/Footer';

const useStyles = makeStyles(() => ({
    siteContainer: {
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        backgroundColor: '#E1F5FE',
        overflowX: 'hidden',
    },
    contentWrap: {
        flex: 1,
        width: '100%',
        paddingTop: '64px', // Add top padding equal to the height of the header
    },
}));

const HomePage: React.FC = () => {
    const classes = useStyles();

    return (
        <div className={classes.siteContainer}>
            <Header />
            <div className={classes.contentWrap}>
                <Carousel />
            </div>
            <Footer />
        </div>
    );
};

export default HomePage;