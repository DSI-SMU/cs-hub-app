import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const useStyles = makeStyles((theme) => ({
    header: {
        position: 'fixed',  // Make the header fixed
        top: 0,             // Align the header to the top
        left: 0,            // Align the header to the left
        width: '100%',      // Ensure the header is full width
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 20px',
        background: 'url("/images/starfield-banner-blue.jpg") repeat-x',
        height: '64px',
        zIndex: 1100, // The zIndex should be higher than other elements to keep it on top
    },
    logo: {
        height: '50px',
        marginRight: '20px',
    },
    navItems: {
        display: 'flex',
        alignItems: 'center',
        '& > * + *': {
            marginLeft: '20px',
        },
    },
    icon: {
        color: 'white', // This sets the color of the icons
        textDecoration: 'none', // Removes underline from links
    },
}));

const Header: React.FC = () => {
    const classes = useStyles();

    return (
        <header className={classes.header}>
            <span>
                <a href="https://www.nasa.gov/nex" target="_blank">
                    <img src="/images/NASA.png" alt="NASA Logo" className={classes.logo} />
                </a>
            </span>
            <div className={classes.navItems}>
                <a href="/" title="Home" className={classes.icon}>
                    <i className="material-icons">home</i>
                </a>
                <a href="/login" title="Login" className={classes.icon}>
                    <i className="material-icons">login</i>
                </a>
            </div>
        </header>
    );
};

export default Header;
