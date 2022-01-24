function logar(){
    let userName = document.getElementById("userName").value;
    let password = document.getElementById("password").value;

    if(userName == "" || userName == " ") {
        alert("Nome de usuário não infomado!")
    } else if(password =="" || password == " ") {
        alert("Senha inválida ou não informada!")
    } else{
        alert("Bem vindo " + userName + "!")
    }
}