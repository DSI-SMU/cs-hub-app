import axios from 'axios';
import { BACKEND_BASE_URL } from '../config';

const BASE_API_URL: string | undefined = BACKEND_BASE_URL + '/api/';

// Define the structure of the login payload
interface LoginPayload {
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
