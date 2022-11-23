const marca = document .getElementById('marca')
const modelo = document.getElementById('modelo') 
const ano = document.getElementById('ano')
const kilometro = document.getElementById('km')
const cor = document.getElementById('cor')


let cad = []
let i = 0

function criaobjt (marca, modelo, ano,kilometro, cor) {
        this.marca = marca
        this.modelo = modelo
        this.ano = ano
        this.kilometro = kilometro
        this.cor = cor
}
function apagar(){
    marca.value = ""
    modelo.value = ""
    ano.value = ""
    kilometro.value = ""
    cor.value = ""
}
function criar(){
    let carro = new criaobjt(marca.value, modelo.value, ano.value, kilometro.value, cor.value)
    cad.push(carro)
    console.log(carro)

    alert("carro cadastrado com sucesso")
    return carro

}
    
    
    const body = document.querySelector("#mo")
    const mostra = document.createElement("table")
    mostra.style.color = "gray"
    body.append(mostra)
    mostra.innerHTML = "<tr><th>Marca</th><th>Modelo</th><th>Ano</th><th>Kilometragem</th><th>Cor</th></tr>"
function mostrar(){
   let e =  criar()
   mostra.innerHTML += `<tr><th>${e.marca}</th><th>${e.modelo}</th><th>${e.ano}</th><th>${e.kilometro}</th><th>${e.cor}</th></tr>`
    apagar()
}