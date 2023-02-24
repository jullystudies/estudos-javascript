function combate() {
    //personagem 1
    let p1 = prompt('Nome do primeiro personagem: ')
    let nome1 = document.getElementById('nome1')
    let atak = prompt('Poder de ataque:')
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
    let escudo = prompt('Possui escudo? (Sim/Não)')

    let danoCausado = 0

    nome2.innerHTML = `${p2}`
    pontos.innerHTML = `${pts} pontos`
    defesa.innerHTML = `${defs} pontos`

    let resultado = document.getElementById('res')

    if (atak > defs && escudo === "Não") {
        danoCausado = atak - defs
    } else if (atak > defs && escudo === "Sim"){
       danoCausado = (atak - defs)/2
    }

    pts -= danoCausado

    alert(`Wow! ${p1} causou ${danoCausado} pontos de dano em ${p2}`)
    alert(
        p1 + "\nPoder de ataque: " + atak + "\n\n" +
        p2 + "\nPontos de vida: " + pts +
        "\n Poder de defesa: " + defs + "\nPossui escudo? " + escudo
    )
}
