import random
import pickle
from pathlib import Path
from src.model.Evento import Evento

class EventoController:
    def __init__(self):
        self.__eventos = []
        self.__filePath = Path(Path.cwd(), "src", "controller", 'pickle/eventos.pkl')

    @property
    def eventos(self):
        return self.__eventos

    @eventos.setter
    def eventos(self, eventos):
        self.__eventos = eventos

    @property
    def filePath(self):
        return self.__filePath

    def add(self, values):
        newEvento = Evento(random.randint(0, 100),
                           values["titulo"],
                           values["local"],
                           values["data"],
                           values["hora"],
                           values["descricao"]
                           #values["empresa"],
                           #values["organizacao"]
                           )
        mapping = {
            "id": newEvento.get_id(),
            "titulo": newEvento.get_titulo(),
            "local": newEvento.get_local(),
            "data": newEvento.get_data(),
            "hora": newEvento.get_hora(),
            "descricao": newEvento.get_descricao(),
            #"empresa": newEvento.get_empresa(),
            #"organizacao": newEvento.get_organizacao()
        }
        self.__eventos.append(mapping)

        eventos = []
        if self.__filePath.exists():
            with open(self.__filePath, 'rb') as ev:
                try:
                    eventos = pickle.load(ev)
                except EOFError:
                    return

        with open(self.__filePath, 'wb') as ev:
            pickle.dump([*eventos, mapping], ev)

    def load(self):
        with open(self.__filePath, 'rb') as ev:
            eventos = pickle.load(ev)
            return eventos

    def remove(self, eventoId):
        eventos = self.load()
        for evento in eventos:
            if evento["id"] == eventoId:
                eventos.remove(evento)
        with open(self.__filePath, 'wb') as ev:
            pickle.dump(eventos, ev)

    def edit(self, evento):
        eventos = self.load()
        for e in eventos:
            if int(e["id"]) == int(evento["id"]):
                e["titulo"] = evento["titulo"]
                e["local"] = evento["local"]
                e["data"] = evento["data"]
                e["hora"] = evento["hora"]
                e["descricao"] = evento["descricao"]
                #e["empresa"] = evento["empresa"]
                #e["organizacao"] = evento["organizacao"]
        with open(self.__filePath, 'wb') as ev:
            pickle.dump(eventos, ev)
