import { clienteService } from "../service/cliente-service"

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

clienteService.listaClientes()
.then(data => {
    data.forEach(elemento => { // Para cada tupla na promise, ele cria uma nova linha com os dados da tupla
        tabela.appendChild(criaNovaLinha(elemento.nome, elemento.email)) 
    });
})