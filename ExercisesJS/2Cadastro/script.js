function verificar(){
    var data = new Date();
    var ano = data.getFullYear();
    var inputYear = document.getElementById('txtano');
    var res = document.querySelector('div#res')
    if (inputYear.value.length == 0 || Number(inputYear.value) > ano) {
        window.alert('[ERRO] O ano de nascimento está estranho! Não aceitamos viajantes no tempo!')
    } else {
        var inputSex = document.getElementsByName('radsex')
        var idade = ano - Number(inputYear.value)
        var genero = '';
        if (inputSex[0].checked) {
            genero = 'Homem'
        } else if (inputSex[1].checked){
            genero = 'Mulher'
        }
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
    }
}