import axios from 'axios';

const baseURL = process.env.NODE_ENV === "production" ? "api/v1/employees" : "http://localhost:3002/api/v1/employees";

export default axios.create({
    baseURL,
});
