export async function enviarDadosParaProcessar(dados) {
    try {
        const response = await fetch('/gerar-documento', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(dados)
        });
        return await response.json();
    } catch (error) {
        console.error("Erro ao enviar dados:", error);
        throw error;
    }
}

export async function buscarCaminhoModelo() {
    const response = await fetch('/selecionar-modelo');
    return await response.json();
}

export async function buscarCaminhoDestino() {
    const response = await fetch('/selecionar-destino');
    return await response.json();
}