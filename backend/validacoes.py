import os

def validar(dados):

    obrigatorios = [

        "modelo",
        "destino",
        "nome",
        "nacionalidade",
        "estado_civil",
        "cpf"

    ]

    for campo in obrigatorios:

        if not dados.get(campo):
            raise Exception(f"O campo '{campo}' é obrigatório.")

    if not os.path.isfile(dados["modelo"]):
        raise Exception("Modelo inexistente.")

    if not os.path.isdir(dados["destino"]):
        raise Exception("Destino inexistente.")