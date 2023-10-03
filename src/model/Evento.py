from src.model.Organizacao import Organizacao
from datetime import date, time

class Evento:
    
    def __init__(self, id, titulo, endereco, data, hora, descricao, organizacao):
        self.__id = id  # ID do evento (inteiro)
        self.__titulo = titulo  # Título do evento
        self.__endereco = endereco  # Endereço do evento
        self.__data = data  # Data do evento (objeto date)
        self.__hora = hora  # Hora do evento (objeto time)
        self.__descricao = descricao  # Descrição do evento (string)
        self.__organizacao = organizacao  # Referência à organização responsável pelo evento (objeto Organizacao)

    def get_organizacao(self):
        return self.__organizacao

# Getters
    def get_id(self):
        return self.__id

    def get_titulo(self):
        return self.__titulo

    def get_endereco(self):
        return self.__endereco

    def get_data(self):
        return self.__data

    def get_hora(self):
        return self.__hora

    def get_descricao(self):
        return self.__descricao

    def get_organizacao(self):
        return self.__organizacao

    # Setters
    def set_id(self, id):
        self.__id = id

    def set_titulo(self, titulo):
        self.__titulo = titulo

    def set_endereco(self, endereco):
        self.__endereco = endereco

    def set_data(self, data):
        self.__data = data

    def set_hora(self, hora):
        self.__hora = hora

    def set_descricao(self, descricao):
        self.__descricao = descricao

    def set_organizacao(self, organizacao):
        self.__organizacao = organizacao