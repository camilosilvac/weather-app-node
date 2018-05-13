const axios = require('axios');

const getClima = async(lat, lng) => {

    let resp = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=14cda37ae74aee11caf8898b301192aa`);

    return resp.data.main.temp;

}

module.exports = {
    getClima
}