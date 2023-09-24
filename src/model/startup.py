
from src.model.organizacao import Organizacao


class Startup(Organizacao):
    pergunta1: str
    pergunta2: str
    pergunta3: str

    def __init__(self, id, nome, cnpj, cnae, setor, pergunta1, pergunta2, pergunta3):
        super().__init__(id, nome, cnpj, cnae, setor)
        self.pergunta1 = pergunta1
        self.pergunta2 = pergunta2
        self.pergunta3 = pergunta3
