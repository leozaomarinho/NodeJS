const usuario=[
    {
        "nome":"leonardo marinho",
        "e-mail":"leowalkg6@Gmail.com",
        "senha":"leo123",
        "celular":"31998914884"
    },
]
//Json
//converterobjetoParaJson

const jsonData = JSON.stringify(usuario);
console.log(jsonData);
//convertendo json para objeto js
const objDate = JSON.parse(jsonData);
console.log(typeof objDate)