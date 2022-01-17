let nome = document.getElementById('name').value;
let email = document.getElementById('email').value;
let senha = document.getElementById('password').value;
let telefone = document.getElementById('telNumber').value;


function verifica(){
    if (email=='leowalkg6@gmail.com'||senha=='leo123'){
        window.open('home.html');
    }
    return 'usuário ou senha invalidos';
}