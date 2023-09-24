import random
import pickle
from pathlib import Path
from src.model.startup import Startup


class StartupController():
    def __init__(self):
        self.__startups = []
        self.__filePath = Path(Path.cwd(), "src", "controller", 'startup.pkl')

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
        newStartup = Startup(random.randint(0, 100),
                             values["nome"],
                             values["cnpj"],
                             values["cnae"],
                             values["setor"],
                             values["pergunta1"],
                             values["pergunta2"],
                             values["pergunta3"],
                             )
        mapping = {"id": newStartup.id, "nome": newStartup.nome, "cnpj": newStartup.cnpj, "cnae": newStartup.cnae,
                   "setor": newStartup.setor, "pergunta1": newStartup.pergunta1, "pergunta2": newStartup.pergunta2, "pergunta3": newStartup.pergunta3}
        self.__startups.append(mapping)

        startups = []
        if(self.__filePath.exists()):
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
            if(int(s["id"]) == int(startup["id"])):
                s["nome"] = startup["nome"]
                s["cnpj"] = startup["cnpj"]
                s["cnae"] = startup["cnae"]
                s["setor"] = startup["setor"]
        with open(self.__filePath, 'wb') as st:
            pickle.dump(startups, st)
