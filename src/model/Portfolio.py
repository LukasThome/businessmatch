from datetime import date

today = date.today()

data = today.strftime("%d/%m/%Y")

class Portfolio:
    def __init__(self, id, nome, descricao):
        self.__id = id
        self.__nome = nome
        self.__data = data
        self.__descricao = descricao

    @property
    def id(self):
        return self.__id
    
    @id.setter
    def id(self, id):
        self.__id = id

    @property
    def nome(self):
        return self.__nome
    
    @nome.setter
    def nome(self, nome):
        self.__nome = nome

    @property
    def data(self):
        return self.__data
    
    @data.setter
    def data(self, data):
        self.__data = data

    @property
    def descricao(self):
        return self.__descricao
    
    @descricao.setter
    def descricao(self, descricao):
        self.__descricao = descricao