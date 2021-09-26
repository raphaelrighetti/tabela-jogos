var jogadores = [];

function adicionarJogador() {
    var jogador = {
        nome: prompt("Qual é o nome do jogador?"),
        vitorias: 0,
        empates: 0,
        derrotas: 0,
        pontos: 0
    }
    jogadores.push(jogador)
    mostrarJogadores()
}

function mostrarJogadores() {
    var elemento = document.getElementById("corpo-tabela")
    var tabelaJogador = ""

    for (var i = 0; i < jogadores.length; i++) {
        tabelaJogador += "<tr>"
        tabelaJogador += "<td>" + jogadores[i].nome + "</td>"
        tabelaJogador += "<td class='vitorias'>" + jogadores[i].vitorias + "</td>"
        tabelaJogador += "<td class='empates'>"+ jogadores[i].empates + "</td>"
        tabelaJogador += "<td class='derrotas'>"+ jogadores[i].derrotas + "</td>"
        tabelaJogador += "<td class='pontos'>"+ jogadores[i].pontos + "</td>"        
        tabelaJogador += "<td><button type='button' class='botao-jogo' onclick='adicionarVitoria(" + i + ")'>Vitória</button></td>"
        tabelaJogador += "<td><button type='button' class='botao-jogo' onclick='adicionarEmpate(" + i + ")'>Empate</button></td>"
        tabelaJogador += "<td><button type='button' class='botao-jogo' onclick='adicionarDerrota(" + i + ")'>Derrota</button></td>"
        tabelaJogador += "</tr>"
        elemento.innerHTML = tabelaJogador
    }
    
}

function adicionarVitoria(i) {
    var jogador = jogadores[i]
    jogador.vitorias++
    jogador.pontos = calculaPontos(jogador)
    mostrarJogadores(jogador)
}
function adicionarEmpate(i) {
    var jogador = jogadores[i]
    jogador.empates++
    jogador.pontos = calculaPontos(jogador)
    mostrarJogadores(jogador)
}
function adicionarDerrota(i) {
    var jogador = jogadores[i]
    jogador.derrotas++
    jogador.pontos = calculaPontos(jogador)
    mostrarJogadores(jogador)
}

function calculaPontos(jogador) {
    var pontos = jogador.vitorias * 3 + jogador.empates - jogador.derrotas * 2
    return pontos
}