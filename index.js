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
                const climaLugar = await busquedas.climaLugar(
									lugarSel.lat,
									lugarSel.lng,
								);
                // Mostrar resultados
                console.log('\n Información de la ciudad\n'.green);
                console.log("Ciudad: ", lugarSel.nombre.green);
				console.log("Lat: ", lugarSel.lat);
                console.log("Lng: ", lugarSel.lng);
                console.log("Temperatura: ",climaLugar.temp);
                console.log("Mínima: ",climaLugar.min);
                console.log("Máxima: ",climaLugar.max);
				console.log("¿Cómo está el tiempo?: ",climaLugar.desc.green);
				break;
			case 2: // Mostrar Historial
				console.log("Mostrar Historial");
				break;
		}
		if (opt !== 0) await pausa();                   
	} while (opt !== 0);
};

main();
