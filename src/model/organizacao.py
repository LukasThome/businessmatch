class Organizacao:
    def __init__(self, id, nome, cnpj, cnae, setor):
        self.id =  id
        self.nome = nome
        self.cnpj = cnpj
        self.cnae = cnae
        self.setor = setor
        self.interesses = []
        self.eventos = []
        self.portfolios = []