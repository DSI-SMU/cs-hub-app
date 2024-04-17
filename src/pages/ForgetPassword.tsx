import React, { useState } from 'react';
import { TextField, Button, Card, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Header from '../components/Header';
import Footer from '../components/Footer';

const useStyles = makeStyles((theme) => ({
    container: {
        display: 'flex',
        flexDirection: 'column',
        minHeight: 'calc(100vh - 128px)',
        backgroundColor: '#E1F5FE',
        paddingTop: '64px',
        paddingBottom: '64px',
    },
    card: {
        maxWidth: 450,
        margin: theme.spacing(6, 2), // Top and Bottom margin
        padding: theme.spacing(4),
        alignSelf: 'center',
        width: '100%',
    },
    title: {
        textAlign: 'center',
        margin: theme.spacing(2, 0, 4),
        fontSize: theme.typography.pxToRem(24),
    },
    submitButton: {
        marginTop: theme.spacing(4),
    },
}));

const ForgetPasswordPage: React.FC = () => {
    const classes = useStyles();
    const [email, setEmail] = useState('');

    const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value);
    };

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        // Logic to handle password reset request
        console.log('Reset password link sent to:', email);
        // Show some notification or redirect user
    };

    return (
        <>
            <Header />
            <div className={classes.container}>
                <Card className={classes.card}>
                    <form onSubmit={handleSubmit}>
                        <Typography variant="h4" className={classes.title}>
                            Forgot Password
                        </Typography>
                        <TextField
                            label="Email Address"
                            type="email"
                            fullWidth
                            required
                            margin="normal"
                            variant="outlined"
                            value={email}
                            onChange={handleEmailChange}
                            autoFocus
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submitButton}
                        >
                            Send Reset Link
                        </Button>
                    </form>
                </Card>
            </div>
            <Footer />
        </>
    );
};

export default ForgetPasswordPage;
