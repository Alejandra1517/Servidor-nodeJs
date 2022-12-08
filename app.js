require('dotenv').config() //dotenv para configurar las variables de entorno alojadas en el archivo .env


const Server = require('./src/server'); // importar la clase server para utilizar sus metodos 

const server = new Server(); // crea un objeto de la clase server 

server.listen(); // Llama al metodo listen de la clase server 