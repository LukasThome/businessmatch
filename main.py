# pip install -r requirements.txt
# python main.py
from src.model.startup import Startup

import random
import eel
eel.init('templates')

startups = []

@eel.expose
def my_python_function(a, b):
    return a + b

@eel.expose
def workWithValues(values):
    newStartup = Startup(random.randint(0,100), 
            values["name"], 
            values["cnpj"], 
            values["cnae"], 
            values["setor"],
            values["pergunta1"],
            values["pergunta2"],
            values["pergunta3"],
            )
    print(f"""id: {newStartup.id}\nnome: {newStartup.nome}\ncnpj: {newStartup.cnpj}\ncnae: {newStartup.cnae}\nsetor: {newStartup.setor}\npergunta1: {newStartup.pergunta1}\npergunta2: {newStartup.pergunta2}\npergunta3: {newStartup.pergunta3}""")
    startups.append({"id": newStartup.id,"nome": newStartup.nome,"cnpj": newStartup.cnpj, "cnae": newStartup.cnae, "setor": newStartup.setor,"pergunta1": newStartup.pergunta1,"pergunta2": newStartup.pergunta2,"pergunta3": newStartup.pergunta3})

@eel.expose
def sendList():
    return startups

eel.start('home.html')
