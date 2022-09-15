/**************************************************************************** 
OBJETIVO: CONSUMIR UMA API DE FOTOS DE CACHORROS
AUTOR: ARTHUR PILOTO
DATA DE CRIAÇÃO: 14/09/2022
VERSÃO: 1.0
*****************************************************************************/

`use strict`

const searchDog = async (raca) => {
    
    // Cria uma varíavel para o endereço da API
    const url = `https://dog.ceo/api/breed/${raca}/images`
    // Cria uma variável para a resposta - fetch() = ferramente para fazer requisições
    const response = await fetch(url)

    // Cria uma variável para receber as informações do back
    const dogList = await response.json()

    return dogList.message
}

export {
    searchDog
}