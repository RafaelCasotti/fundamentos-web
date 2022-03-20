let nome = window.document.getElementById('nome')
let email = document.querySelector('#email')
let assunto = document.querySelector('#assunto')
let mapa = document.querySelector('#mapa')
let mensagem = document.querySelector('#mensagem')

let nomeOk = false
let emailOk = false
let assuntoOk = false
let mensagemOk = false

//aumentar o tamanho do campo nome e email
nome.style.width="100%"
email.style.width="100%"

function validaNome(){

    let txtNome = document.querySelector('#txtNome')
    if (nome.value.length < 3){
        txtNome.innerHTML = 'Nome Inválido ❌'
        txtNome.style.color = 'red'
    } else{
        txtNome.innerHTML = 'Nome Válido ✔️'
        txtNome.style.color = 'green'
        nomeOk = true      
    }
}

    function validaEmail(){
    let txtEmail = document.querySelector('#txtEmail')
    if(email.value.indexOf('@')== -1 || email.value.indexOf('.') == -1){
        txtEmail.innerHTML = 'E-mail inválido ❌'
        txtEmail.style.color = 'red'
    } else{
        txtEmail.innerHTML = 'E-mail válido ✔️'
        txtEmail.style.color = 'green'
        emailOk = true
    }
}

    function validaAssunto(){
    let txtAssunto = document.querySelector('#txtAssunto')
    if(assunto.value.length >= 100){
        txtAssunto.innerHTML = 'Texto muito grande, digite no máximo 100 caracteres ❗'
        txtAssunto.style.color= 'red'
        txtAssunto.style.display='block'
        assuntoOk = false
    } else {
        txtAssunto.style.display='none'
        assuntoOk = true
    }
}

        function enviar(){
            if(nomeOk == true && emailOk && assuntoOk == true){
                alert('Formulário enviado com sucesso! ✔️')
            } else {
                alert('Preencha o formulário corretamente antes de enviar... ❗')
            }
        }

        function mapaZoom(){
            mapa.style.width = '600px'
            mapa.style.height = '400px'    
        
        }

        function mapaNormal(){
            mapa.style.width = '400px'
            mapa.style.height = '250px'
        }    
    
        function enviar2(){
            if(mensagemOk == true){
                alert('Formulário enviado com sucesso! ✔️')
            } else {
                alert('Preencha o formulário corretamente antes de enviar... ❗')
            }
        }

        function validaMensagem(){
            let txtAssunto = document.querySelector('#txtMensagem')
            if(mensagem.value.length >= 100){
                txtMensagem.innerHTML = 'Texto muito grande, digite no máximo 100 caracteres ❗'
                txtMensagem.style.color= 'red'
                txtMensagem.style.display='block'
                mensagemOk = false
            } else {
                txtMensagem.style.display='none'
                mensagemOk = true
            }
        }