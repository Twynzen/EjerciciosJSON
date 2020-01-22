var persona = {

  "nombre":"Daniel",
  "apellido": "Castiblanco",
  "edad": 22,
  "nickname": "Twinzen"

/*  saludo: function () {
    return 'hola soy Daniel'
  }
*/
};

var personas = [
  {nombre: "Daniel", nickname:"Twinzen"},
  {nombre: "Manue",   nickname:"Manuelito"},
  {nombre: "Elpro", nickname:"Pucio"},
  {nombre: "Benito",   nickname:"Camelo"}
];

var salida = '';
for(var i=0; i < personas.length; i++){
  salida += '<li>'+ personas[i].nombre + '</li>';
}
//esta es el proceso para crear elementos
//elemento var = documento .createElement ( tagName [, opciones ]);
 var newDiv = document.createElement("div");
 var newContent = document.createTextNode("personas")[0];
 newDiv.appendChild(newContent);

 var currentDiv = document.getElementById("div1");
 document.body.insertBefore(newDiv, currentDiv);


console.log(personas[0].nickname);
