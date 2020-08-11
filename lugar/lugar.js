const axios = require("axios").default;

// data
const apiKey = "558103493886823759701x7026";

const getLugarLatLng = async (direccion) => {
  const encodeUrl = encodeURI(direccion);

  /* axios
    .get(
      `https://geocode.xyz/?locate=location?city=${encodeUrl}&auth=${apiKey}&json=1`
    )
    .then(function (response) {
      console.log(response.data);
    })
    .catch(function (error) {
      console.log(error);
    }); */

  try {
    const resp = await axios.get(
      `https://geocode.xyz/?locate=location?city=${encodeUrl}&auth=${apiKey}&json=1`
    );

    if (resp.data.matches === null) {
      throw new Error(`No hay resultados para: ${direccion}`);
    }

    const data = resp.data;
    const direccion = data.standard.addresst;
    const lat = data.latt;
    const lgn = data.longt;

    return {
      direccion,
      lat,
      lgn,
    };
  } catch (Err) {
    console.log("Error!!!!", Err);
  }
};

module.exports = {
  getLugarLatLng,
};
