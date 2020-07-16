const { get } = require('axios')
const URL = 'https://pokeapi.co/api/v2/pokemon'

async function obterPokemon() {
    const url = `${URL}`
    const response = await get(url);
    return response.data
}


async function paginacao(pagina) {
    const url = `${URL}?limit=${pagina}`
    const response = await get(url);
    return response.data
}
// testando a API...
// obterPokemon('a').then(function (resultado) {
//     console.log('resultado', resultado.results)

// }).catch(function (error) {
//     console.log('Deu ruim', error)
// })
async function main() {
    const resultado = await paginacao(2)
    let names = []
      let pokemon =  resultado.results

    for (let i in resultado.results.length) {
        let pokemon = resultado.results[i]
        console.log(pokemon)
            // names.push(pokemon.name)
        
    }
    console.log(names)


}
main()
module.exports = {
    obterPokemon
}