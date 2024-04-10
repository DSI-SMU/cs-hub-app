import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    footer: {
        position: 'fixed',
        left: 0,
        bottom: 0,
        width: '100%',
        backgroundColor: theme.palette.primary.dark,
        color: theme.palette.primary.contrastText,
        padding: theme.spacing(3, 0),
        backgroundImage: 'url("/images/starfield-banner-blue.jpg")',
        backgroundRepeat: 'repeat',
        textAlign: 'center',
        zIndex: 1000, // Ensure the footer is above other content
    },
    footerContent: {
        [theme.breakpoints.up('sm')]: {
            // Adjustments for wider screens
        },
    },
    contactLink: {
        color: theme.palette.info.main,
        textDecoration: 'none',
        '&:hover': {
            textDecoration: 'underline',
        },
    },
}));

const Footer: React.FC = () => {
    const classes = useStyles();

    return (
        <footer className={classes.footer}>
            <div className={classes.footerContent}>
                &copy; Data Science Infrastructure Lab, Southern Methodist University 2024
                <br />
                Contact us at: <a href="mailto:jiazhang@smu.edu" className={classes.contactLink}>jiazhang@smu.edu</a>
            </div>
        </footer>
    );
};

export default Footer;
