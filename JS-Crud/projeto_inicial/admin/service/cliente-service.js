const listaClientes = () => {
    return fetch(`http://localhost:3000/profile`) // Utilizando o fetch API 
    .then(resposta => {
        return resposta.json()
    })
}

export const clienteService = {
    listaClientes
}

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
    return promise

*/ // Callbacks dentro de Callbacks está errado (Callback Hell ou Pyramid of Doom), para esses casos existe as Promises