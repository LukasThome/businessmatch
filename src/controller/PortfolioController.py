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
            with open(self.__filePath, 'rb') as st:
                try:
                    portfolios = pickle.load(st)
                except EOFError:
                    return

        with open(self.__filePath, 'wb') as st:
            pickle.dump([*portfolios, mapping], st)

    def load(self):
        with open(self.__filePath, 'rb') as st:
            portfolios = pickle.load(st)
            return portfolios
        
    def remove(self, portfolioId):
        portfolios = self.load()
        for portfolio in portfolios:
            if (portfolio["id"] == portfolioId):
                portfolios.remove(portfolio)
        with open(self.__filePath, 'wb') as st:
            pickle.dump(portfolios, st)

    def edit(self, portfolio):
        portfolios = self.load()
        for p in portfolios:
            if (int(p["id"]) == int(portfolio["id"])):
                p["nome"] = portfolio["nome"]
                p["descricao"] = portfolio["descricao"]
        with open(self.__filePath, 'wb') as st:
            pickle.dump(portfolios, st)