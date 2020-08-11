const axios = require("axios").default;

const appId = "b4e0bf450f3f4ebbed755c74e65a576a";

const getClima = async (lat, lgn) => {
  try {
    const resp = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lgn}&appid=${appId}&units=metric`
    );

    return resp.data.main.temp;
  } catch (error) {
    console.log("Error clima !!", error);
  }
};

module.exports = {
  getClima,
};
