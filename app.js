const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Dirección de la ciudad para obtener el clima',
        demand: true
    }
}).argv;

//argv.direccion
//lugar.getLugarLatLng(argv.direccion)
//    .then(console.log);

// clima.getClima(40.68908, -73.95861)
//     .then(console.log)
//     .catch(console.log);


const getInfo = async(direccion) => {

    try {
        const lugarInfo = await lugar.getLugarLatLng(direccion);
        const climaInfo = await clima.getClima(lugarInfo.lat, lugarInfo.lng);
        return `El clima de ${direccion} es de ${climaInfo}°C.`;
    } catch (e) {
        `No se pudo determinar el clima de ${direccion}.`;
    }
}

getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log);