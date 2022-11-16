// eyJhbGciOiJIUzI1NiJ9.eyJSb2xlIjoiQWRtaW4iLCJJc3N1ZXIiOiJJc3N1ZXIiLCJVc2VybmFtZSI6IkxpbGkiLCJleHAiOjE2NTcwMjcyNTcsImlhdCI6MTY1NzAyNzI1N30.664xQss602u1VBwlg3owah9nZOm5SP-_w_PJA06LZzA
let getWelcome = async () => {
    try{
        const responde = await fetch ('https://teste-api-lilit.herokuapp.com')
        const WelcomeMessage =await response.json()
        console.log(WelcomeMessage)
    }
    catch(err){
        console.error("Capturei um erro:", err)
    }
}
getWelcome()
//Rotas das pessoas iniciantes

let getBeginers = async () => {
    try{
        const response = await fetch (`https://teste-api-lilit.herokuapp.com/beginers`,{
            headers:{
                "Authorization": "Bearer eyJhbGciOiJIUzI1NiJ9.eyJSb2xlIjoiQWRtaW4iLCJJc3N1ZXIiOiJJc3N1ZXIiLCJVc2VybmFtZSI6IkxpbGkiLCJleHAiOjE2NTcwMjcyNTcsImlhdCI6MTY1NzAyNzI1N30.664xQss602u1VBwlg3owah9nZOm5SP-_w_PJA06LZzA"
            }
        })
        const beginers = await response.json()
        console.log (beginers)
    }
    catch(err) {
        console.error("Capturei um erro:", err)
    }
}
getBeginers('')
//62b7b4f7816d6d00049f678 -janelle


let getBeginerById = async (id) => {
    try{
        const response = await fetch (`https://teste-api-lilit.herokuapp.com/beginer/${id}`, {
            headers:{
                "Authorization": "Bearer eyJhbGciOiJIUzI1NiJ9.eyJSb2xlIjoiQWRtaW4iLCJJc3N1ZXIiOiJJc3N1ZXIiLCJVc2VybmFtZSI6IkxpbGkiLCJleHAiOjE2NTcwMjcyNTcsImlhdCI6MTY1NzAyNzI1N30.664xQss602u1VBwlg3owah9nZOm5SP-_w_PJA06LZzA"
            }
        })
        const beginerById = await response.json()
        console.log (beginerById)
    }
    catch(err) {
        console.error("Capturei um erro:", err)
    }
}
// getBeginerById('62a944bee682a40004799adf') 
//getBeginerById('62b7b4f7816d6d00049f678')


let getBeginerByFilter = async (field, value) => {
    try{
        const response = await fetch (`https://teste-api-lilit.herokuapp.com/beginers/filter?${field}=${value}`, {
            headers:{
                "Content-type": "application/json",
                "Authorization": "Bearer eyJhbGciOiJIUzI1NiJ9.eyJSb2xlIjoiQWRtaW4iLCJJc3N1ZXIiOiJJc3N1ZXIiLCJVc2VybmFtZSI6IkxpbGkiLCJleHAiOjE2NTcwMjcyNTcsImlhdCI6MTY1NzAyNzI1N30.664xQss602u1VBwlg3owah9nZOm5SP-_w_PJA06LZzA"
            }
        })
        const beginerByFilter = await response.json()
        console.log (beginerByFilter)
    }
    catch(err) {
        console.error("Capturei um erro:", err)
    }
}
//getBeginerByFilter('city', 'são paulo')
//getBeginerByFilter ('name', 'liniker')

let deleteBeginer = async (id) => {
    try{
        const response = await fetch (`https://teste-api-lilit.herokuapp.com/beginers/delete/${id}`, {
            method :'DELETE',
            headers:{
                "Content-type": "application/jason",
                "Authorization": "Bearer eyJhbGciOiJIUzI1NiJ9.eyJSb2xlIjoiQWRtaW4iLCJJc3N1ZXIiOiJJc3N1ZXIiLCJVc2VybmFtZSI6IkxpbGkiLCJleHAiOjE2NTcwMjcyNTcsImlhdCI6MTY1NzAyNzI1N30.664xQss602u1VBwlg3owah9nZOm5SP-_w_PJA06LZzA"
            }
        })
        const deleter = await response.json()
        console.log (deleter)
    }
    catch(err) {
        console.error("Capturei um erro:", err)
    }
}
deleteBeginer('62b7b6ce816d6d00049f6fa3')

let createBeginer = async () => {
    try{
        const response = await fetch (`https://teste-api-lilit.herokuapp.com/beginers/register`, {
            method :'POST',
            headers:{
                "Content-type": "application/jason",
                "Accept": "application/json, text/plain",
                "Authorization": "Bearer eyJhbGciOiJIUzI1NiJ9.eyJSb2xlIjoiQWRtaW4iLCJJc3N1ZXIiOiJJc3N1ZXIiLCJVc2VybmFtZSI6IkxpbGkiLCJleHAiOjE2NTcwMjcyNTcsImlhdCI6MTY1NzAyNzI1N30.664xQss602u1VBwlg3owah9nZOm5SP-_w_PJA06LZzA"
            },
            body: json.stringify ({

            })
        })
        const created = await response.json()
        console.log (created)
    }
    catch(err) {
        console.error("Capturei um erro:", err)
    }
}






// let valor_a = 2;

// let valor_b = 9;

// let valor_c = 2;

// let resultado = valor_a + ( valor_b % valor_c )

// console.log( resultado );

// let valor_a = 10;

// let valor_b = 10;



// console.log( valor_a + valor_b );

// let valor_a = true;

// let valor_b = true;



// valor_a || valor_b
// console.log (valor_a || valor_b)

// let valor_a = true;

// let valor_b = false;



// valor_a && valor_b
// console.log(valor_a && valor_b)


// let valor_a = 3;

// let valor_b = 2;



// console.log( valor_a ** valor_b );

// let valor = true;

// valor = !valor
// console.log (valor = !valor)


// let valor_a = true;

// let valor_b = true;



// valor_a && !valor_b

// console.log (valor_a && !valor_b)


// let valor_a = 1;

// let valor_b = 2;

// let valor_c = 3;

// let resultado = valor_a + valor_b * valor_c

// console.log( resultado );


// let valor_a = 2;

// let valor_b = 2;

// let valor_c = 2;

// let resultado = valor_a + ( valor_b * valor_c )

// console.log( resultado );

// let valor_a = 20;

// let valor_b = 2;



// console.log( valor_a % valor_b );


// let valor_a = 11;

// let valor_b = 5;

// console.log( valor_a % valor_b );


// let valor_a = true;

// let valor_b = false;



// !valor_a && valor_b

// console.log(!valor_a && valor_b)

// let valor_a = “1”;

// let valor_b = “2”;



// console.log( valor_a + valor_b );


// let valor_a = true;

// let valor_b = true;



// valor_a || !valor_b

// console.log(valor_a || !valor_b)

// let valor_a = 25;

// let valor_b = 25;



// console.log( parseInt(valor_a) + parseInt(valor_b) );