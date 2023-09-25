from src.model.Organizacao import Organizacao
from datetime import date, time

class Evento:
    
    def __init__(self, ID, titulo, endereco, data, hora, descricao, empresa):
        self.ID = ID  # ID do evento (inteiro)
        self.titulo = titulo  # Título do evento
        self.endereco = endereco  # Endereço do evento
        self.data = data  # Data do evento (objeto date)
        self.hora = hora  # Hora do evento (objeto time)
        self.descricao = descricao  # Descrição do evento (string)
        self.empresa = empresa #nome da empresa organizadora
        

    