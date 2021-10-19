const personas = [
    new Persona("Daniel", "Ojeda"),
    new Persona("John", "Carpenter"),
];

function mostrarPersonas() {
    //recuperamos los objetos de tipo personas
    let texto = "";
    //recorremos el array de personas
    for (let persona of personas) {
        //los agregamos a la variable texto
        texto += `<li>${persona.nombre} ${persona.apellido}</li>`;
    }
    //depositamos el contenido de la variable texto en el elemento del html
    document.getElementById("personas").innerHTML = texto;
}

//Esta funcion se encargara de agregar personas nuevas a la lista
function agregarPersona() {
    //conectamos el html form con el objeto forms
    const forma = document.forms["forma"];

    //del mismo obtenemos el atributo del nombre
    const nombre = forma["nombre"];

    //y tambien del apellido
    const apellido = forma["apellido"];

    //validamos cadenas vacias
    if (nombre.value != "" && nombre.value != "") {
        //creamos un objeto de la clase persona y le pasamos los atributos a la clase persona
        const persona = new Persona(nombre.value, apellido.value);

        console.log(persona);

        //agregamos la constante persona en el arreglo
        personas.push(persona);

        //llamamos a llamar a la funcion de mostrarPersonas
        mostrarPersonas();
    } else {
        alert("No hay informacion");
    }
}