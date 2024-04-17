const BACKEND_BASE_URL =
  process.env.NODE_ENV === 'production'
      ? 'https://your-production-backend-url.com'
      : process.env.REACT_APP_BACKEND_URL;
      
export { BACKEND_BASE_URL };