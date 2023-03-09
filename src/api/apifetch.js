let GetPokemon = "https://pokeapi.co/api/v2/pokemon/";





export const getCharizard = () => {

    let res = fetch(GetPokemon + "charizard", {
            method: "GET",
            headers: {
                "content-type": "application/json; charset=utf-8"
            }
        })
        .then(response => response.json())

        return res

    }




    export const getBulbasaur = () => {

        let res = fetch(GetPokemon + "bulbasaur", {
                method: "GET",
                headers: {
                    "content-type": "application/json; charset=utf-8"
                }
            })
            .then(response => response.json())
    
            return res
    
        }




        export const getSquirtle = () => {

            let res = fetch(GetPokemon + "squirtle", {
                    method: "GET",
                    headers: {
                        "content-type": "application/json; charset=utf-8"
                    }
                })
                .then(response => response.json())
        
                return res
        
            }



            export const getButterfree = () => {

                let res = fetch(GetPokemon + "butterfree", {
                        method: "GET",
                        headers: {
                            "content-type": "application/json; charset=utf-8"
                        }
                    })
                    .then(response => response.json())
            
                    return res
            
                }