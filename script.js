const pokemons = [
  { nome: 'Bulbasaur', tipo: 'grama', vida: 40 },
  { nome: 'Bellsprout', tipo: 'grama', vida: 20 },
  { nome: 'Charmander', tipo: 'fogo', vida: 35 },
  { nome: 'Vulpix', tipo: 'fogo', vida: 25 },
  { nome: 'Squirtle', tipo: 'água', vida: 45 },
  { nome: 'Psyduck', tipo: 'água', vida: 25 },
]
const picathu = (pokemon) =>{
  const resposta = {
    nome: pokemon.nome,
    tipo: pokemon.tipo,
    vida: 100
  }
  return resposta
}

const pokemonsVidaCheia = pokemons.map(picathu)
console.log(pokemonsVidaCheia)

const pokemonDeFogo = pokemons.filter((pokemon)=>{
  return pokemon.tipo === 'fogo'
})
console.log(pokemonDeFogo)






const numeros = [1,2,3,4,5,6,7,8,9,10]

const multipliPor3 = (array) =>{
  const resposta = []
  for (const numero of array) {
    resposta.push(numero*3)    
  }
  return resposta
}

const topSpace = numeros.map( (numero,index,array) => {
  return numero * 3
  // console.log(numero)
  // console.log(index)
  // console.log(array)
})
// console.log(topSpace)

const retornarPares = (array) =>{ //parametro
  const resposta = []
  for (const numero of array) {
    if(numero % 2 === 0){
      resposta.push(numero)
    }
    // numero %2===0 ? resposta.push(numero) : a
  }
  return resposta
}

// 

const topSpaceNew = numeros.filter((item) =>{
  return item % 2 === 0
})
// console.log(topSpaceNew)
// filter e uma função que recebe uma funcao
// const topSpaceNew = numeros.filter(function(item){
//   return item % 2 === 0
// })
// console.log(topSpaceNew)



// multipliPor3(numeros)

// console.log(multipliPor3(numeros))//argumento

// console.log(retornarPares(numeros))

// parametro === argumento
const funcaoComplexa = (array,funcaoCallback) =>{
const resposta = funcaoCallback(array)
// console.log(resposta)
}

funcaoComplexa(numeros,multipliPor3)
funcaoComplexa(numeros,retornarPares)
// A gente precisa entender >>   CALLBACK>> liga de volta 
// para usar funcoes de array
