function carregar () {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()

    //var hora = 8

    msg.innerHTML = `Agora são ${hora} horas!`
    if (hora >= 0 && hora < 12) {
        //bom diaa
        img.src = 'manha.png'
        document.body.style.background = '#d7d0c6'
    } else if (hora >= 12 && hora <= 18) {
        //boa tarde
        img.src = 'tarde.png'
        document.body.style.background = '#6f441b'
    } else {
        //boa noite
        img.src = 'noite.png'
        document.body.style.background = '#184052'
    }
       
}
