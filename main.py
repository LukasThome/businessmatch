# pip install -r requirements.txt
# python main.py
from src.model.Startup import Startup
from src.controller.StartupController import StartupController
from src.controller.EmpresaController import EmpresaController
from src.controller.PortfolioController import PortfolioController

import eel

eel.init('templates')


portfolioController = portfolioController()
startupController = StartupController()
empresaController = EmpresaController()


@eel.expose
def workWithValues(values):
    startupController.add(values)


@eel.expose
def sendList():
    if (startupController.filePath.exists()):
        s = startupController.load()
        return s


@eel.expose
def removeStartup(startupId):
    startupController.remove(startupId)


@eel.expose
def editStartup(startup):
    startupController.edit(startup)


@eel.expose
def removeEmpresa(idEmpresa):
    empresaController.remove(idEmpresa)


@eel.expose
def editEmpresa(empresa):
    empresaController.edit(empresa)


eel.start('home.html')
