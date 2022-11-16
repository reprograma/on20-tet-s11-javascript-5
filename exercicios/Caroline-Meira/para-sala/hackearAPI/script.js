let getWelcome = async () => {
  try {
    const response = await fetch('https://teste-api-lilit.herokuapp.com')
    const welcomeMessage = await response.json() 
    console.log(welcomeMessage)
  }
  catch(err) {
    console.error("Capturei um erro: ", err)
  }
}
// getWelcome()

// ROTAS DAS PESSOAS INICIANTES

let getBeginers = async () => {
  try {
    const response = await fetch('https://teste-api-lilit.herokuapp.com/beginers', {
      headers: {
        "Authorization": "Bearer eyJhbGciOiJIUzI1NiJ9.eyJSb2xlIjoiQWRtaW4iLCJJc3N1ZXIiOiJJc3N1ZXIiLCJVc2VybmFtZSI6IkxpbGkiLCJleHAiOjE2NTcwMjcyNTcsImlhdCI6MTY1NzAyNzI1N30.664xQss602u1VBwlg3owah9nZOm5SP-_w_PJA06LZzA"
      }
    })
    const beginers = await response.json()
    console.log(beginers)
  }
  catch(err) {
    console.error("Capturei um erro: ", err)
  }
}
// getBeginers()

let getBeginerById = async (id) => {
  try {
    const response = await fetch(`https://teste-api-lilit.herokuapp.com/beginers/${id}`, {
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer eyJhbGciOiJIUzI1NiJ9.eyJSb2xlIjoiQWRtaW4iLCJJc3N1ZXIiOiJJc3N1ZXIiLCJVc2VybmFtZSI6IkxpbGkiLCJleHAiOjE2NTcwMjcyNTcsImlhdCI6MTY1NzAyNzI1N30.664xQss602u1VBwlg3owah9nZOm5SP-_w_PJA06LZzA"
      }
    })
    const beginerById = await response.json()
    console.log(beginerById)
  }
  catch(err) {
    console.error("Capturei um erro: ", err)
  }
}
// getBeginerById('62a944bee682a40004799adf')

let getBeginerByFilter = async (field, value) => {
  try {
    const response = await fetch(`https://teste-api-lilit.herokuapp.com/beginers/filter?${field}=${value}`, {
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer eyJhbGciOiJIUzI1NiJ9.eyJSb2xlIjoiQWRtaW4iLCJJc3N1ZXIiOiJJc3N1ZXIiLCJVc2VybmFtZSI6IkxpbGkiLCJleHAiOjE2NTcwMjcyNTcsImlhdCI6MTY1NzAyNzI1N30.664xQss602u1VBwlg3owah9nZOm5SP-_w_PJA06LZzA"
      }
    })
    const beginerByFilter = await response.json()
    console.log(beginerByFilter)
  }
  catch(err) {
    console.error("Capturei um erro: ", err)
  }
}
// getBeginerByFilter('city', 'são paulo')
// getBeginerByFilter('name', 'liniker')

let deleteBeginer = async (id) => {
  try {
    const response = await fetch(`https://teste-api-lilit.herokuapp.com/beginers/delete/${id}`, {
      method: 'DELETE',
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json, text/plain",
        "Authorization": "Bearer eyJhbGciOiJIUzI1NiJ9.eyJSb2xlIjoiQWRtaW4iLCJJc3N1ZXIiOiJJc3N1ZXIiLCJVc2VybmFtZSI6IkxpbGkiLCJleHAiOjE2NTcwMjcyNTcsImlhdCI6MTY1NzAyNzI1N30.664xQss602u1VBwlg3owah9nZOm5SP-_w_PJA06LZzA"
      }
    })
    const deleted = await response.json()
    console.log(deleted)
  }
  catch(err) {
    console.error("Capturei um erro: ", err)
  }
}
// deleteBeginer('62b7b6ce816d6d00049f6fa3')

let creteBeginer = async () => {
  try {
    const response = await fetch(`https://teste-api-lilit.herokuapp.com/beginers/register`, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json, text/plain",
        "Authorization": "Bearer eyJhbGciOiJIUzI1NiJ9.eyJSb2xlIjoiQWRtaW4iLCJJc3N1ZXIiOiJJc3N1ZXIiLCJVc2VybmFtZSI6IkxpbGkiLCJleHAiOjE2NTcwMjcyNTcsImlhdCI6MTY1NzAyNzI1N30.664xQss602u1VBwlg3owah9nZOm5SP-_w_PJA06LZzA"
      },
      body: JSON.stringify({
        "name": "Leona Vingativa",
        "phone": "91999999999",
        "email": "vingativa@hackear.com",
        "linkedin": "https://linkedin.com/in/vingativa",
        "github": "https://github.com/vingativaleona",
        "city": "Belém",
        "state": "PA",
        "studyTime": 2,
        "stacksOfInterest": "Front-end",
        "priorKnowledge": [
          "CSS",
          "Typescript",
          "Vue"
        ],
        "englishLevel": 2,
        "othersPrograms": "{reprograma}",
        "hasComputer": true,
        "internetAccess": true,
        "message": "Textinho bonitinho",
        "findUs": "Amiges"
      })
    })
    const created = await response.json()
    console.log(created)
  }
  catch(err) {
    console.error("Capturei um erro: ", err)
  }
}
// creteBeginer(newBeginer)

let updateBeginer = async (id) => {
  try {
    const response = await fetch(`https://teste-api-lilit.herokuapp.com/beginers/update/${id}`, {
      method: 'PATCH',
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json, text/plain",
        "Authorization": "Bearer eyJhbGciOiJIUzI1NiJ9.eyJSb2xlIjoiQWRtaW4iLCJJc3N1ZXIiOiJJc3N1ZXIiLCJVc2VybmFtZSI6IkxpbGkiLCJleHAiOjE2NTcwMjcyNTcsImlhdCI6MTY1NzAyNzI1N30.664xQss602u1VBwlg3owah9nZOm5SP-_w_PJA06LZzA"
      },
      body: JSON.stringify({
        "city": "lima",
      })
    })
    const updated = await response.json()
    console.log(updated)
  }
  catch(err) {
    console.error("Capturei um erro: ", err)
  }
}
// updateBeginer('62b4f2cb6332410004fed18a')








// 'https://teste-api-lilit.herokuapp.com/beginers/62b7b4f7816d6d00049f6f78' - path parameter
// 'https://teste-api-lilit.herokuapp.com/beginers/filter?name=paty-lima&city=recife' - query parameter
