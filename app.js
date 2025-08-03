
let amigos = []
document.getElementById('listaAmigos').innerHTML = ''

function adicionarAmigo() {

    let amigo = document.getElementById('amigo')
    document.getElementById('resultado').innerHTML = ''
        
    if (!amigo.value)
        return alert('Por favor, insira um nome.')

    amigos.push(amigo.value)      
    amigo.value = ''
    amigo.focus()
    listarAmigos(amigos)
}

function listarAmigos(amigos) {

    let lista = document.getElementById('listaAmigos')
    let nomes = ''

    for (let amigo of amigos)
        nomes += `<li>${amigo}<li>`

    lista.innerHTML = nomes
}

function sortearAmigo(){

    if (amigos.length == 0)
        return alert('Não há amigos para sortear :( ')

    let amigoSorteado = Math.floor((Math.random() * amigos.length))

    document.getElementById('listaAmigos').innerHTML = ''
    document.getElementById('resultado').innerHTML = `O amigo secreto sorteado é: ${amigos[amigoSorteado]}`
    amigos = []
}