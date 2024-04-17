// LoginPage.tsx
import React, { useState } from 'react';
import { TextField, Button, Card, Typography, Grid, Link } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import ReCAPTCHA from 'react-google-recaptcha';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { login } from '../apis/authService';
import { useNavigate } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    container: {
        display: 'flex',
        flexDirection: 'column',
        minHeight: 'calc(100vh - 128px)', // Full view height
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

const LoginPage: React.FC = () => {
    const classes = useStyles();
    const [recaptchaValue, setRecaptchaValue] = useState<string | null>(null);

    const handleRecaptchaChange = (value: string | null) => {
        setRecaptchaValue(value);
    };

    // ...[rest of your state and useStyles]
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();


    // Update the input fields state
    const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUsername(event.target.value);
    };

    const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
    };

    // Updated handleSubmit function
    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        try {
            const token = await login({ username, password }).then(() => {
                navigate('/');
            });
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
            Log in
                        </Typography>
                        <TextField
                            label="Username"
                            type="text"
                            fullWidth
                            required
                            autoFocus
                            margin="normal"
                            variant="outlined"
                            onChange={handleUsernameChange}
                        />
                        <TextField
                            label="Password"
                            type="password"
                            fullWidth
                            required
                            margin="normal"
                            variant="outlined"
                            onChange={handlePasswordChange}
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
                        </Button>
                    </form>
                    <Grid container className={classes.linksContainer}>
                        <Grid item xs={6}>
                            <Link href="/password" variant="body2" className={classes.link}>
              Forgot password?
                            </Link>
                        </Grid>
                        <Grid item xs={6} style={{ textAlign: 'right' }}>
                            <Typography variant="body2" className={classes.link}>
              New User? <Link href="/sign-up">Sign up</Link>
                            </Typography>
                        </Grid>
                    </Grid>
                </Card>
            </div>
            <Footer />
        </>
    );
};

export default LoginPage;
