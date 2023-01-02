function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value == 0 || fano.value > ano) {
        window.alert('VERIFIQUE OS DADOS E TENTE NOVAMENTE!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >=0 && idade > 0){
                //criança
                img.setAttribute('src', 'menino.png')
            } else if (idade > 12 && idade < 21) {
                //adolescente
                img.setAttribute('src', 'meninoadolescente.png')
            }else if (idade < 35){
                //adulto
                img.setAttribute('src', 'jovemhomem.png')
            } else if (idade > 50 && idade < 70) {
                //adulto
                img.setAttribute('src', 'homemadulto.png')
            } else if (idade > 70) {
                //idoso
                img.setAttribute('src', 'senhor.png')
            }

        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >=0 && idade > 0 && idade < 12){
                //criança
                img.setAttribute('src', 'menina.png')
            } else if (idade > 12 && idade < 21) {
                //adolescente
                img.setAttribute('src', 'meninaadolescente.png')
            }else if (idade > 21 && idade < 35){
                // jovem adulto
                img.setAttribute('src', 'jovammulher.png')
            } else if (idade > 36 && idade < 70) {
                //adulto
                img.setAttribute('src', 'mulheradulta.png')
            } else if (idade >70) {
                //idoso
                img.setAttribute('src', 'senhora.png')
            }
        } else if (fsex[2].checked) {
            genero = 'Pessoa não-binario'
            if (idade >=0 && idade < 0){
                //criança
            } else if (idade < 21) {
                //jovem
            }else if (idade < 50){
                //adulto
            } else if (idade > 50) {
                //idoso
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos!`
        res.appendChild(img)
    }
    
}