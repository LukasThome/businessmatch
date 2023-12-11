import random
from uuid import uuid4

import pickle
from pathlib import Path
from src.model.Empresa import Empresa


class EmpresaController():
    def __init__(self):
        self.__empresas = []
        self.__filePath = Path(Path.cwd(), "src", "controller", 'pickle/empresas.pkl')

    @property
    def empresas(self):
        return self.__empresas

    @empresas.setter
    def empresas(self, empresas):
        self.__empresas = empresas

    @property
    def filePath(self):
        return self.__filePath

    def add(self, values):
        novaEmpresa = Empresa(str(uuid4()),
                              values["nome"],
                              values["cnpj"],
                              values["cnae"],
                              values["setor"],
                              values["region"],
                              values["activityType"],
                              values["offeredServices"],
                              values["offeredProducts"],
                              values["needCertification"],
                              values["wantsSoftwareFactory"],
                              values["wantsRemoteWork"],
                              values["wantsFullCommitment"],
                              )
        mapping = {"id": novaEmpresa.id,
                   "nome": novaEmpresa.nome,
                   "cnpj": novaEmpresa.cnpj,
                   "cnae": novaEmpresa.cnae,
                   "setor": novaEmpresa.setor,
                   "region": novaEmpresa.region,
                   "activityType": novaEmpresa.activityType,
                   "offeredServices": novaEmpresa.offeredServices,
                   "offeredProducts": novaEmpresa.offeredProducts,
                   "needCertification": novaEmpresa.needCertification,
                   "wantsSoftwareFactory": novaEmpresa.wantsSoftwareFactory,
                   "wantsRemoteWork": novaEmpresa.wantsRemoteWork,
                   "wantsFullCommitment": novaEmpresa.wantsFullCommitment}
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
            if (e["id"] == empresa["id"]):
                e["nome"] = empresa["nome"]
                e["cnpj"] = empresa["cnpj"]
                e["cnae"] = empresa["cnae"]
                e["setor"] = empresa["setor"]
                e["activityType"] = empresa["activityType"]
                e["offeredServices"] = empresa["offeredServices"]
                e["offeredProducts"] = empresa["offeredProducts"]
        with open(self.__filePath, 'wb') as em:
            pickle.dump(empresas, em)

    def findAll(self):
        empresas = self.load()
        listEmpresas = []
        for empresa in empresas:
            listEmpresas.append(Empresa.toEmpresa(empresa))
        return listEmpresas

    def findById(self, idEmpresa):
        print("m=findById, idEmpresa=" + str(idEmpresa))
        empresas = self.load()
        for empresa in empresas:
            if (empresa["id"] == idEmpresa):
                return empresa
        return None

    @staticmethod
    def findByFieldValueInList(field, value, empresas):
        print("m=findByFieldValueInList, field=" + str(field) + ", value=" + str(value))
        resultList = []
        for empresa in empresas:
            if (str(empresa[field]).strip().upper() == str(value).strip().upper()):
                resultList.append(empresa)
        return resultList
