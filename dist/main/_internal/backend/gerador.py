from docxtpl import DocxTemplate
import os


def gerar_documento(dados):

    modelo = dados["modelo"]
    destino = dados["destino"]

    if not os.path.isfile(modelo):
        raise Exception("Modelo não encontrado.")

    if not os.path.isdir(destino):
        raise Exception("Pasta de destino inválida.")

    rg_cliente = dados["cpf"] if dados["rg_novo"] else dados["rg"]

    contexto = {

        "nome": dados["nome"],
        "nacionalidade": dados["nacionalidade"],
        "estado_civil": dados["estado_civil"],
        "data_nascimento": dados["data_nascimento"],

        "cpf": dados["cpf"],
        "rg": rg_cliente,

        "endereco": dados["endereco"],
        "numero": dados["numero"],
        "bairro": dados["bairro"],
        "complemento": dados["complemento"],
        "municipio": dados["municipio"],
        "uf": dados["uf"],
        "cep": dados["cep"]

    }

    if dados["representante"]:

        contexto.update({

            "rep_nome": dados["rep_nome"],
            "rep_nacionalidade": dados["rep_nacionalidade"],
            "rep_estado_civil": dados["rep_estado_civil"],
            "rep_cpf": dados["rep_cpf"],
            "rep_rg": dados["rep_cpf"] if dados["rep_rg_novo"] else dados["rep_rg"]

        })

    documento = DocxTemplate(modelo)

    documento.render(contexto)

    nome = dados["nome"]

    caminho = os.path.join(destino, f"{nome}.docx")

    documento.save(caminho)

    return caminho