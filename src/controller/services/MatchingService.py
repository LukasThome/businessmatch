# from main import empresaController, startupController
from src.controller.EmpresaController import EmpresaController
from src.controller.StartupController import StartupController


class MatchingService():
    def __init__(self):
        self.__empresaController = EmpresaController()
        self.__startupController = StartupController()

    def getMatchingList(self, id, tipo):
        listMatch = []
        if tipo == "startup":
            empresas = self.__empresaController.findAll()
            for empresa in empresas:
                empresa.match = MatchingService.calculateMatchingScore(id, empresa.id)
                listMatch.append(empresa)
        elif tipo == "empresa":
            startups = self.__startupController.findAll()
            for startup in startups:
                startup.match = MatchingService.calculateMatchingScore(startup.id, id)
                listMatch.append(startup)
        return listMatch

    @staticmethod
    def calculateMatchingScore(idStartup, idEmpresa):
        matchingScore = 0
        empresa = EmpresaController.findById(idEmpresa)
        startup = StartupController.findById(idStartup)
        if (empresa is not None and startup is not None):

            if (empresa.cnae == startup.cnae):
                matchingScore += 10

            if (empresa.setor == startup.setor):
                matchingScore += 10

            if (empresa.activityType == startup.activityType):
                matchingScore += 10

            if (empresa.offeredServices == startup.offeredServices):
                matchingScore += 10

            if (empresa.offeredProducts == startup.offeredProducts):
                matchingScore += 10

        return matchingScore
