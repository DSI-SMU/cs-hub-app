const BACKEND_BASE_URL =
  process.env.NODE_ENV === 'production'
      ? 'https://localhost:8080'
      : process.env.REACT_APP_BACKEND_URL;
      
export { BACKEND_BASE_URL };