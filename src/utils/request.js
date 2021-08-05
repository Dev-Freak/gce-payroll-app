import axios from "axios";

const baseURL = window.location.href.includes("localhost") ? "http://localhost:7000" : "https://gce-payroll-service.herokuapp.com";

export const serverGET = (url) => axios.get(`${baseURL}/${url}`);
export const serverPOST = (url, body) => axios.post(`${baseURL}/${url}`, body);