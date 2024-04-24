import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';

// Define the type for Snackbar's props
interface SnackbarProps {
    message: string;          // The message content to display
    open: boolean;            // Control the visibility of the Snackbar
    duration?: number;        // The duration for which the message is displayed, default is 3000
    onClose: () => void;      // Callback function to close the Snackbar
}

// Snackbar component implementation
const Snackbar: React.FC<SnackbarProps> = ({ message, open, duration = 3000, onClose }) => {
    useEffect(() => {
        if (open) {
            const timer = setTimeout(() => {
                onClose();  // Automatically call onClose to close the Snackbar
            }, duration);
            return () => clearTimeout(timer);  // Clear the timer
        }
    }, [open, duration, onClose]);  // Dependency list

    if (!open) return null;  // Do not render anything if not open

    return ReactDOM.createPortal(
        <div style={snackbarStyle}>
            {message}
        </div>,
        document.body  // Append the Snackbar to the body element
    );
};

// Basic style for the Snackbar
const snackbarStyle: React.CSSProperties = {
    position: 'fixed',
    bottom: '20px',
    right: '20px',
    backgroundColor: '#323232',
    color: 'white',
    padding: '16px',
    borderRadius: '4px',
    boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.1)',
    zIndex: 1000,
    maxWidth: '300px',
    textAlign: 'center'
};

export default Snackbar;
