import React, { useState } from 'react';
import { TextField, Button, Card, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { requestResetLink } from '../apis/authService1';
import axios from 'axios';
import Snackbar from '../components/Snackbar';

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
        margin: theme.spacing(6, 2),
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
    }
}));

const ForgetPasswordPage: React.FC = () => {
    const classes = useStyles();
    const [email, setEmail] = useState<string>('');
    const [message, setMessage] = useState<string>('');
    const [messageType, setMessageType] = useState<'success' | 'error'>('success');
    const [openSnackbar, setOpenSnackbar] = useState<boolean>(false);

    const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value);
    };

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setMessage('');  // Clear any previous messages
        try {
            await requestResetLink(email);
            setMessageType('success');
            setMessage('Reset link sent successfully. Please check your email.');
            setOpenSnackbar(true);
            setEmail('');  // Clear the email field after successful submission
        } catch (error) {
            console.error('Send reset link failed:', error);
            setMessageType('error');
            if (axios.isAxiosError(error)) {
                setMessage(error.response?.data.message || 'An unexpected error occurred. Please try again.');
            } else {
                setMessage('An error occurred. Please try again.');
            }
            setOpenSnackbar(true);
        }
    };

    const handleCloseSnackbar = () => {
        setOpenSnackbar(false);
    };

    return (
        <>
            <Header />
            <div className={classes.container}>
                <Snackbar
                    open={openSnackbar}
                    onClose={handleCloseSnackbar}
                    message={message}
                    type={messageType}
                />
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
