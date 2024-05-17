// import https from 'https'
import { getKeyValue, TOKEN_DICTIONARY } from './storage.service.js'
import axios from 'axios';

const BASE_URL = 'api.openweathermap.org'
const getWeather = async (city) => {
    const token = await getKeyValue(TOKEN_DICTIONARY.token)
    const url = `https://${BASE_URL}/data/2.5/weather`

    if (!token) {
        throw new Error('Not set api key. Set api key using -t [API_KEY]')
    }
    const {data} = await axios.get(url, {
        params: {
            q: city,
            appid: token,
            lang: 'ru',
            units: 'metric'
        }
    })
    return data;
}

export { getWeather }