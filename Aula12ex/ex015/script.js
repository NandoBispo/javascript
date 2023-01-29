function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var func_ano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (func_ano.value.lenght == 0 || func_ano.value > ano){
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var func_sex = document.getElementsByName('radsex')
        var idade = ano - Number(func_ano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto') //O mesmo que criar uma TAG no html.
        if (func_sex[0].checked) {
            gênero = 'Homem'
            if (idade >= 0 && idade < 10) {
                //Criança
                img.setAttribute('src', 'imagens/crianca_m.png')
            } else if (idade < 21) {
                //Jovem
                img.setAttribute('src', 'imagens/jovem_m.png')
            } else if (idade < 50) {
                //Adulto
                img.setAttribute('src', 'imagens/adulto_m.png')
            } else {
                //Idoso
                img.setAttribute('src', 'imagens/idoso_m.png')
            }
        } else if (func_sex[1].checked) {
            gênero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                //Criança
                img.setAttribute('src', 'imagens/crianca_f.png')
            } else if (idade < 21) {
                //Jovem
                img.setAttribute('src', 'imagens/jovem_f.png')
            } else if (idade < 50) {
                //Adulto
                img.setAttribute('src', 'imagens/adulto_f.png')
            } else {
                //Idoso
                img.setAttribute('src', 'imagens/idoso_f.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com idade calculada ${idade} anos`
        res.appendChild(img)
    }
}