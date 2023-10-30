from src.model.Organizacao import Organizacao


class Empresa(Organizacao):

    def __init__(self, id, nome, cnpj, cnae, setor, activityType, offeredServices, offeredProducts):
        super().__init__(id, nome, cnpj, cnae, setor)
        self.__activityType = activityType
        self.__offeredServices = offeredServices
        self.__offeredProducts = offeredProducts

    @property
    def activityType(self):
        return self.__activityType

    @activityType.setter
    def activityType(self, activityType):
        self.__activityType = activityType

    @property
    def offeredServices(self):
        return self.__offeredServices

    @offeredServices.setter
    def offeredServices(self, offeredServices):
        self.__offeredServices = offeredServices

    @property
    def offeredProducts(self):
        return self.__offeredProducts

    @offeredProducts.setter
    def offeredProducts(self, offeredProducts):
        self.__offeredProducts = offeredProducts
