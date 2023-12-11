# pip install -r requirements.txt
# python main.py
from src.model.Startup import Startup
from src.controller.StartupController import StartupController
from src.controller.EmpresaController import EmpresaController
from src.controller.PortfolioController import PortfolioController
from src.controller.EventoController import EventoController
from src.controller.PropostaController import PropostaController
from src.controller.InteresseController import InteresseController
from src.controller.services.MatchingService import MatchingService
from src.controller.GerenciarMatchController import GerenciarMatchController

import eel

eel.init('templates')

portfolioController = PortfolioController()
startupController = StartupController()
empresaController = EmpresaController()
eventoController = EventoController()
propostaController = PropostaController()
interesseController = InteresseController()
matchingService = MatchingService()
gerenciarMatchController = GerenciarMatchController()


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


@eel.expose
def editProposta(proposta):
    propostaController.edit(proposta)


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


# ---------------------------------------------------// INTERESSES //---------------------------------------------------

@eel.expose
def saveInteresse(interesse):
    interesseController.add(interesse)


@eel.expose
def loadInteresse():
    data = interesseController.load()
    return data


# -----------------------------------------------// MATCHING SERVICE //-------------------------------------------------

@eel.expose
def calculateMatchingScore(idStartup, idEmpresa):
    return matchingService.calculateMatchingScore(idStartup, idEmpresa)


@eel.expose
def getMatchingList(id, tipo):
    if id is None or tipo is None:
        return []
    matchingList = matchingService.getMatchingList(id, tipo)
    return matchingList


@eel.expose
def editMatching(match):
    gerenciarMatchController.add(match)


@eel.expose
def showMatchs():
    return gerenciarMatchController.load()


@eel.expose
def deleteMatch(listData):
    gerenciarMatchController.save(listData)


# ----------------------------------------------// PESQUISA REFINADA //-------------------------------------------------


@eel.expose
def getSearchResult(id, tipo, field, value):
    searchResultList = matchingService.getListByFieldValue(id, tipo, field, value)
    return searchResultList


# ----------------------------------------------------------------------------------------------------------------------
eel.start('home.html')
