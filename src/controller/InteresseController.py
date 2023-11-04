import pickle
from uuid import uuid4
from pathlib import Path
from src.model.Startup import Startup
from src.model.Interesse import Interesse

class InteresseController():
    def __init__(self):
        self.__interessesEmpresas = []
        self.__interessesStartups = []
        self.__filePath = Path(
            Path.cwd(), "src", "controller", 'pickle/interesses.pkl')

    @property
    def interesses(self):
        return self.__interesses

    @interesses.setter
    def interesses(self, interesses):
        self.__interesses = interesses

    @property
    def filePath(self):
        return self.__filePath

    def add(self, values):
        
        for empresa in values["empresas"]:
            newEmpresa = Interesse(empresa["id"], "empresa", empresa["isFavourite"])
            mapping = {"id": newEmpresa.organizacao, "tipo": newEmpresa.tipo, "status": newEmpresa.status}
            self.__interessesEmpresas.append(mapping)
        for startup in values["startups"]:
            newStartup = Interesse(startup["id"], "startup", startup["isFavourite"])
            mapping = {"id": newStartup.organizacao, "tipo": newStartup.tipo, "status": newStartup.status}
            self.__interessesStartups.append(mapping)
        combine = {"startups": self.__interessesStartups, "empresas": self.__interessesEmpresas}

        with open(self.__filePath, 'wb') as st:
            pickle.dump(combine, st)
        """ newStartup = Startup(str(uuid4()),
                             values["nome"],
                             values["cnpj"],
                             values["cnae"],
                             values["setor"],
                             values["pergunta1"],
                             values["pergunta2"],
                             values["pergunta3"],
                             )
        mapping = {"id": newStartup.id, "nome": newStartup.nome, "cnpj": newStartup.cnpj, "cnae": newStartup.cnae,
                   "setor": newStartup.setor, "pergunta1": newStartup.pergunta1, "pergunta2": newStartup.pergunta2,
                   "pergunta3": newStartup.pergunta3, "tipo": "startup"}
        self.__startups.append(mapping)

        startups = []
        if (self.__filePath.exists()):
            with open(self.__filePath, 'rb') as st:
                try:
                    startups = pickle.load(st)
                except EOFError:
                    return 
        with open(self.__filePath, 'wb') as st:
            pickle.dump([*startups, mapping], st) """
        

    def load(self):
        with open(self.__filePath, 'rb') as intr:
            interesses = pickle.load(intr)
            return interesses

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
        with open(self.__filePath, 'wb') as st:
            pickle.dump(startups, st)
