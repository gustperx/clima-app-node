const argv = require("yargs")
  .options({
    direccion: {
      alias: "d",
      demand: true,
      desc: "Direccion de la ciudad para obtener el clima",
    },
  })
  .help().argv;

module.exports = {
  argv,
};
