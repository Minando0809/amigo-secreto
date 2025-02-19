// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos =[];

function agregarAmigo(){
    const inputAmigo = document.getElementById('amigo');
    const nombreAmigo = inputAmigo.value.trim();


   if(nombre === ""){
      alert("por favor, inserte un nombre.");
      return;

    }

   if (amigos.includes(nombreAmigo)){
         alert(`El nombre ${nombreAmigo} ya esta en la lista`);
        return;
    }


   amigos.push(nombreAmigo);


   inputAmigo.Value = "";


   actualizarLista();


}


