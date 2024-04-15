import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Carousel from '../components/Carousel';
import Header from '../components/Header';
import Footer from '../components/Footer';


import ViewListIcon from '@material-ui/icons/ViewList';
import ViewModuleIcon from '@material-ui/icons/ViewModule';
import ViewQuiltIcon from '@material-ui/icons/ViewQuilt';
import { Grid } from '@material-ui/core';
import CardGrid from '../components/CardGrid';

const cardInfos = [{
    title: 'Project',
    items: [
        {
            text: 'No Default Project',
            icon: <ViewListIcon />,
        },
        {
            text: 'Projects List',
            icon: <ViewModuleIcon />,
        },
        {
            text: 'Users List',
            icon: <ViewQuiltIcon />,
        },
    // ... add more items as needed
    ]
}
, {
    title: 'Project',
    items: [
        {
            text: 'No Default Project',
            icon: <ViewListIcon />,
        },
        {
            text: 'Projects List',
            icon: <ViewModuleIcon />,
        },
        {
            text: 'Users List',
            icon: <ViewQuiltIcon />,
        },
    // ... add more items as needed
    ]
}];

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

    const slides = [
        {
            id: 1,
            title: 'First Slide',
            subtitle: 'This is the first slide',
            imageUrl: '/images/slide1.jpg',
        },
        {
            id: 2,
            title: 'Second Slide',
            subtitle: 'This is the second slide',
            imageUrl: '/images/slide1.jpg',
        },
    ];

    return (
        <div className={classes.siteContainer}>
            <Header />
            <div className={classes.contentWrap}>
                <Carousel slides={slides}/>
                {cardInfos.map((section, index) => (
                    <Grid item xs={12} sm={6} md={3} key={index}>
                        <CardGrid cardInfo={section} />
                    </Grid>
                ))}
            </div>
            <Footer />
        </div>
    );
};

export default HomePage;