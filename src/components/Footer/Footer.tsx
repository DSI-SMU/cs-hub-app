// Footer.tsx
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    footer: {
        // Use the theme's primary color
        backgroundColor: theme.palette.primary.dark,
        // Ensure text is readable on the primary color
        color: theme.palette.primary.contrastText,
        padding: theme.spacing(3, 0), // Vertical padding
        backgroundImage: 'url("/images/starfield-banner-blue.jpg")', // Add your background image URL
        backgroundRepeat: 'repeat', // Ensure the background repeats horizontally
        textAlign: 'center', // Center the text
    },
    footerContent: {
        [theme.breakpoints.up('sm')]: {
            // If you need to adjust styling on wider screens, you can do it here
        },
    },
    contactLink: {
        // Use a secondary color for the link for contrast
        color: theme.palette.info.main, 
        textDecoration: 'none', // Optionally remove underline from links
        '&:hover': {
            textDecoration: 'underline', // Add underline on hover for a traditional link effect
        },
    },
}));

const Footer: React.FC = () => {
    const classes = useStyles();

    return (
        <footer className={classes.footer}>
            <div className={classes.footerContent}>
                {/* Footer content with copyright and contact information */}
        &copy; 
        Data Science Infrastructure Lab, Southern Methodist University 2024
                <br />
        Contact us at: <a href="mailto:jiazhang@smu.edu" className={classes.contactLink}>jiazhang@smu.edu</a>
            </div>
        </footer>
    );
};

export default Footer;
