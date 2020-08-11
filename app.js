const { argv } = require("./config/yargs");
const { getLugarLatLng } = require("./lugar/lugar");
const { getClima } = require("./clima/clima");

// getLugarLatLng(argv.direccion).then(console.log);
// getClima(10.10084, -67.66683);

const getInfo = async (direccion) => {
  try {
    const coords = await getLugarLatLng(direccion);
    const clima = await getClima(coords.lat, coords.lgn);

    return `El clima de ${direccion} es de ${clima}`;
  } catch (error) {
    return `No se pudo determinar el clima de ${direccion}`;
  }
};

getInfo(argv.direccion).then(console.log).catch(console.log);
