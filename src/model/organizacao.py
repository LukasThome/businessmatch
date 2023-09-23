class Organizacao:
    id: int
    nome: str
    cnpj: str
    cnae: str
    setor: str
    interesses: []
    eventos: []
    portfolios: []

    def __init__(self, id, nome, cnpj, cnae, setor):
        self.id =  id
        self.nome = nome
        self.cnpj = cnpj
        self.cnae = cnae
        self.setor = setor
        self.interesses = []
        self.eventos = []
        self.portfolios = []