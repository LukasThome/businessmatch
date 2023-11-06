class Organizacao:
    def __init__(self, id, nome, cnpj, cnae, setor, region, activityType, offeredServices, offeredProducts):
        self.__id = id
        self.__nome = nome
        self.__cnpj = cnpj
        self.__cnae = cnae
        self.__setor = setor
        self.__region = region
        self.__activityType = activityType
        self.__offeredServices = offeredServices
        self.__offeredProducts = offeredProducts
        self.__interesses = []
        self.__eventos = []
        self.__portfolios = []

    @property
    def id(self):
        return self.__id

    @id.setter
    def id(self, id):
        self.__id = id

    @property
    def nome(self):
        return self.__nome

    @nome.setter
    def nome(self, nome):
        self.__nome = nome

    @property
    def cnpj(self):
        return self.__cnpj

    @cnpj.setter
    def cnpj(self, cnpj):
        self.__cnpj = cnpj

    @property
    def cnae(self):
        return self.__cnae

    @cnae.setter
    def cnae(self, cnae):
        self.__cnae = cnae

    @property
    def setor(self):
        return self.__setor

    @setor.setter
    def setor(self, setor):
        self.__setor = setor

    @property
    def region(self):
        return self.__region

    @region.setter
    def region(self, region):
        self.__region = region

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

    @property
    def interesses(self):
        return self.__interesses

    @interesses.setter
    def interesses(self, interesses):
        self.__interesses = interesses

    @property
    def eventos(self):
        return self.__eventos

    @eventos.setter
    def eventos(self, eventos):
        self.__eventos = eventos

    @property
    def portfolios(self):
        return self.__portfolios

    @portfolios.setter
    def portfolios(self, portfolios):
        self.__portfolios = portfolios
