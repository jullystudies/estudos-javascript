function combate() {
    //personagem 1
    let nome1 = document.getElementById('nome1')
    let ataque = document.getElementById('ataque')

    //personagem 2
    let nome2 = document.getElementById('nome2')
    let pontos2 = document.getElementById('pontos2')
    let defesa = document.getElementById('defesa')
    let escudo = document.getElementsByName('escudo')

    let resultado = document.getElementById('res')

    resultado.innerHTML = `Personagem 1: ${nome1}, Poder de ataque: ${ataque} <br> 
    Personagem 2: ${nome2}, Pontos de vida: ${pontos2}, Poder de defesa: ${defesa}, Escudo: `
}