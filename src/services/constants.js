import axios from "axios"
const BASE_URL = 'https://api.adviceslip.com/advice'
// const API_URL = ''
const SEARCH_URL = "https://api.adviceslip.com/advice/search/"


export async function randomAdvice() {
    const response = await axios.get(`${BASE_URL}`)
    return response
}

export async function adviceSearch(inputValue) {
    const response = await axios.get(`${SEARCH_URL}${inputValue}`)
    return response;
}