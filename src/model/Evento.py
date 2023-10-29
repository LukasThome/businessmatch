from src.model.Organizacao import Organizacao
from datetime import date, time
from uuid import uuid4


class Evento(Organizacao):
    id: int
    titulo: str
    local: str
    data: date
    hora: time
    descricao: str
    

    def __init__(self, id, titulo, local, data, hora, descricao()):  
        self.id = id  # ID do evento (inteiro)
        self.titulo = titulo  # Título do evento
        self.local = local  # Endereço do evento
        self.data = data  # Data do evento (objeto date)
        self.hora = hora  # Hora do evento (objeto time)
        self.descricao = descricao  # Descrição do evento (string)
        self.organizacao = Organizacao().nome #campo para saber quem criou este evento posteriormente


    # Getters
    def get_organizacao(self):
        return self.organizacao

    def get_id(self):
        return self.__id

    def get_titulo(self):
        return self.__titulo

    def get_local(self):
        return self.__local

    def get_data(self):
        return self.__data

    def get_hora(self):
        return self.__hora

    def get_descricao(self):
        return self.__descricao


    # Setters
    # Setter para a organização
    def set_organizacao(self, organizacao):
        self.organizacao = organizacao

    def set_id(self, id):
        self.__id = id

    def set_titulo(self, titulo):
        self.__titulo = titulo

    def set_local(self, local):
        self.__local = local

    def set_data(self, data):
        self.__data = data

    def set_hora(self, hora):
        self.__hora = hora

    def set_descricao(self, descricao):
        self.__descricao = descricao

   
