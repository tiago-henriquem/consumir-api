const button = document.querySelector('.submit')
const name = document.querySelector('input')

button.addEventListener('click', function() {
  requisicao();
})

const requisicao = async () => {
  try {
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/`)
    console.log(response);
  } catch(e) {
    console.log(e);
  }
}

function bulbasaur(response) {
/*   */
    console.log(name, url)
}