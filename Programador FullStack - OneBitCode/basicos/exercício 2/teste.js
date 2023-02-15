function resultado() {
  let nome1 = document.getElementById("veiculo-1");
  let vel1 = document.getElementById("vel1");

  let nome2 = document.getElementById("veiculo-2");
  let vel2 = document.getElementById("vel2");

  let resultado = document.getElementById("res");

  if (vel1 > vel2) {
    resultado.innerHTML = `O ${nome1} é mais rápido que o ${nome2}!`;
  } else if (vel1 < vel2) {
    resultado.innerHTML = `O ${nome2} é mais rápido que o ${nome1}`;
  }
}
