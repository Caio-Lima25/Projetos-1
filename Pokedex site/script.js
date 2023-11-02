var formulario = document.querySelector('form')

formulario.addEventListener('submit', function(e){

// Bloqueia o refresh da página
  e.preventDefault()

  // Url dod dados dos pokémons
let urlform = "https://pokeapi.co/api/v2/pokemon/"

// Valor do input name
let nome = document.getElementById("name")

// Concatena a url com o input name
urlform = urlform + this.name.value

// Transforma os valores em minúsculo
urlform = urlform.toLocaleLowerCase()

// Id content
let resposta = document.getElementById('content')

// Id imgPokemon
let imagem = document.getElementById('imgPokemon')

// Resposta em HTML
let html = ''

fetch(urlform)
.then(resposta => resposta.json())
.then(function(data){
  console.log(data)
  html = 'Name: ' + maiuscula(data.name) + '<br>'
  html =  html + 'Type: ' + maiuscula(data.types[0].type.name)
  resposta.innerHTML = html

imagem.innerHTML = "<img src='" + data.sprites.front_default + "'><img src='" + data.sprites.back_default + "'>"

})
.catch(function(err){
  if(err = 'SyntaxError: Unexpected token N, "Not Found" is not valid JSON'){
    html = 'Pokémon não encontrado! 😥'
  } else {
    html = err 
  }
  resposta.innerHTML = html
})

});

function maiuscula(val){
  return val[0].toLocaleUpperCase() + val.substr(1)
}