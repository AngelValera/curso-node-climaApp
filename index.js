require('dotenv').config();

const { inquirerMenu, pausa, leerInput } = require("./helpers/inquirer");
const Busquedas = require("./models/busquedas");

const main = async () => {
	
    const busquedas = new Busquedas();
    let opt;
	do {
		// Impresión del menú
		opt = await inquirerMenu();
		switch (opt) {
			case 1: // Buscar ciudad
                //Mostrar mensaje
                const lugar = await leerInput('Ciudad: ');
                //console.log(lugar);
                // Buscamos los lugares
                busquedas.ciudad(lugar);
                // Seleccionar el lugar

                // Clima

                // Mostrar resultados
                console.log('\n Información de la ciudad\n'.green);
                console.log("Ciudad: ");
				console.log("Lat: ");
                console.log("Lng: ");
                console.log("Temperatura: ");
                console.log("Mínima: ");
                console.log("Máxima: ");
				break;
			case 2: // Mostrar Historial
				console.log("Mostrar Historial");
				break;
		}
		if (opt !== 0) await pausa();                   
	} while (opt !== 0);
};

main();
