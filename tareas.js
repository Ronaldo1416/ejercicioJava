const fs = require ("fs")
let archivoTareas = {
  archivo: "tareas.json",
  leerJSON: function () {
      return JSON.parse (fs.readFileSync(this.archivo, 'utf-8'));
  },
  
   escribirJSON: function (tareas) {
      fs.writeFileSync(this.archivo, JSON.stringify(tareas, null, ' '));
  },
   
     guardarTarea(tarea1) {
      let tareas = this.leerJSON();
      tareas.push(tarea1);
      this.escribirJSON(tareas);
  },
 
}

module.exports = archivoTareas;