const axios = require('axios');


const getLugarLatLng = async(dir) => {
    const encodedUlr = encodeURI(dir);

    const instance = axios.create({
        baseURL: `https://geocode.xyz?locate=${encodedUlr}&auth=105874568594941241049x127536&json=1`
    });

    const resp = await instance.get();

    if (resp.data.error !== undefined) {
        throw new Error(`Error al buscar lugares para ${dir}. El error es '${resp.error.description}'`);
    }

    const data = resp.data;
    const direccion = data.standard.city;
    const lat = data.latt;
    const lng = data.longt;

    return {
        direccion,
        lat,
        lng
    }

}


module.exports = {
    getLugarLatLng
}