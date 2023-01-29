function tabuada() {
    let num = document.getElementById('txtn')
    let tab = document.getElementById('seltab')
    if (num.value.length == 0) {
        tab.innerHTML = 'Digite um número'
        window.alert('Por favor digite um número!')
    } else {
        // let n = Number(num.value)
        let n = num.valueAsNumber //Alternativa
        tab.innerHTML = ''
        //Feito com for:
        //----------------------------------------------
        for(let c = 1; c <= 10; c++) {
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n * c}`
            item.value = `tab${c}`
            tab.appendChild(item)
        }
        //Feito com while:
        //----------------------------------------------
        // let c = 1
        // while (c <= 10) {
            //     let item = document.createElement('option')
            //     item.text = `${n} x ${c} = ${n * c}`
            //     item.value = `tab${c}`
            //     tab.appendChild(item)
            //     c++
            // }
        }
}
function limpar() {
    let tab = document.querySelector('select#seltab')
    let num = document.querySelector('p#txtn')
    tab.innerHTML = ' '
    num.innerHTML = ' '
}