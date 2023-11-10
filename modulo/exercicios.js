/*****************************************************************************************
 * Objetivo: Criar funções para obter informações sobre os estados e cidades do Brasil. 
 * Autor: Guilherme Abel
 * Data: 20/10/2023
 * Versão: 1.0
*****************************************************************************************/
var estados_cidades = require('./estados_cidades.js')

const getListaDeEstados = function () {
    let estados = estados_cidades.estadosCidades.estados
    let JSONsiglas = {}
    let ARRAYuf = []

    estados.forEach(function (estado){
        ARRAYuf.push(estado.sigla)
    })

    JSONsiglas.ARRAYuf = ARRAYuf
    JSONsiglas.quantidade = estados_cidades.estadosCidades.estados.length
    console.log(JSONsiglas)

    return JSONsiglas
}

const getDadosEstado = function (siglaEstado) {
    let sigla = siglaEstado.toUpperCase()
    let estados = estados_cidades.estadosCidades.estados
    let dadosEstado = {}

    estados.forEach(function (estado) {
        if (estado.sigla.includes(sigla)) {
            dadosEstado.ARRAYuf = estado.sigla
            dadosEstado.descricao = estado.nome
            dadosEstado.capital = estado.capital
            dadosEstado.regiao = estado.regiao
        }
    })
    console.log(dadosEstado)
    return dadosEstado
}

const getCapitalEstado = function (siglaEstado) {
    let sigla = siglaEstado.toUpperCase()
    let capitais = estados_cidades.estadosCidades.estados
    let dadosCapital = {}

    capitais.forEach(function (estados_cidades) {
        if (estados_cidades.sigla.includes(sigla)) {
            dadosCapital.ARRAYuf = estados_cidades.sigla
            dadosCapital.descricao = estados_cidades.nome
            dadosCapital.capital = estados_cidades.capital
        }
    })

    return dadosCapital

}

const getEstadosRegiao = function (regiaoSelecionada) {
    const regiao = regiaoSelecionada.toUpperCase()

    const estados = estados_cidades.estadosCidades.estados

    let infoRegiao = {}
    infoRegiao.regiao = regiao

    let estadosDaRegiao = []

    estados.forEach(function (estado) {
        if (estado.regiao.toUpperCase().includes(regiao)) {
            let infoEstado = {
                ARRAYuf: estado.sigla,
                descricao: estado.nome,
            };

            estadosDaRegiao.push(infoEstado)
        }
    })

    infoRegiao.estados = estadosDaRegiao

    return infoRegiao
}

console.log(getListaDeEstados())
console.log(getDadosEstado())
console.log(getCapitalEstado())
console.log(getEstadosRegiao())