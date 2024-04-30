const criaNovaLinha = (nome, email) => {
    const linhaNovoCliente = document.createElement('tr') // Criando a tupla (linha) onde estará sendo mostrado os dados do cliente
    const conteudo = `
        <td class="td" data-td>${nome}</td>
        <td>${email}</td>
        <td>
            <ul class="tabela__botoes-controle">
                <li><a href="../telas/edita_cliente.html" class="botao-simples botao-simples--editar">Editar</a></li>
                <li><button class="botao-simples botao-simples--excluir" type="button">Excluir</button></li>
            </ul>
        </td>
    `
    linhaNovoCliente.innerHTML = conteudo // Adicionando conteúdo na linha
    return linhaNovoCliente // Retornando elemento para o HTML
}

const tabela = document.querySelector('[data-tabela]') // Pegando e elemento da tabela que mostrará os dados
// tabela.appendChild(criaNovaLinha(nome, email)) // Atribui uma linha criada pela função criaNovaLinha com os dados do DB

const listaClientes = () => {
    const promise = new Promise((resolve, reject) => { // Promises são objetos retornados por funções assíncronas, ou seja, ela é retornada mesmo antes da ação terminar
        const http = new XMLHttpRequest()
        http.open('GET', 'http://localhost:3000/profile') // Abrir comunicação entre Aplicação e API (<O que vai pedir>, <Para onde enviar requisição>)
        
        http.onload = () => { // Função que é disparada logo depois de uma requisição assíncrona (CallBack)
            if(http.status >= 400){
                reject(JSON.parse(http.response))
            }else{
                resolve(JSON.parse(http.response))
            }
        }

        http.send() // Enviar a nossa requisição
    })
    console.log(promise)
    return promise
}

listaClientes()
.then(data => {
    data.forEach(elemento => { // Para cada tupla na promise, ele cria uma nova linha com os dados da tupla
        tabela.appendChild(criaNovaLinha(elemento.nome, elemento.email)) 
    });
})

// npx json-server --watch db.json => (Mocando dados para nosso site)

/*
const http2 = new XMLHttpRequest()
http.open('GET', 'http://localhost:3000/profile/semana-passada')

http2.onload = () => {
    const http3 = new XMLHttpRequest()
    http.open('GET', 'http://localhost:3000/profile/semana-retrasada')

    http3.onload = () => {

    }
http2.send()
}
*/ // Callbacks dentro de Callbacks está errado (Callback Hell ou Pyramid of Doom), para esses casos existe as Promises