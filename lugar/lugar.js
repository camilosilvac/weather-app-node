const axios = require('axios');

const getLugatLatLng = async(direccion) => {

    let encodeUrl = encodeURI(direccion);

     let resp = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${ encodeUrl }&key=AIzaSyDlcKliqNbaI8b-j0srapU7JQebWQiuTco`);

    if (resp.data.status === "ZERO_RESULTS") {
        throw new Error(`No hay resultado para la ciudad ${ direccion }`);
    }

    let location = resp.data.results[0];
    let coords = location.geometry.location;

    return {
        direccion: location.formatted_address,
        lat: coords.lat,
        lng: coords.lng
    }



}


module.exports = {
    getLugatLatLng
}