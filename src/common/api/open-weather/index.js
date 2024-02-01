import axios from "axios";
import {API_WEATHER} from "@/common/const/api.js";

const openWeatherAxiosInstance = axios.create({
    baseURL: API_WEATHER.URL,
    headers: {
        'Content-Type': 'application/json',
    }

})

const chatGptAxiosInstance = axios.create({
    baseURL: API_WEATHER.URL,
    headers: {
        'Content-Type': 'application/json',
    }

})

export default {
    openWeatherAxiosInstance,
    chatGptAxiosInstance
}