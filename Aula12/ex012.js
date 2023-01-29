var hora = 8
var agora = new Date().getHours() //Pega a hora atual

console.log(`A hora atual é ${agora}h.`)

if (hora <= 5) {
    console.log('Boa madrugada!')
} else if (hora < 12) {
    console.log('Bom dia!')
} else if (hora <= 18) {
    console.log('Boa tarde!')
} else if (hora <= 24) {
    console.log('Boa noite!')
}