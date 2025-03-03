const form = document.getElementById('formulario')
const imgAprovado = '<img src="./images/aprovado.png" alt="Emoji festejando">'
const imgReprovado = '<img src="./images/reprovado.png" alt="Emoji triste">'
const spanAprovado = '<span class="resultado aprovado">Aprovado</span>' 
const spanReprovado = '<span class="resultado reprovado">Reprovado</span>' 

const notaMin = parseFloat(prompt('Digite a nota mínima'));
let linhas = ''
const atividades = []
const notas = []

form.addEventListener("submit", function(e){
    e.preventDefault();
    
    adicionarLinha()
    atualizarTabela()
    atualizarMedia()
})

function adicionarLinha(){
    const inputNomeAtividade = document.getElementById('nomeAtividade')
    const inputNotaAtividade = document.getElementById('notaAtividade')

    if(atividades.includes(inputNomeAtividade.value)){
        alert(`A atividade ${inputNomeAtividade.value} já foi adicionada!`)
    }else{
        let linha = '<tr>'
        linha += `<td>${inputNomeAtividade.value}</td>`
        linha += `<td>${inputNotaAtividade.value}</td>`
        linha += `<td>${inputNotaAtividade.value >= notaMin ? imgAprovado : imgReprovado}</td>`
        linha += '</tr>'

        atividades.push(inputNomeAtividade.value)
        notas.push(parseFloat(inputNotaAtividade.value))

        linhas += linha
    }

    inputNomeAtividade.value = ''
    inputNotaAtividade.value = ''
}

function atualizarTabela(){
    const corpoTabela = document.querySelector('tbody')
    corpoTabela.innerHTML = linhas
}

function atualizarMedia(){
    const mediaFinal = calcularMedia();

    document.getElementById('mediaValor').innerHTML = mediaFinal.toFixed(1);
    document.getElementById('mediaResultado').innerHTML = mediaFinal >= notaMin ? spanAprovado : spanReprovado;
}

function calcularMedia(){
    let somaDeNotas = 0;

    for(notaP in notas){
        somaDeNotas += parseInt(notas[notaP]);
    }
    
    return somaDeNotas/notas.length;
}