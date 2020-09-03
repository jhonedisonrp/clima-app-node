const axios = require('axios');


const getClima = async(lat, lng) => {

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${ lat }&lon=${ lng }&appid=425a5d72d5f03323e2b229f89789a6ac&units=metric`);

    return resp.data.main.temp;

}


module.exports = {
    getClima
}