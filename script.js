function carregar(){
var msg= window.document.getElementById('msg')
var img = window.document.getElementById ('imagem')
var data = new Date()
var hora = data.getHours()
msg.innerHTML = `Agora são ${hora} horas.`
if (hora >= 0 && hora < 12) {
    // Bom Dia!
    img.src = 'fotodiasemfundorecente.png'
    document.body.style.background ='#dbe2c5'
} else if (hora >= 12 && hora < 18) {
    // Boa Tarde!
    img.src = 'fototardesemfundo.png'
    document.body.background = '#fda3ic'
    
} else {
    //Boa Noite!
    img.src = 'fotosnoitewebsemfundo.png'
    document.body.background = '#sb5f72'
}
}

