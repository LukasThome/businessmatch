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
                matchingScore = self.calculateMatchingScore(id, empresa.id)
                empresa = Empresa.toJson(empresa)
                empresa["matchingScore"] = matchingScore
                listMatch.append(empresa)
        elif tipo == "empresa":
            startups = self.__startupController.findAll()
            for startup in startups:
                matchingScore = self.calculateMatchingScore(startup.id, id)
                startup = Startup.toJson(startup)
                startup["matchingScore"] = matchingScore
                listMatch.append(startup)
        return listMatch

    def calculateMatchingScore(self, idStartup, idEmpresa):
        print("m=calculateMatchingScore, idStartup=" + str(idStartup) + ", idEmpresa=" + str(idEmpresa))
        matchingScore = 0
        empresa = Empresa.toEmpresa(self.__empresaController.findById(idEmpresa))
        startup = Startup.toStartup(self.__startupController.findById(idStartup))
        if (empresa is not None and startup is not None):

            if (str(empresa.cnae).strip() == str(startup.cnae).strip()):
                matchingScore += 10

            if (str(empresa.setor).strip() == str(startup.setor).strip()):
                matchingScore += 10

            if (str(empresa.region).strip() == str(startup.region).strip()):
                matchingScore += 10

            if (str(empresa.activityType).strip() == str(startup.activityType).strip()):
                matchingScore += 10

            if (str(empresa.offeredServices).strip() == str(startup.offeredServices).strip()):
                matchingScore += 10

            if (str(empresa.offeredProducts).strip() == str(startup.offeredProducts).strip()):
                matchingScore += 10

            if (startup.hasCertification is True) or (
                    str(empresa.needCertification).strip() == str(startup.hasCertification).strip()):
                matchingScore += 10

            if (str(empresa.wantsSoftwareFactory).strip() == str(startup.hasOwnProduct).strip()):
                matchingScore += 10

            if (str(empresa.wantsRemoteWork).strip() == str(startup.doesRemoteWork).strip()):
                matchingScore += 10

            if (str(empresa.wantsFullCommitment).strip() == str(startup.hasOtherPartners).strip()):
                matchingScore += 10

        print("m=calculateMatchingScore, matchingScore=" + str(matchingScore))
        return matchingScore
