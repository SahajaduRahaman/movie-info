import axios from 'axios'

const Base_URL = 'https://api.themoviedb.org/3'
const API_KEY = 'api_key=92cf8af076d786ba4fe01ee1e4251da3'

export const RapidAPI = async(url) => {
    
    const {data} = await axios.get(`${Base_URL}/movie/${url}?${API_KEY}`)

    return data;
}
export const RapidAPISearch = async(url) => {
    
    const {data} = await axios.get(`${Base_URL}/search/movie?${API_KEY}&query=${url}`)

    return data;
}
