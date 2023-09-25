from datetime import date

today = date.today()

data = today.strftime("%d/%m/%Y")

class Portfolio:
    def __init__(self, id, nome, descricao):
        self.id = id
        self.nome = nome
        self.data = data
        self.descricao = descricao
