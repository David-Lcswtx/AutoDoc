import { enviarDadosParaProcessar, buscarCaminhoModelo, buscarCaminhoDestino } from './api.js';


const btnModelo = document.getElementById('btnModelo');
const inputModelo = document.getElementById('modelo');
const btnDestino = document.getElementById('btnDestino');
const inputDestino = document.getElementById('destino');

const checkRepresentante = document.getElementById('possuiRepresentante');
const secaoRepresentante = document.getElementById('representante');

const clienteCpf = document.getElementById('cliente_cpf');
const clienteRg = document.getElementById('cliente_rg');
const clienteRgNovo = document.getElementById('cliente_rg_novo');

const repCpf = document.getElementById('rep_cpf');
const repRg = document.getElementById('rep_rg');
const repRgNovo = document.getElementById('rep_rg_novo');

btnModelo.addEventListener('click', async () => {
    try {
        const resultado = await buscarCaminhoModelo();
        if (resultado.caminho) inputModelo.value = resultado.caminho;
    } catch (error) {
        alert("Erro ao selecionar o modelo.");
    }
});

btnDestino.addEventListener('click', async () => {
    try {
        const resultado = await buscarCaminhoDestino();
        if (resultado.caminho) inputDestino.value = resultado.caminho;
    } catch (error) {
        alert("Erro ao selecionar o destino.");
    }
});

checkRepresentante.addEventListener('change', () => {
    secaoRepresentante.style.display = checkRepresentante.checked ? 'block' : 'none';
});

function gerenciarRegraRgNovo(checkbox, inputCpf, inputRg) {
    if (checkbox.checked) {
        inputRg.value = inputCpf.value;
        inputRg.readOnly = true;
    } else {
        inputRg.readOnly = false;
    }
}

clienteRgNovo.addEventListener('change', () => {
    gerenciarRegraRgNovo(clienteRgNovo, clienteCpf, clienteRg);
});
clienteCpf.addEventListener('input', () => {
    if (clienteRgNovo.checked) clienteRg.value = clienteCpf.value;
});

repRgNovo.addEventListener('change', () => {
    gerenciarRegraRgNovo(repRgNovo, repCpf, repRg);
});
repCpf.addEventListener('input', () => {
    if (repRgNovo.checked) repRg.value = repCpf.value;
});

document.getElementById('limpar').addEventListener('click', () => {
    const inputs = document.querySelectorAll('.container input');
    inputs.forEach(input => {
        if (input.type === 'checkbox') {
            input.checked = false;
        } else if (input.type !== 'button') {
            input.value = '';
        }
        input.readOnly = false;
    });
    inputModelo.readOnly = true;
    inputDestino.readOnly = true;
    secaoRepresentante.style.display = 'none';
});

document.getElementById('gerar').addEventListener('click', async () => {
    const dados = {
        config: {
            modelo: inputModelo.value,
            destino: inputDestino.value
        },
        cliente: {
            nome: document.getElementById('cliente_nome').value,
            nacionalidade: document.getElementById('cliente_nacionalidade').value,
            estado_civil: document.getElementById('cliente_estado_civil').value,
            data_nascimento: document.getElementById('cliente_data_nascimento').value,
            cpf: clienteCpf.value,
            rg: clienteRg.value,
            rg_novo: clienteRgNovo.checked
        },
        endereco: {
            cep: document.getElementById('end_cep').value,
            logradouro: document.getElementById('end_logradouro').value,
            numero: document.getElementById('end_numero').value,
            complemento: document.getElementById('end_complemento').value,
            bairro: document.getElementById('end_bairro').value,
            municipio: document.getElementById('end_municipio').value,
            uf: document.getElementById('end_uf').value
        },
        possui_representante: checkRepresentante.checked,
        representante: checkRepresentante.checked ? {
            nome: document.getElementById('rep_nome').value,
            nacionalidade: document.getElementById('rep_nacionalidade').value,
            estado_civil: document.getElementById('rep_estado_civil').value,
            cpf: repCpf.value,
            rg: repRg.value,
            rg_novo: repRgNovo.checked
        } : null
    };

    try {
        const resultado = await enviarDadosParaProcessar(dados);
        alert(resultado.mensagem);
    } catch (error) {
        alert("Erro ao processar a requisição com o servidor.");
    }
});