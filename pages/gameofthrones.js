import axios from 'axios';
export default {
    async asyncData () {
        let promises = [];
        for(let i = 0; i < 44; i++){
            promises.push(axios.get(`https://www.anapioficeandfire.com/api/characters?page=${i}&pageSize=50`));
        }
        let responses = await Promise.all(promises);
        let characters = [];
        console.log(responses)
        responses.forEach(response => {
            response.data.forEach(character => {

                // get all characters names/alliases/titles the tv series 
                if(character.tvSeries[0] !== "") {
                    if(character.aliases[0] !== "") {
                        if(character.titles[0] !== "") {
                            if(character.name !== "") {
                                characters.push(`${character.titles[0]}: ${character.name}, ${character.aliases[0]}`);
                            } else {
                                characters.push(`${character.titles[0]}: ${character.aliases[0]}`);
                            }                
                        }else {
                            characters.push(`${character.aliases[0]}`);
                        }
                    }
                }
            })
        });
        return characters
    }
}