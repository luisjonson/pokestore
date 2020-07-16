const axios = require('axios')
const URL = 'https://pokeapi.co/api/v2/pokemon'



async function paginacao() {
    const url = `${URL}?limit=8`
    const response = await axios.get(url);
    return response.data

}

// paginacao().then((resultado) => {
//     const names = []
//     for (let i in resultado.results) {
//         const poke = resultado.results[i]

//         names.push(poke.name)
//         console.log('Resultado', `${i} nomes: ${poke.name}`)
//     }


// })

async function listItems(items, pageAtual,limitItems){
    let result = await paginacao.results;
    console.log(result)
    return result;
    

}
listItems();