import axios from 'axios'


let instance = axios.create({
    baseURL: `http://api.openweathermap.org/data/2.5/weather?id=4254985&appid=${process.env.REACT_APP_OPEN_WEATHER_KEY}&units=imperial`
})

export default instance