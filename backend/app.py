from flask import Flask, jsonify, request

from gerador import gerar_documento
from validacoes import validar

app = Flask(__name__)


@app.post("/gerar")

def gerar():

    try:
        dados = request.json

        validar(dados)

        arquivo = gerar_documento(dados)

        return jsonify({"sucesso": True, "arquivo": arquivo})

    except Exception as erro:

        return jsonify({"sucesso": False, "erro": str(erro)}), 400


if __name__ == "__main__":
    app.run(debug=True)