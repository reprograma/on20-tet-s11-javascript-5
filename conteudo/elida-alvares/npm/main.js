async function buscarDoguinho() {
  const image = document.getElementById('image')
  try {
    const response = await axios.get('https://dog.ceo/api/breeds/image/random')
    image.setAttribute('src', response.data.message)
  }
  catch(err) {
    console.error("Capturei um erro: ", err)
  }
}

buscarDoguinho()
