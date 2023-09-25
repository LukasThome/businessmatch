import random
import pickle
from pathlib import Path
from src.model.Portfolio import Portfolio

class PortfolioController():
    def __init__(self):
        self.__portfolios = []
        self.__filePath = Path(Path.cwd(), "src", "controller", 'pickle/portfolio.pkl')

    @property
    def portfolios(self):
        return self.__portfolios
    
    @portfolios.setter
    def portfolios(self, portfolios):
        self.__portfolios = portfolios

    @property
    def filePath(self):
        return self.__filePath
    
    def add(self, values):
        novoPortfolio = Portfolio(random.randint(0, 100),
                              values["nome"],
                              values["descricao"],
                              )
        mapping = {"id": novoPortfolio.id, "nome": novoPortfolio.nome, "descricao": novoPortfolio.descricao}
        self.__portfolios.append(mapping)

        portfolios = []
        if (self.__filePath.exists()):
            with open(self.__filePath, 'rb') as em:
                try:
                    portfolios = pickle.load(em)
                except EOFError:
                    return

        with open(self.__filePath, 'wb') as em:
            pickle.dump([*portfolios, mapping], em)

    def load(self):
        with open(self.__filePath, 'rb') as em:
            portfolios = pickle.load(em)
            return portfolios
        
    def remove(self, portfolioid):
        portfolios = self.load()
        for portfolio in portfolios:
            if (portfolio["id"] == portfolioid):
                portfolios.remove(portfolio)
        with open(self.__filePath, 'wb') as em:
            pickle.dump(portfolios, em)

    def edit(self, portfolio):
        portfolios = self.load()
        for e in portfolios:
            if (int(e["id"]) == int(portfolio["id"])):
                e["nome"] = portfolio["nome"]
                e["cnpj"] = portfolio["cnpj"]
                e["cnae"] = portfolio["cnae"]
                e["setor"] = portfolio["setor"]
        with open(self.__filePath, 'wb') as em:
            pickle.dump(portfolios, em)