from src.controller.EmpresaController import EmpresaController
from src.controller.StartupController import StartupController
from src.model.Empresa import Empresa
from src.model.Startup import Startup


class MatchingService():
    def __init__(self):
        self.__empresaController = EmpresaController()
        self.__startupController = StartupController()

    def getMatchingList(self, id, tipo):
        print("m=getMatchingList, id=" + str(id) + ", tipo=" + tipo)
        listMatch = []
        if tipo == "startup":
            empresas = self.__empresaController.findAll()
            for empresa in empresas:
                empresa.matchingScore = self.calculateMatchingScore(id, empresa.id)
                listMatch.append(empresa)
        elif tipo == "empresa":
            startups = self.__startupController.findAll()
            for startup in startups:
                startup.matchingScore = self.calculateMatchingScore(startup.id, id)
                listMatch.append(startup)
        return listMatch

    def calculateMatchingScore(self, idStartup, idEmpresa):
        print("m=calculateMatchingScore, idStartup=" + str(idStartup) + ", idEmpresa=" + str(idEmpresa))
        matchingScore = 0
        empresa = Empresa.toEmpresa(self.__empresaController.findById(idEmpresa))
        startup = Startup.toStartup(self.__startupController.findById(idStartup))
        if (empresa is not None and startup is not None):

            if (empresa.cnae == startup.cnae):
                matchingScore += 10

            if (empresa.setor == startup.setor):
                matchingScore += 10

            if (empresa.region == startup.region):
                matchingScore += 10

            if (empresa.activityType == startup.activityType):
                matchingScore += 10

            if (empresa.offeredServices == startup.offeredServices):
                matchingScore += 10

            if (empresa.offeredProducts == startup.offeredProducts):
                matchingScore += 10

            if (startup.hasCertification is True) or (empresa.needCertification == startup.hasCertification):
                matchingScore += 10

            if (empresa.wantsSoftwareFactory == startup.hasOwnProduct):
                matchingScore += 10

            if (empresa.wantsRemoteWork == startup.doesRemoteWork):
                matchingScore += 10

            if (empresa.wantsFullCommitment == startup.hasOtherPartners):
                matchingScore += 10

        print("m=calculateMatchingScore, matchingScore=" + str(matchingScore))
        return matchingScore
