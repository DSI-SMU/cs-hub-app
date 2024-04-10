// LoginPage.tsx
import React, { useState } from 'react';
import { TextField, Button, Card, Typography, Grid, Link } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import ReCAPTCHA from 'react-google-recaptcha';
import Header from '../components/Header';
import Footer from '../components/Footer';

const useStyles = makeStyles((theme) => ({
    container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between', // Space between header, main content, and footer
        minHeight: '100vh', // Full view height
        backgroundColor: '#E1F5FE', // Light blue background color
        paddingTop: '64px',
    },
    card: {
        maxWidth: 480, // Allows the card to be a bit wider
        margin: theme.spacing(6, 2), // Top and Bottom margin
        padding: theme.spacing(4),
        alignSelf: 'center', // Center the card
    },
    title: {
        textAlign: 'center',
        margin: theme.spacing(2, 0, 4),
        fontSize: theme.typography.pxToRem(32).bold,
    },
    submitButton: {
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(1), // Reduced bottom margin
    },
    linksContainer: {
        display: 'flex',
        justifyContent: 'space-between', // Distribute space between links
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(1), // Give some space at the bottom
    },
    textField: {
    // Override styles to remove notched outline on focused input
        '& .MuiOutlinedInput-root': {
            '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                border: 'none', // Remove border
            },
        },
    },
    recaptcha: {
        display: 'flex',
        justifyContent: 'center', // Center reCAPTCHA horizontally
        margin: `${theme.spacing(2)}px 0`, // Vertical spacing
    },
    link: {
    // Style for links
    },
}));

const LoginPage: React.FC = () => {
    const classes = useStyles();
    const [recaptchaValue, setRecaptchaValue] = useState<string | null>(null);

    const handleRecaptchaChange = (value: string | null) => {
        setRecaptchaValue(value);
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
    // Implement form submission logic
    };

    return (
        <div className={classes.container}>
            <Header />
            <Card className={classes.card}>
                <form onSubmit={handleSubmit}>
                    <Typography variant="h4" className={classes.title}>
            Log in
                    </Typography>
                    <TextField
                        className={classes.textField}
                        label="Email address"
                        type="email"
                        fullWidth
                        required
                        autoFocus
                        margin="normal"
                        variant="outlined"
                    />
                    <TextField
                        className={classes.textField}
                        label="Password"
                        type="password"
                        fullWidth
                        required
                        margin="normal"
                        variant="outlined"
                    />
                    <ReCAPTCHA
                        className={classes.recaptcha}
                        sitekey="6LfJMTIUAAAAAGb6Z-ozu_yC3PpL_sJjb8cGN7On" // Replace with your actual site key
                        onChange={handleRecaptchaChange}
                        style={{ margin: '8px 0' }}
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submitButton}
                        disabled={!recaptchaValue}
                    >
                        Sign in
                        <i className="material-icons right">exit_to_app</i>
                    </Button>
                </form>
                <Grid container className={classes.linksContainer}>
                    <Grid item xs={6}>
                        <Link href="#" variant="body2" className={classes.link}>
              Forgot password?
                        </Link>
                    </Grid>
                    <Grid item xs={6} style={{ textAlign: 'right' }}>
                        <Typography variant="body2" className={classes.link}>
              New User? <Link href="#">Sign up</Link>
                        </Typography>
                    </Grid>
                </Grid>
            </Card>
            <Footer />
        </div>
    );
};

export default LoginPage;
