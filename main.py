# pip install -r requirements.txt
# python main.py
from src.model.Startup import Startup
from src.controller.StartupController import StartupController
from src.controller.EmpresaController import EmpresaController
from src.controller.PortfolioController import PortfolioController

import eel

eel.init('templates')


portfolioController = PortfolioController()
startupController = StartupController()
empresaController = EmpresaController()


# ----------------------------------------------------// STARTUP //-----------------------------------------------------
@eel.expose
def workWithValuesStartup(values):
    startupController.add(values)


@eel.expose
def sendStartupList():
    if (startupController.filePath.exists()):
        s = startupController.load()
        return s


@eel.expose
def removeStartup(startupId):
    startupController.remove(startupId)


@eel.expose
def editStartup(startup):
    startupController.edit(startup)


# ----------------------------------------------------// EMPRESA //-----------------------------------------------------
@eel.expose
def workWithValuesEmpresa(values):
    empresaController.add(values)


@eel.expose
def sendEmpresaList():
    if (empresaController.filePath.exists()):
        e = empresaController.load()
        return e


@eel.expose
def removeEmpresa(idEmpresa):
    empresaController.remove(idEmpresa)


@eel.expose
def editEmpresa(empresa):
    empresaController.edit(empresa)


# ----------------------------------------------------// EVENTO //------------------------------------------------------


# ----------------------------------------------------// PORTFOLIO //---------------------------------------------------
@eel.expose
def workWithValuesStartup(values):
    PortfolioController.add(values)


@eel.expose
def sendPortfolioList():
    if (PortfolioController.filePath.exists()):
        p = PortfolioController.load()
        return p


@eel.expose
def removePortfolio(portfolioid):
    startupController.remove(portfolioid)


@eel.expose
def editPortfolio(portfolio):
    portfolioController.edit(portfolio)


# ----------------------------------------------------------------------------------------------------------------------
eel.start('home.html')
