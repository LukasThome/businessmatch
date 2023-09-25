from src.model.Organizacao import Organizacao


class Startup(Organizacao):
    pergunta1: str
    pergunta2: str
    pergunta3: str

    def __init__(self, id, nome, cnpj, cnae, setor, pergunta1, pergunta2, pergunta3):
        super().__init__(id, nome, cnpj, cnae, setor)
        self.__pergunta1 = pergunta1
        self.__pergunta2 = pergunta2
        self.__pergunta3 = pergunta3

    @property
    def pergunta1(self):
        return self.__pergunta1
    
    @pergunta1.setter
    def pergunta1(self, pergunta1):
        self.__pergunta1 = pergunta1

    @property
    def pergunta2(self):
        return self.__pergunta2
    
    @pergunta2.setter
    def pergunta2(self, pergunta2):
        self.__pergunta2 = pergunta2

    @property
    def pergunta3(self):
        return self.__pergunta3
    
    @pergunta3.setter
    def pergunta3(self, pergunta3):
        self.__pergunta3 = pergunta3