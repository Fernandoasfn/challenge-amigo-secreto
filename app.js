
let amigos = []
let lista = document.getElementById('listaAmigos')
let resultado = document.getElementById('resultado')

function adicionarAmigo() {

    let amigo = document.getElementById('amigo')
    resultado.innerHTML = ''
        
    if (!amigo.value)
        return alert('Por favor, insira um nome.')

    amigos.push(amigo.value)      
    amigo.value = ''
    amigo.focus()
    listarAmigos(amigos)
}

function listarAmigos(amigos) {

    let nomes = ''
    amigos.forEach(amigo => nomes += `<li>${amigo}<li>`)
    lista.innerHTML = nomes
}

function sortearAmigo(){

    if (amigos.length == 0)
        return alert('Não há amigos para sortear :( ')

    let amigoSorteado = Math.floor((Math.random() * amigos.length))

    lista.innerHTML = ''
    resultado.innerHTML = `O amigo secreto sorteado é: ${amigos[amigoSorteado]}`
    amigos = []
}