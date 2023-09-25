from src.model.Organizacao import Organizacao
class Evento(Organizacao):
    def __init__(self, ID, nome, data, descricao):
        self.ID = ID  # ID do evento (inteiro)
        self.nome = nome  # Nome do evento
        self.data = data  # Data do evento (pode ser um objeto datetime)
        self.descricao = descricao  # Descrição do evento (string)

    def __str__(self):
        return f"{self.nome} ({self.data}) - ID: {self.ID}, Descrição: {self.descricao}"
