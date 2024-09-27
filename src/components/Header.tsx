import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import HomeIcon from '@material-ui/icons/Home';
import LoginIcon from '@material-ui/icons/ExitToApp';
import { Link } from 'react-router-dom';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const useStyles = makeStyles((theme) => ({
    header: {
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        background: 'url("/images/starfield-banner-blue.jpg") repeat-x',
        height: '64px',
        zIndex: 1100,
    },
    logo: {
        height: '50px',
        marginLeft: '10px',
    },
    navItems: {
        display: 'flex',
        alignItems: 'center',
        '& > *': {
            marginRight: '15px',
        },
    },
    icon: {
        color: 'white',
        textDecoration: 'none',
    },
}));

const Header: React.FC = () => {
    const classes = useStyles();

    return (
        <header className={classes.header}>
            <span>
                <a href="https://www.smu.edu" target="_blank">
                    <img src="/images/smulogo.png" alt="Smu Logo" className={classes.logo} />
                </a>
            </span>
            <div className={classes.navItems}>
                <Link to="/organization-challenge" title="Organization Challenge" className={classes.icon}>
                    Challenge
                </Link>
                <Link to="/organization-teams" title="Organization Teams" className={classes.icon}>
                    Teams
                </Link>
                <Link to="/organization-projects" title="Organization Projects" className={classes.icon}>
                    Projects
                </Link>
                <Link to="/organization-projects" title="Organization Projects" className={classes.icon}>
                    Technology
                </Link>
                <Link to="/organization-projects" title="Organization Projects" className={classes.icon}>
                    Job
                </Link>
                <Link to="/organization-projects" title="Organization Projects" className={classes.icon}>
                    Researcher
                </Link>
                <Link to="/organization-projects" title="Organization Projects" className={classes.icon}>
                    User
                </Link>
                <Link to="/" title="Home" className={classes.icon}>
                    <HomeIcon />
                </Link>
                <Link to="/login" title="Login" className={classes.icon}>
                    <LoginIcon />
                </Link>
                
            </div>
        </header>
    );
};

export default Header;
