function combate() {
    //personagem 1
    let p1 = prompt('Nome do primeiro personagem: ')
    let nome1 = document.getElementById('nome1')
    let atak = prompt('Poder de atauque:')
    let ataque = document.getElementById('ataque')

    nome1.innerHTML = `${p1}`
    ataque.innerHTML = `${atak} pontos` 

    //personagem 2
    let p2 = prompt('Nome do segundo personagem:')
    let nome2 = document.getElementById('nome2')
    let pts = prompt('Pontos de vida:')
    let pontos = document.getElementById('pontos')
    let defs = prompt('Poder de defesa:')
    let defesa = document.getElementById('defesa')
    let escudo = document.getElementsByName('escudo')

    nome2.innerHTML = `${p2}`
    pontos.innerHTML = `${pts} pontos`
    defesa.innerHTML = `${defs} pontos`

    let resultado = document.getElementById('res')

    if (atak > defs && escudo[1].checked) {
        let dano = atak - defs
        prompt(`Wow! O dano causado foi de ${dano}`)
    }
}