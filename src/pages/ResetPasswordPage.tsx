import React, { useState } from 'react';
import { TextField, Button, Card, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Header from '../components/Header';
import Footer from '../components/Footer';
import axios from 'axios';
import Snackbar from '../components/Snackbar';
import { resetPassword } from '../apis/AuthService';
import { useNavigate, useParams } from 'react-router-dom';

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

// Component for resetting the password
const ResetPasswordPage: React.FC = () => {
    const classes = useStyles();
    const {token} = useParams<{token: string}>();
    const [newPassword, setNewPassword] = useState<string>('');
    const [confirmPassword, setConfirmPassword] = useState<string>('');
    const [message, setMessage] = useState<string>('');
    const [messageType, setMessageType] = useState<'success' | 'error'>('success');
    const [openSnackbar, setOpenSnackbar] = useState<boolean>(false);

    const navigate = useNavigate();

    // Handle new password change
    const handleNewPasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setNewPassword(event.target.value);
    };

    // Handle confirm password change
    const handleConfirmPasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setConfirmPassword(event.target.value);
    };

    // Handle form submission
    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (!token){
            setMessageType('error');
            setMessage('This link is expired!');
            setOpenSnackbar(true);
            return;
        }

        if (newPassword !== confirmPassword) {
            setMessageType('error');
            setMessage('Passwords do not match.');
            setOpenSnackbar(true);
            return;
        }
        try {

            await resetPassword({password: newPassword },token).then(() => {
                navigate('/login');
            });
            setMessageType('success');
            setMessage('Password has been reset successfully.');
            setOpenSnackbar(true);

        } catch (error) {
            console.error('Password reset failed:', error);
            setMessageType('error');
            if (axios.isAxiosError(error)) {
                if (error.response && error.response.data && error.response.data.message) {
                    setMessage(error.response.data.message);
                } else {
                    setMessage('An unexpected error occurred. Please try again.');
                }
            } else {
                // Handle non-Axios errors
                setMessage('An error occurred. Please try again.');
            }
            setOpenSnackbar(true);
        }
    };

    // Close Snackbar
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
                            Reset Password
                        </Typography>
                        <TextField
                            label="New Password"
                            type="password"
                            fullWidth
                            required
                            margin="normal"
                            variant="outlined"
                            value={newPassword}
                            onChange={handleNewPasswordChange}
                        />
                        <TextField
                            label="Confirm New Password"
                            type="password"
                            fullWidth
                            required
                            margin="normal"
                            variant="outlined"
                            value={confirmPassword}
                            onChange={handleConfirmPasswordChange}
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submitButton}
                        >
                            Submit
                        </Button>
                    </form>
                </Card>
            </div>
            <Footer />
        </>
    );
};

export default ResetPasswordPage;
