function carregar() {
    var msg = window.document.querySelector('div#msg')
    var img = document.getElementById('imagem')
    var hora = new Date().getHours()
    // var hora = data.getHours()
    // hora = 123
    
    msg.innerHTML = `Agora são ${hora} horas.`

    if (hora >= 0 && hora < 12){
        //Bom dia.
        img.src='imagens/manha.png'
        document.body.style.background = '#e2cd9f'
    } else if (hora >= 12 && hora <= 18) {
        //Boa tarde.
        img.src='imagens/tarde.png'
        document.body.style.background = '#b9846f'
    } else {
        //Boa noite.
        img.src='imagens/noite.png'
        document.body.style.background = "#515154"
    }
}