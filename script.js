alert("Olá. O layout da página será atualizado de acordo com o seu horário. Experimente voltar em outros momentos também!")

function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var minuto = data.getMinutes()
    if (hora >= 5 && hora <= 11){
        img.src = './img/pexels-manha.jpg'
        document.body.style.background = 'rgb(255, 211, 110)'
        msg.innerHTML = `Bom dia! Já tomou o seu café? Agora são ${hora} horas e ${minuto} minutos.`
    } else if (hora >11 && hora < 17){
        img.src = './img/pexels-manhaetarde.jpg'
        document.body.style.background = 'rgb(78, 189, 237)'
        msg.innerHTML = `Boa Tarde! Como está sendo o seu dia? Agora são ${hora} horas e ${minuto} minutos.`
    } else if (hora >=17 && hora < 19){
        img.src = './img/pexels-tarde.jpg'
        document.body.style.background = 'rgb(250, 143, 4)'
        msg.innerHTML = `Ei, já escureceu por ai? Agora são ${hora} horas e ${minuto} minutos.`    
    } else if (hora >=19 && hora <= 23){
        img.src = './img/pexels-noite.jpg'
        document.body.style.background = 'rgb(58, 24, 119)'
        msg.innerHTML = `Boa noite! Como foi o seu dia? Agora são ${hora} horas e ${minuto} minutos.`   
    } else {
        img.src = './img/pexels-madrugada.jpg'
        document.body.style.background = 'rgba(0, 0, 0, 0.753)'
        msg.innerHTML = `O que você faz acordado(a) esse horário? Agora são ${hora} horas e ${minuto} minutos.`
    }
}
