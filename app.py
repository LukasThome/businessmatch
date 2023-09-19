# Comando para rodar o servidor com reload automático: python -m flask --debug run
from flask import Flask, render_template
app = Flask(__name__)

@app.route("/")
def home():
    return render_template("home.html")

@app.route("/cadastro-empresa")
def cadastro_empresa():
    return render_template("cadastroEmpresa.html")

@app.route("/cadastro-startup")
def cadastro_startup():
    return render_template("cadastroStartup.html")

if __name__ == "__main__":
 app.run()