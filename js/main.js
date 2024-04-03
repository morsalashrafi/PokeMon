const container = document.getElementById("pokemonContainer");
document.addEventListener("DOMContentLoaded", function () {
  fetch("https://pokeapi.co/api/v2/pokemon")
    .then((response) => response.json())
    .then((data) => {
      const pokemonList = data.results;
      console.log(pokemonList);

      pokemonList.forEach((pokemon) => {
        fetch(pokemon.url)
          .then((response) => response.json())
          .then((pokemonData) => {
            const html = `
                                <div class="col-sm-6">
                                    <div class="ih-item circle colored effect3 left_to_right">
                                        <a href="#">
                                            <div class="img"><img src="${
                                              pokemonData.sprites.other
                                                .dream_world.front_default
                                            }" alt="img"></div>
                                            <div class="info">
                                                <h4 class="pokemon_name-id">${
                                                  pokemonData.id
                                                } ${pokemonData.name}</h4>
                                                <p>Type: ${
                                                  pokemonData.types[0].type.name
                                                }</p>
                                                <p>First Ability: ${
                                                  pokemonData.abilities[0]
                                                    .ability.name
                                                }</p>
                                                ${
                                                  pokemonData.abilities[1]
                                                    ? `<p>Second Ability: ${pokemonData.abilities[1].ability.name}</p>`
                                                    : ""
                                                }
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            `;
            container.innerHTML += html;
          });
      });
    })
    .catch((error) => console.error("Error Fetching Data:", error));
});
