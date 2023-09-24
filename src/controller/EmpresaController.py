import random
import pickle
from pathlib import Path
from src.model.Empresa import Empresa


class EmpresaController():
    def __init__(self):
        self.__empresas = []
        self.__filePath = Path(Path.cwd(), "src", "controller", 'pickle/empresas.pkl')

    @property
    def startups(self):
        return self.__empresas

    @startups.setter
    def startups(self, empresas):
        self.__empresas = empresas

    @property
    def filePath(self):
        return self.__filePath

    def add(self, values):
        novaEmpresa = Startup(random.randint(0, 100),
                              values["nome"],
                              values["cnpj"],
                              values["cnae"],
                              values["setor"],
                              values["pergunta1"],
                              values["pergunta2"],
                              values["pergunta3"],
                              )
        mapping = {"id": novaEmpresa.id, "nome": novaEmpresa.nome, "cnpj": novaEmpresa.cnpj, "cnae": novaEmpresa.cnae,
                   "setor": novaEmpresa.setor, "pergunta1": novaEmpresa.pergunta1, "pergunta2": novaEmpresa.pergunta2,
                   "pergunta3": novaEmpresa.pergunta3}
        self.__empresas.append(mapping)

        empresas = []
        if (self.__filePath.exists()):
            with open(self.__filePath, 'rb') as em:
                try:
                    empresas = pickle.load(em)
                except EOFError:
                    return

        with open(self.__filePath, 'wb') as em:
            pickle.dump([*empresas, mapping], em)

    def load(self):
        with open(self.__filePath, 'rb') as em:
            empresas = pickle.load(em)
            return empresas

    def remove(self, idEmpresa):
        empresas = self.load()
        for empresa in empresas:
            if (empresa["id"] == idEmpresa):
                empresas.remove(empresa)
        with open(self.__filePath, 'wb') as em:
            pickle.dump(empresas, em)

    def edit(self, empresa):
        empresas = self.load()
        for e in empresas:
            if (int(e["id"]) == int(empresa["id"])):
                e["nome"] = empresa["nome"]
                e["cnpj"] = empresa["cnpj"]
                e["cnae"] = empresa["cnae"]
                e["setor"] = empresa["setor"]
        with open(self.__filePath, 'wb') as em:
            pickle.dump(empresas, em)
