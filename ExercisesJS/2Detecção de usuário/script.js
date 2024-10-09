function verificar(){
    var data = new Date();
    var ano = data.getFullYear();
    var mes = data.getMonth();
    var dia = data.getDate();
    var inputdata = document.getElementById('txtano').value;

    var udata = new Date(inputdata);
    var inputYear = udata.getFullYear();
    var inputMonth = udata.getMonth();
    var inputDay = udata.getDate();
    var res = document.querySelector('div#res')

    if (isNaN(udata.getTime())){
        spaninput = document.querySelector('p#enascimento')
        spaninput.innerHTML = '<p> Insira sua data de nascimento. </p>'
    } else if (inputYear <= ano && inputMonth <= mes && inputDay <= dia){
        spaninput = document.querySelector('p#enascimento')
        spaninput.innerHTML = '<p></p>'
        var inputSex = document.getElementsByName('radsex')
        var idade = ano - Number(inputYear)
        var genero = '';
        if (inputSex[0].checked) {
            genero = 'Homem'
        } else if (inputSex[1].checked){
            genero = 'Mulher'
        }
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
    } else {
        spaninput = document.querySelector('p#enascimento')
        spaninput.innerHTML = '<p> Data de nascimento inválida. </p>'
        res.innerHTML = `Detectamos um viajante do tempo.`
    }
}