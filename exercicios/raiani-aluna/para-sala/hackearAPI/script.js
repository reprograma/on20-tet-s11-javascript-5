let getWelcome = async () => {
    try {
        const response = await fetch('https://teste-api-lilit.herokuapp.com/')
        const welcomeMensage = await response.json()
        console.log('mensagem', welcomeMensage)
    } catch (error) {
        console.error('capiturei um erro:', err)
    }
}

getWelcome()


let getBeginers = async () => {
    try {
       const response = await fetch('https://teste-api-lilit.herokuapp.com/beginers', {
        headers: {
            "Authorization": "Bearer eyJhbGciOiJIUzI1NiJ9.eyJSb2xlIjoiQWRtaW4iLCJJc3N1ZXIiOiJJc3N1ZXIiLCJVc2VybmFtZSI6IkxpbGkiLCJleHAiOjE2NTcwMjcyNTcsImlhdCI6MTY1NzAyNzI1N30.664xQss602u1VBwlg3owah9nZOm5SP-_w_PJA06LZzA"
        }
       })  
       const beginers = await response.json()
       console.log(beginers)

    } catch (error) {
        console.error('capiturei um erro:', err)
    }
}

getBeginers()
// 62b4f2cb6332410004fed18a - lina

let beginersById = async (id) => {
    try {
        const response = await fetch(`https://teste-api-lilit.herokuapp.com/beginers/${id}`, {
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer eyJhbGciOiJIUzI1NiJ9.eyJSb2xlIjoiQWRtaW4iLCJJc3N1ZXIiOiJJc3N1ZXIiLCJVc2VybmFtZSI6IkxpbGkiLCJleHAiOjE2NTcwMjcyNTcsImlhdCI6MTY1NzAyNzI1N30.664xQss602u1VBwlg3owah9nZOm5SP-_w_PJA06LZzA"
            }
        })
        const beginersById = await response.json()
        console.log(beginersById)

    } catch (error) {
        console.error('capiturei um erro:', err)
    }
}

beginersById('62b4f2cb6332410004fed18a')