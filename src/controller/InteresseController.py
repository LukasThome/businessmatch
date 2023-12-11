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
            print(combine)
            pickle.dump(combine, st)
            
    def load(self):
        with open(self.__filePath, 'rb') as intr:
            interesses = pickle.load(intr)
            return interesses

   
