import pickle
from pathlib import Path
from src.model.Proposta import Proposta
from uuid import uuid4

class PropostaController:
    def __init__(self):
        self.__propostas = []
        self.__filePath = Path(Path.cwd(), "src", "controller", 'pickle/propostas.pkl')

    @property
    def propostas(self):
        return self.__propostas

    @propostas.setter
    def propostas(self, propostas):
        self.__propostas = propostas

    @property
    def filePath(self):
        return self.__filePath


    
    def add(self, values):
        
        newProposta = Proposta(str(uuid4()),
                           values["titulo"],
                           values["data"],
                           values["hora"],
                           values["descricao"],
                           values["nome_empresa"],
                           values["nome_startup"]
                           )
        mapping = {
            "id": newProposta.id,
            "titulo": newProposta.titulo,
            "data": newProposta.data,
            "hora": newProposta.hora,
            "descricao": newProposta.descricao,
            "nome_empresa": newProposta.nome_empresa,
            "nome_startup": newProposta.nome_startup

        }
        self.__propostas.append(mapping)

        propostas = []
        if self.__filePath.exists():
            with open(self.__filePath, 'rb') as pr:
                try:
                    propostas = pickle.load(pr)
                except EOFError:
                    return

        with open(self.__filePath, 'wb') as pr:
            pickle.dump([*propostas, mapping], pr)

    def load(self):
        with open(self.__filePath, 'rb') as pr:
            propostas = pickle.load(pr)
            return propostas

    def remove(self, propostaId):
        propostas = self.load()
        for proposta in propostas:
            if proposta["id"] == propostaId:
                propostas.remove(proposta)
        with open(self.__filePath, 'wb') as pr:
            pickle.dump(propostas, pr)

    def edit(self, proposta):
        propostas = self.load()
        for e in propostas:
            if (e["id"] == proposta["id"]):
                e["titulo"] = proposta["titulo"]
                e["data"] = proposta["data"]
                e["hora"] = proposta["hora"]
                e["descricao"] = proposta["descricao"]

        with open(self.__filePath, 'wb') as pr:
            pickle.dump(propostas, pr)
