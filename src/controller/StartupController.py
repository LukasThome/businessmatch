import random
import pickle
from uuid import uuid4
from pathlib import Path
from src.model.Startup import Startup


class StartupController():
    def __init__(self):
        self.__startups = []
        self.__filePath = Path(
            Path.cwd(), "src", "controller", 'pickle/startups.pkl')

    @property
    def startups(self):
        return self.__startups

    @startups.setter
    def startups(self, startups):
        self.__startups = startups

    @property
    def filePath(self):
        return self.__filePath

    def add(self, values):
        newStartup = Startup(str(uuid4()),
                             values["nome"],
                             values["cnpj"],
                             values["cnae"],
                             values["setor"],
                             values["region"],
                             values["activityType"],
                             values["offeredServices"],
                             values["offeredProducts"],
                             values["hasCertification"],
                             values["hasOwnProduct"],
                             values["doesRemoteWork"],
                             values["hasOtherPartners"],
                             )
        mapping = {"id": newStartup.id, "nome": newStartup.nome, "cnpj": newStartup.cnpj, "cnae": newStartup.cnae,
                   "setor": newStartup.setor, "region": newStartup.region, "activityType": newStartup.activityType,
                   "offeredServices": newStartup.offeredServices, "offeredProducts": newStartup.offeredProducts,
                   "hasCertification": newStartup.hasCertification, "hasOwnProduct": newStartup.hasOwnProduct,
                   "doesRemoteWork": newStartup.doesRemoteWork, "hasOtherPartners": newStartup.hasOtherPartners,
                   "tipo": "startup"}
        self.__startups.append(mapping)

        startups = []
        if (self.__filePath.exists()):
            with open(self.__filePath, 'rb') as st:
                try:
                    startups = pickle.load(st)
                except EOFError:
                    return

        with open(self.__filePath, 'wb') as st:
            pickle.dump([*startups, mapping], st)

    def load(self):
        with open(self.__filePath, 'rb') as st:
            startups = pickle.load(st)
            return startups

    def remove(self, startupId):
        startups = self.load()
        for startup in startups:
            if (startup["id"] == startupId):
                startups.remove(startup)
        with open(self.__filePath, 'wb') as st:
            pickle.dump(startups, st)

    def edit(self, startup):
        startups = self.load()
        for s in startups:
            if (s["id"] == startup["id"]):
                s["nome"] = startup["nome"]
                s["cnpj"] = startup["cnpj"]
                s["cnae"] = startup["cnae"]
                s["setor"] = startup["setor"]
                s["region"] = startup["region"]
                s["activityType"] = startup["activityType"]
                s["offeredServices"] = startup["offeredServices"]
                s["offeredProducts"] = startup["offeredProducts"]
                s["hasCertification"] = startup["hasCertification"]
                s["hasOwnProduct"] = startup["hasOwnProduct"]
                s["doesRemoteWork"] = startup["doesRemoteWork"]
                s["hasOtherPartners"] = startup["hasOtherPartners"]
        with open(self.__filePath, 'wb') as st:
            pickle.dump(startups, st)

    def findById(self, idStartup):
        startups = self.load()
        for startup in startups:
            if (int(startup["id"]) == int(idStartup)):
                return Startup.toStartup(startup)
        return None

    def findAll(self):
        startups = self.load()
        listStartups = []
        for startup in startups:
            listStartups.append(Startup.toStartup(startup))
        return None
