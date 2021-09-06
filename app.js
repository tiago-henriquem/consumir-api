const button = document.querySelector('.submit')
const name = document.querySelector('input')

button.addEventListener('click', function() {
  requisicao();
})

const requisicao = async () => {
  try {
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/`)
    {name, url} = {response.data.results.name, response.data.results.url}
    console.log(name, url);
/*     const namePoke = response.data
    console.log(namePoke)
    bulbasaur(namePoke); */
  } catch(e) {
    console.log(e);
  }
}

function bulbasaur(response) {
/*   */
    console.log(name, url)
}