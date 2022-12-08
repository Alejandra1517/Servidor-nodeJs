const express = require('express') //importa express para utilizar sus modulos

const cors = require ('cors')//CORS es necesario para compartir recursos en distintos dominios

class Server{

    constructor(){ //Los siguientes modulos van a estar inicializados desde el contructor ya que el constructor es el primer metodo que se ejecuta de una clase


        this.app = express(); //Ejecuta express y lo guarda en una constante

        this.middlewares(); //Llama al metodo middlewares de express

        this.route(); //Llama al metodo route de express
    
    }

    middlewares(){
        this.app.use(cors())

        this.app.use(express.static('public')) //static de Express. Express busca los archivos al directorio estático, por lo que el nombre del directorio estático no forma parte del URL.
    }

    route(){
        
        this.app.get('/api', (req, res) => {
            res.send({
                "ok" : 200,
                "msg" : "petición por get"
            })
        })
        this.app.post('/api', (req, res) =>{
            res.send('hola peticion post')
        })

        this.app.put('/api', (req, res) =>{
            res.send('hola peticion put')
        })

        this.app.delete('/api', (req, res) =>{
            res.send('hola peticion delete')
        })
        
    }
    listen(){
        this.app.listen(process.env.PORT, ()=>{
            console.log("servidor corriendo en: http://localhost:"+process.env.PORT)
        })
    }
}


module.exports = Server;