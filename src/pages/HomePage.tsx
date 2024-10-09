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

const cardInfos = [
    {
        title: 'Challenges',
        items: [
            {
                text: 'Challenges',
                icon: <ViewListIcon />,
            },
            {
                text: 'Projects Formed',
                icon: <ViewModuleIcon />,
            },
            {
                text: 'Users',
                icon: <ViewQuiltIcon />,
            },
            // ... add more items as needed
        ]
    }
    , {
        title: 'SMU Researchers',
        items: [
            {
                text: 'Researchers',
                icon: <ViewListIcon />,
            },
            {
                text: 'Technologies',
                icon: <ViewModuleIcon />,
            },
            {
                text: 'Find researchers',
                icon: <ViewQuiltIcon />,
            },
        ]
    }
    , {
        title: 'My Dashboard',
        items: [
            {
                text: 'My Followers',
                icon: <ViewListIcon />,
            },
            {
                text: 'My followees',
                icon: <ViewModuleIcon />,
            },
            {
                text: 'My network',
                icon: <ViewQuiltIcon />,
            },
        ]
    }
    , {
        title: 'SMU-Sci-Hub ',
        items: [
            {
                text: 'Visual tutorials',
                icon: <ViewListIcon />,
            },
            {
                text: 'About Sci-Hub',
                icon: <ViewModuleIcon />,
            },
            {
                text: 'SMU-Sci-Hub Bot',
                icon: <ViewQuiltIcon />,
            },
        ]
    }
];

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
    gridContainer: {
        flexGrow: 1,
    },
}));

const HomePage: React.FC = () => {
    const classes = useStyles();

    const slides = [
        {
            id: 1,
            title: 'SMU-Sci-Hub',
            subtitle: 'Intelligent Assistant Linking SMU to Local Industry',
            imageUrl: '/images/slide1.jpg',
        },
        {
            id: 2,
            title: 'Window to SMU Technology',
            subtitle: 'Help you to understand the exciting technology invented by SMU faculty and students.',
            imageUrl: '/images/slide1.jpg',
        },
    ];

    return (
        <div className={classes.siteContainer}>
            <Header />
            <div className={classes.contentWrap}>
                <Carousel slides={slides}/>
                <Grid container spacing={2} className={classes.gridContainer}>
                    {cardInfos.map((section, index) => (
                        <Grid item xs={12} sm={6} md={3} key={index}>
                            <CardGrid cardInfo={section} />
                        </Grid>
                    ))}
                </Grid>
            </div>
            <Footer />
        </div>
    );
};

export default HomePage;