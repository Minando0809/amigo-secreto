// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

const  amigos =[];

function agregarAmigo(){
    const inputAmigo = document.getElementById('amigo');
    const nombreAmigo = inputAmigo.value.trim();


   if(nombreAmigo === ""){
      alert("por favor, inserte los nombres.");
      return;

    }

   if (amigos.includes(nombreAmigo)){
       alert(`El nombre "${nombreAmigo}" ya esta en la lista`);
      return;
    }


   amigos.push(nombreAmigo);


   inputAmigo.Value = "";


   actualizarLista();


}


function actualizarLista(){
  const listaAmigos = document.getElementById('listaAmigos');

  listaAmigos.innerHTML = "";

  amigos.forEach(amigo => { // Use forEach for better readability
    const li = document.createElement('li');
    li.textContent = amigo; // Set the text content
    listaAmigos.appendChild(li); // Append the new list item
  });
    
}


function sortearAmigo() {

  if (amigos.length === 0) {
    alert("no hay nombres para realizar el sorteo. agregar nombres a la lista.");
    return;
  }

  const indiceAleatorio = Math.floor(Math.random() * amigos.length);

  const amigoSorteado = amigos[indiceAleatorio];

  const resultado = document.getElementById('resultado');

  resultado.innerHTML = `Amigo sorteado: <strong>${amigoSorteado}</strong>`;


}