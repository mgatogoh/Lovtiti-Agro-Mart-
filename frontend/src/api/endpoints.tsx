import {BASE_URL} from "./url.ts";
import axios from 'axios'

axios.defaults.withCredentials = true;

export const api = axios.create({
    baseURL: BASE_URL,
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
    },
    withCredentials: true
})

export const ENDPOINTS : Record<string, string> = {
    LOGIN: "login",
    LOGOUT: "logout",
    WHOAMI: "whoami",
}
