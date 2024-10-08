function carregar(){
    var msg= window.document.getElementById('msg');
    var img= window.document.getElementById('imagem');
    var data = new Date();
    var hora = data.getHours();
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 5 && hora < 12){
        img.src ='./img/Manhã.jpg'
        document.body.style.backgroundColor = 'rgb(70, 142, 236)'
    } else if (hora >= 12 && hora < 18){
        img.src ='./img/Tarde.jpg'
        document.body.style.backgroundColor = '#fc8403'
    } else{
        img.src = './img/Noite.jpg'
        document.body.style.backgroundColor = '#120f73'
    }
}

// setInterval(function(){
//     location.reload()
// }, 1000);

