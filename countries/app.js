//https://restcountries.eu/rest/v2/all
const req = async () => {
  try {
    const response = await axios.get('https://restcountries.eu/rest/v2/all')
    const ourResponse = await response.data.slice(0, 249)
    console.log(ourResponse)
    pegaBrazil(ourResponse)
  } catch(e) {
    console.log(e)
  }
}

req()

const pegaBrazil = (arr) => {
  const brazil = arr.filter((value) => value.name === 'Brazil')
  const [{name, alpha2Code, region}] = brazil
  console.log(name, alpha2Code, region)
}