# pip install -r requirements.txt
# python main.py
from src.model.Startup import Startup
from src.controller.StartupController import StartupController
from src.controller.EmpresaController import EmpresaController
from src.controller.PortfolioController import PortfolioController
from src.controller.EventoController import EventoController
from src.controller.PropostaController import PropostaController
from src.controller.services.MatchingService import MatchingService

import eel

eel.init('templates')

portfolioController = PortfolioController()
startupController = StartupController()
empresaController = EmpresaController()
eventoController = EventoController()
propostaController = PropostaController()
matchingService = MatchingService()


@eel.expose
def currentSession():
    startups = startupController.load()
    return startups[0]


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

@eel.expose
def editEvento(evento):
    eventoController.edit(evento)


@eel.expose
def removeEvento(eventoId):
    eventoController.remove(eventoId)


@eel.expose
def sendEventoList():
    if (eventoController.filePath.exists()):
        e = eventoController.load()
        return e


@eel.expose
def workWithValuesEvento(values):
    eventoController.add(values)


# ----------------------------------------------------// PROPOSTAS //---------------------------------------------------


@eel.expose
def removeProposta(propostaId):
    propostaController.remove(propostaId)


@eel.expose
def sendPropostaList():
    if (propostaController.filePath.exists()):
        e = propostaController.load()
        return e


@eel.expose
def workWithValuesProposta(values):
    propostaController.add(values)


# ----------------------------------------------------// PORTFOLIO //---------------------------------------------------

@eel.expose
def workWithValuesPortfolio(values):
    portfolioController.add(values)


@eel.expose
def sendPortfolioList():
    if (portfolioController.filePath.exists()):
        p = portfolioController.load()
        return p


@eel.expose
def removePortfolio(portfolioid):
    startupController.remove(portfolioid)


@eel.expose
def editPortfolio(portfolio):
    portfolioController.edit(portfolio)


# -----------------------------------------------// MATCHING SERVICE //-------------------------------------------------

@eel.expose
def calculateMatchingScore(idStartup, idEmpresa):
    return matchingService.calculateMatchingScore(idStartup, idEmpresa)


@eel.expose
def getMatchingList(id, tipo):
    matchingList = matchingService.getMatchingList(id, tipo)
    return matchingList


# ----------------------------------------------------------------------------------------------------------------------
eel.start('home.html')
