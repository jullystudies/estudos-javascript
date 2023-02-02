const primeroNome = prompt('Informe o primeiro nome: ')
const sobrenome = prompt('Informe o sobrenome: ')
const campoDeEstudo = prompt('Qual é o campo de estudo do recruta?')
const anoDeNascimento = prompt('Qual é o ano de nascimento do recruta?')

alert("Recruta cadastrado com sucesso!\n" + 
"\nNome Completo:" + primeroNome+ " " + sobrenome + 
"\nCampo de estudo: " + campoDeEstudo + 
"\nIdade: " + (2023 - anoDeNascimento))