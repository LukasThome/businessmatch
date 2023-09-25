from src.model.Organizacao import Organizacao
from datetime import date, time

class Evento:
    
    def __init__(self, id, titulo, endereco, data, hora, descricao, empresa):
        self.__id = id  # ID do evento (inteiro)
        self.__titulo = titulo  # Título do evento
        self.__endereco = endereco  # Endereço do evento
        self.__data = data  # Data do evento (objeto date)
        self.__hora = hora  # Hora do evento (objeto time)
        self.__descricao = descricao  # Descrição do evento (string)
        self.__empresa = empresa #nome da empresa organizadora
        

    