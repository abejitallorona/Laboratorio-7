



function createPost(name, message, imageURL) {
    const post = document.createElement("div");
    post.className = "post";


    const title = document.createElement("h4");
    title.textContent = name;
 
    const imagen = document.createElement("img");
    imagen.src = imageURL;

    const texto = document.createElement("p");
    texto.textContent = message;


    post.appendChild(imagen);
    post.appendChild(title);
    post.appendChild(texto);
  

    return post;
}

const publicaciones = document.getElementById("publicaciones");


for (let i = 1; i <= 826; i++) {
    const imageURL = `https://rickandmortyapi.com/api/character/avatar/${i}.jpeg`;
    const name = "Character " + i; 
    const message = "Esta es mi publicación #" + i + ".  Esto es una prueba de generación de relleno por medio de funciones y ciclos."; 

    const post = createPost(name, message, imageURL);
    publicaciones.appendChild(post);
}