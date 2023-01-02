function contar() {
    var inicial = document.getElementById('txti')
    var final = document.getElementById('txtf')
    var pular = document.getElementById('txtp')
    var res = document.getElementById('res')
    
    if  (inicial.value == '' || final.value == '' || pular.value == '') {
        res.innerHTML ='Impossível contar'
        //window.alert('Faltam dados!')
    
    } else {
        res.innerHTML = 'Contando: <br>'
        let i = Number(inicial.value)
        let f = Number(final.value)
        let p = Number(pular.value)
        if (p <= 0) {
            window.alert('Passo inválido! Iremos considerar passo = 1')
            p = 1
        }
        if ( i < f) {
            //contagem crescente
        for (var r = i ; r <= f; r += p) {
            res.innerHTML += ` ${r} \u{1F92F}`
        }
        } else {
            //contagem decrescente
            for (let r = i; r >= f ; r-= p)
            res.innerHTML += ` ${r} \u{1F92F}`
        }
        res.innerHTML += 'Fim! \u{1F4A8}'
    }
}