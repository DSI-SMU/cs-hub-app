// SignUpPage.tsx
import React, { useState } from 'react';
import { TextField, Button, Card, Typography, Grid, Link } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import ReCAPTCHA from 'react-google-recaptcha';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { signUp } from '../apis/authService';

const useStyles = makeStyles((theme) => ({
    container: {
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh', // Full view height
        backgroundColor: '#E1F5FE', // Light blue background color
        paddingTop: '64px',
        paddingBottom: '64px',
    },
    card: {
        maxWidth: 450, // Allows the card to be a bit wider
        margin: theme.spacing(6, 2), // Top and Bottom margin
        padding: theme.spacing(4),
        alignSelf: 'center', // Center the card
        width: '100%',
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
    recaptcha: {
        display: 'flex',
        justifyContent: 'center', // Center reCAPTCHA horizontally
        margin: `${theme.spacing(2)}px 0`, // Vertical spacing
    },
    link: {
    // Style for links
    },
}));

const SignUpPage: React.FC = () => {
    const classes = useStyles();
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [recaptchaValue, setRecaptchaValue] = useState<string | null>(null);

    const handleRecaptchaChange = (value: string | null) => {
        setRecaptchaValue(value);
    };

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const finalUsername = username || email; // If username is not provided, use email

        // Here, you would send the data to the server
        console.log({ name, email, username: finalUsername, password });

        try {
            const token = await signUp({ name, username: finalUsername, email, password });
            console.log(token); // Handle the token as needed
            // Redirect to dashboard or another page
        } catch (error) {
            console.error('Login failed:', error);
            // Handle errors, show messages, etc.
        }
    };

    return (
        <>
            <Header />
            <div className={classes.container}>
                <Card className={classes.card}>
                    <form onSubmit={handleSubmit}>
                        <Typography variant="h4" className={classes.title}>
                            Sign Up
                        </Typography>
                        <TextField
                            label="Name"
                            type="text"
                            fullWidth
                            required
                            autoFocus
                            margin="normal"
                            variant="outlined"
                            onChange={e => setName(e.target.value)}
                        />
                        <TextField
                            label="Email Address"
                            type="email"
                            fullWidth
                            required
                            margin="normal"
                            variant="outlined"
                            onChange={e => setEmail(e.target.value)}
                        />
                        <TextField
                            label="Username"
                            type="text"
                            fullWidth
                            margin="normal"
                            variant="outlined"
                            onChange={e => setUsername(e.target.value)}
                        />
                        <TextField
                            label="Password"
                            type="password"
                            fullWidth
                            required
                            margin="normal"
                            variant="outlined"
                            onChange={e => setPassword(e.target.value)}
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
                            Sign Up
                        </Button>
                    </form>
                    <Grid container className={classes.linksContainer}>
                        <Grid item xs={12} style={{ textAlign: 'center' }}>
                            <Typography variant="body2" className={classes.link}>
                Already have an account? <Link href="/login">Log in</Link>
                            </Typography>
                        </Grid>
                    </Grid>
                </Card>
            </div>
            <Footer />
        </>
    );
};

export default SignUpPage;
