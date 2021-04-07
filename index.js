require('dotenv').config();

const { inquirerMenu, pausa, leerInput, listarLugares } = require("./helpers/inquirer");
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
                const termino = await leerInput('Ciudad: ');                
                // Buscamos los lugares
                const lugares = await busquedas.ciudad(termino);                
                // Seleccionar el lugar
                const id = await listarLugares(lugares);   
                const lugarSel = lugares.find( l => l.id === id);             
                // Clima

                // Mostrar resultados
                console.log('\n Información de la ciudad\n'.green);
                console.log("Ciudad: ", lugarSel.nombre);
				console.log("Lat: ", lugarSel.lat);
                console.log("Lng: ", lugarSel.lng);
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
