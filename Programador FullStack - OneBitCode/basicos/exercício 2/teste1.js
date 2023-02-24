function resultado() {
  let nome1 = prompt("Nome do primeiro veículo:");
  let vel1 = prompt("Velocidade do veículo: ");

  let nome2 = prompt("Nome do segundo veículo:");
  let vel2 = prompt("Velocidade do segundo veiculo: ");

  let resultado = document.getElementById("res");

  if (vel1 > vel2) {
    resultado.innerHTML = `O ${nome1} é mais rápido que o ${nome2}!`;
  } else if (vel1 < vel2) {
    resultado.innerHTML = `O ${nome2} é mais rápido que o ${nome1}`;
  } else {
    resultado.innerHTML = `Ambos tem a mesma velocidade!`;
  }
}
