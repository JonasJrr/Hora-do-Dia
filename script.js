alert("Olá. O layout da página será carregado de acordo com o seu horário. Experimente voltar em diferentes horários também!")

function carregar(){

    let msg = document.getElementById('msg');
    let img = document.getElementById('imagem');
    let data = new Date();
    let hora = data.getHours();
    let minuto = data.getMinutes();

    function diaSemana(){

        let dia = data.getDay();

        if(dia == 0){
            return "domingo"
        }else if (dia == 1){
            return "segunda-feira"
        }else if (dia == 2){
            return "terça-feira"
        }else if (dia == 3){
            return "quarta-feira"
        }else if (dia == 4){
            return "quinta-feira"
        }else if (dia == 5){
            return "sexta-feira"
        }else{
            return "sábado"
        }
    }

    if (hora >= 5 && hora <= 11){
        img.src = './img/pexels-manha.jpg'
        document.body.style.background = 'rgb(255, 211, 110)'
        msg.innerHTML = `Bom dia! Já tomou o seu café? Hoje é ${diaSemana()} e agora são exatamente ${hora} horas e ${minuto} minutos.`
    } else if (hora > 11 && hora <= 17){
        img.src = './img/pexels-manhaetarde.jpg'
        document.body.style.background = 'rgb(78, 189, 237)'
        msg.innerHTML = `Boa Tarde! Como está sendo o seu dia? Hoje é ${diaSemana()} e agora são exatamente ${hora} horas e ${minuto} minutos.`
    } else if (hora > 17 && hora < 19){
        img.src = './img/pexels-tarde.jpg'
        document.body.style.background = 'rgb(250, 143, 4)'
        msg.innerHTML = `Ei, já escureceu por ai? Hoje é ${diaSemana()} e agora são exatamente ${hora} horas e ${minuto} minutos.`    
    } else if (hora >= 19 && hora <= 23){
        img.src = './img/pexels-noite.jpg'
        document.body.style.background = 'rgb(58, 24, 119)'
        msg.innerHTML = `Boa noite! Como foi o seu dia? Hoje é ${diaSemana()} e agora são exatamente ${hora} horas e ${minuto} minutos.`   
    } else {
        img.src = './img/pexels-madrugada.jpg'
        document.body.style.background = 'rgba(0, 0, 0, 0.753)'
        msg.innerHTML = `O que você faz acordado(a) esse horário? Hoje é ${diaSemana()} e agora são ${hora} horas e ${minuto} minutos.`
    }
}
