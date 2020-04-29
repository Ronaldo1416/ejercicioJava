const archivoTareas = require ("./tareas");
let accion = process.argv [2];


let tareas = []

switch(accion) {
   case 'listar':
        console.log("--------------------------------");    
        console.log('------Listado de tareas---------');
        console.log('---------------------------------');

           tareas = archivoTareas.leerJSON();
   
           tareas.forEach((tarea1, index) => {
        console.log((index + 1) + '. ' + tarea1.titulo + ' -- ' + tarea1.estado);
    });
    
        
        break;

    case "entrar":
        console.log("----------------------------");    
        console.log('-----Nueva tarea creada-----');
        console.log('----------------------------');
      
            let titulo = process.argv[3];
            let tarea1 = {
               titulo: titulo,
               estado: 'pendiente'
          }
      
            archivoTareas.guardarTarea(tarea1);
      
        console.log(tarea1.titulo + ' -> ' + tarea1.estado);
        console.log("------------------------");    
        console.log('----Tarea Ingesada-------');
        console.log('-------------------------');
        break;   
    
    case 'filtrar':

        let estados = process.argv[3];

        console.log('----------Tareas ' + estados +"-----------");
        console.log('--------------------------------------------');
        
      
            tareas = archivoTareas.leerJSON();     
       
            let tareasFiltradas = tareas.filter(tarea1 => tarea1.estado == estados);
            
                          
        console.log (tareasFiltradas);
        break;
    
    case undefined:
        
        console.log ('----Tenés que pasarme una acción-------------------------');
        console.log ('Nueva tarea--- Entar y la tarea ---Para verlas---- listar');
        console.log ('Para su Estado = filtrar y a)pendiente b) en progreso c) terminada');
      
        break;

    default:
        console.log('No entiendo qué me estás pidiendo');
        console.log('Las acciones disponibles son: listar, entrar , filtrar, ');
       break;
}
