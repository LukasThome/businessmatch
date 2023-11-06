from pathlib import Path
import pickle

class GerenciarMatchController:
    def __init__(self):
        self.__matchs = []
        self.__filePath = Path(
            Path.cwd(), "src", "controller", 'pickle/matchs.pkl')

    def add(self, data):
        self.__matchs.append(data)
        matchs = []
        if (self.__filePath.exists()):
            with open(self.__filePath, 'rb') as st:
                try:
                    matchs = pickle.load(st)
                except EOFError:
                    return

        with open(self.__filePath, 'wb') as st:
            pickle.dump([*matchs, data], st)

    def load(self):
        with open(self.__filePath, 'rb') as st:
            matchs = pickle.load(st)
            return matchs

    def save(self, data):
        with open(self.__filePath, 'wb') as st:
            pickle.dump(data, st)

    @property
    def matchs(self):
        return self.__matchs
