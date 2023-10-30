from src.model.Empresa import Empresa
from src.model.Startup import Startup
from datetime import date, time
from uuid import uuid4

class Proposta(Empresa, Startup):
    id: int
    titulo: str
    data: date
    hora: time
    descricao: str
    status: int
    nome_empresa: Empresa
    nome_startup: Startup

    def __init__(self, id, titulo, data, hora, descricao, nome_empresa, nome_startup):  
        self.id = id  # ID da proposta (inteiro)
        self.titulo = titulo  # Título da proposta
        self.data = data  # Data da proposta (objeto date)
        self.hora = hora  # Hora da proposta (objeto time)
        self.descricao = descricao  # Descrição da proposta (string)
        self.satus = 3 #incia como pendente 0 = recusado, 1 = aceito, 3 = pendente
        self.nome_empresa = nome_empresa #campo para saber quem criou esta proposta posteriormente
        self.nome_startup = nome_startup #campo para saber quem criou/quem recebe a proposta
    

    # Getters
    def get_nome_empresa(self):
        return self.nome_empresa
    
    def get_nome_startup(self):
        return self.nome_startup
    
    def get_status(self):
        return self.status

    def get_id(self):
        return self.__id

    def get_titulo(self):
        return self.__titulo


    def get_data(self):
        return self.__data

    def get_hora(self):
        return self.__hora

    def get_descricao(self):
        return self.__descricao

    # Setters
    def set_nome_empresa(self, nome_empresa):
        self.nome_empresa = nome_empresa

    def set_nome_startup(self, nome_startup):
        self.nome_startup = nome_startup

    def set_status(self, status):
        self.status = status

    def set_id(self, id):
        self.__id = id

    def set_titulo(self, titulo):
        self.__titulo = titulo

    def set_data(self, data):
        self.__data = data

    def set_hora(self, hora):
        self.__hora = hora

    def set_descricao(self, descricao):
        self.__descricao = descricao

   
