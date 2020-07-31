// var queryURL = "https://pokeapi.co/api/v2/pokemon?limit=151";

// $.ajax({
//     url: queryURL,
//     method: "GET"
// }).then(function(response) {
//     console.log(response);
//     const pokemon = {
//         name: response.name,
//         id: response.id,
//         image: response.sprites['front_default'],
//         type: response.types.map( type => type.type.name).join(', ')
//     };
    
//     console.log(pokemon);
// });

// var queryURL = 'https://pokeapi.co/api/v2/pokemon?offset=20&limit=20'

// $.ajax({
//     url: queryURL,
//     method: "GET"
//   }).then(function(response) {
//     console.log(response);
//     const pokemon = {};
//     pokemon['name'] = response.name
//     pokemon['id'] = response.id;
//     pokemon['image'] = response.sprites['front_default'];
//     pokemon ['type'] = response.types.map( type => type.type.name).join(', ');
//     console.log(pokemon);
//   });

// function fetchOgPokemon() {
//     fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
//     .then(response => response.json())
//     .then(function(allpokemon){
//         allpokemon.results.forEach(function(pokemon){
//             fetchPokemonData(pokemon)
//         })
//     })
// }



// const queryURL = "https://pokeapi.co/api/v2/pokemon?limit=151";

// $.ajax({
//   url: queryURL,
//   method: "GET"
// }).then(function(response) {
//   console.log(response);
// });

// function fetchKantoPokemon(){
//     fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
//      .then(response => response.json())
//      .then(function(allpokemon){
//      allpokemon.results.forEach(function(pokemon){
//        fetchPokemonData(pokemon); 
//      })
//     })
//    }


// const getPokemon = () => {
//     for(let i = 1; i <= 151; i++) {
//       const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
//       fetch(url)
//       .then(res => res.json())
//       .then(data => {
//         const pokemon = {};
//         pokemon['id'] = data.id;
//         pokemon['name'] = data.name;
//         pokemon['image'] = data.sprites['front_default'];
        
//         console.log(pokemon);
//       })
//     }
//   }
//   getPokemon();

const getPokemon = () => {
    const promises = [];
    
    for(let i = 1; i <= 151; i++) {
      const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
      promises.push(fetch(url)
      .then(res => res.json()));
    }
    
    Promise.all(promises).then(result => {
        const pokemon = result.map((data) => ({
          id: data.id,
          name: data.name,
          image: data.sprites['front_default'],
        }));
        
        console.log(pokemon);
      })
  }
  getPokemon();