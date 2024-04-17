import axios from 'axios';
import { BACKEND_BASE_URL } from '../config';

const BASE_API_URL: string | undefined = BACKEND_BASE_URL + '/auth/';

// Define the structure of the login payload
interface LoginPayload {
    username: string;
    password: string;
}

interface SignUpPayload {
    name: string;
    username: string;
    email: string;
    password: string;
}

// The function to call the login API endpoint
export const login = async (payload: LoginPayload) => {
    
    return axios
        .post(BASE_API_URL + 'login', payload)
        .then((response) => {
            // alert(JSON.stringify(response.data)); // for debugging purposes
            if (response.data.user) {
                // console.log(response.data.token);
                localStorage.setItem('user', JSON.stringify(response.data.user));
                // jsonwebtoken saved to storage for auth at login :)
                localStorage.setItem('token', response.data.token);
            }
            return response.data;
        });
    
};

export const signUp = async (payload: SignUpPayload) => {

    return axios
        .post(BASE_API_URL + 'register', payload)
        .then((response) => {
            // alert(JSON.stringify(response.data)); // for debugging purposes
            if (response.data.user) {
                // console.log(response.data.token);
                localStorage.setItem('user', JSON.stringify(response.data.user));
                // jsonwebtoken saved to storage for auth at login :)
                localStorage.setItem('token', response.data.token);
            }
            return response.data;
        });

};