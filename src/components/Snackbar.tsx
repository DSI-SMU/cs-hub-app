import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';

// Define the type for Snackbar's props
interface SnackbarProps {
    message: string;            // The content of the message to display
    open: boolean;              // Controls the visibility of the Snackbar
    duration?: number;          // Duration for which the message is displayed, default is 3000
    onClose: () => void;        // Callback function to close the Snackbar
    type?: 'success' | 'error';
}

// Implementation of the Snackbar component
const Snackbar: React.FC<SnackbarProps> = ({
    message,
    open,
    duration = 3000,
    onClose,
    type = 'success'
}) => {
    useEffect(() => {
        if (open) {
            const timer = setTimeout(onClose, duration);  // Set timeout to close the Snackbar
            return () => clearTimeout(timer);
        }
    }, [open, duration, onClose]);

    if (!open) return null;  // Return null to not render anything if the Snackbar is not open

    const backgroundColor = type === 'success' ? '#43a047' : '#d32f2f';

    // Merge provided styles with default styles
    const finalStyle = { ...snackbarStyle, backgroundColor };

    return ReactDOM.createPortal(
        <div style={finalStyle}>
            {message}
        </div>,
        document.body  // Render the component at the body level using React portal
    );
};

// Styles for the Snackbar, set to appear at the top and centered horizontally
const snackbarStyle: React.CSSProperties = {
    position: 'fixed',
    top: '70px',  // Set to 20px from the top of the viewport
    left: '50%',  // Center horizontally
    transform: 'translateX(-50%)', // Adjust position to ensure it's centered
    backgroundColor: '#323232',  // Dark background color for visibility
    color: 'white',  // Text color
    padding: '10px 20px',  // Padding around the text
    borderRadius: '4px',  // Rounded corners
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',  // Subtle shadow
    zIndex: 1000,  // High z-index to ensure it's above other content
    textAlign: 'center',  // Ensure the text is centered
    width: 'auto',  // Auto width to adjust based on the content
    maxWidth: '90%',  // Maximum width to prevent it from being too wide
};

export default Snackbar;
