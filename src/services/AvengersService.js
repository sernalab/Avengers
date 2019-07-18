// Public API KEY -> 9844afe08ebb6195b6e1c1152dffba78
// Private API KEY -> 8d521f7a3a0047640e14f5fb88f99d04fac32e18
// Hash (1+privateKey+publicKey) -> 5ae46823c1dfd7de7f6273d75c3d14ba

// URL -> http://gateway.marvel.com/v1/public/comics?ts=1&apikey=9844afe08ebb6195b6e1c1152dffba78&hash=5ae46823c1dfd7de7f6273d75c3d14ba
// SuperHero Api token -> 10217572578603613 // Example -> https://superheroapi.com/api/10217572578603613/70


import axios from 'axios'

const host = 'http://gateway.marvel.com/v1/public/'
const apiKey = 'apikey=9844afe08ebb6195b6e1c1152dffba78'
const hash = 'hash=5ae46823c1dfd7de7f6273d75c3d14ba'
// const topAvengersId = ['1009220', '1009351', '1009368', '1009189', '1009664', '1009610', '1009718', '1009262', '1009215']

export default {

    async getCharacters() {
        const dataCharacters = await axios.get(`${host}characters?ts=1&${apiKey}&${hash}`)
        return dataCharacters.data.data.results
    }

}
