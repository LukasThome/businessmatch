class Interesse:
    def __init__(self, organizacao, tipo, status):
        self.__organizacao = organizacao
        self.__tipo = tipo
        self.__status = status
    
    @property
    def organizacao(self):
        return self.__organizacao

    @organizacao.setter
    def organizacao(self, organizacao):
        self.__organizacao = organizacao

    @property
    def tipo(self):
        return self.__tipo

    @tipo.setter
    def tipo(self, tipo):
        self.__tipo = tipo

    @property
    def status(self):
        return self.__status

    @status.setter
    def status(self, status):
        self.__status = status