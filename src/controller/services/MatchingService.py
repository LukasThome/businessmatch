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
        if listMatch is not []:
            listMatch = sorted(listMatch, key=lambda x: x["matchingScore"])
        return listMatch

    def calculateMatchingScore(self, idStartup, idEmpresa):
        print("m=calculateMatchingScore, idStartup=" + str(idStartup) + ", idEmpresa=" + str(idEmpresa))
        matchingScore = 0
        empresa = Empresa.toEmpresa(self.__empresaController.findById(idEmpresa))
        startup = Startup.toStartup(self.__startupController.findById(idStartup))
        if (empresa is not None and startup is not None):

            if (str(empresa.cnae).strip() == str(startup.cnae).strip()):
                matchingScore += 10

            if (str(empresa.setor).strip().upper() == str(startup.setor).strip().upper()):
                matchingScore += 10

            if (str(empresa.region).strip().upper() == str(startup.region).strip().upper()):
                matchingScore += 10

            if (str(empresa.activityType).strip().upper() == str(startup.activityType).strip().upper()):
                matchingScore += 10

            if (str(empresa.offeredServices).strip().upper() == str(startup.offeredServices).strip().upper()):
                matchingScore += 10

            if (str(empresa.offeredProducts).strip().upper() == str(startup.offeredProducts).strip().upper()):
                matchingScore += 10

            if (startup.hasCertification is True) or (
                    str(empresa.needCertification).strip().upper() == str(startup.hasCertification).strip().upper()):
                matchingScore += 10

            if (str(empresa.wantsSoftwareFactory).strip().upper() == str(startup.hasOwnProduct).strip().upper()):
                matchingScore += 10

            if (str(empresa.wantsRemoteWork).strip().upper() == str(startup.doesRemoteWork).strip().upper()):
                matchingScore += 10

            if (str(empresa.wantsFullCommitment).strip().upper() == str(startup.hasOtherPartners).strip().upper()):
                matchingScore += 10

        print("m=calculateMatchingScore, matchingScore=" + str(matchingScore))
        return matchingScore
