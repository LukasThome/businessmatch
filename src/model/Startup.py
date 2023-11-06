from src.model.Organizacao import Organizacao


class Startup(Organizacao):

    def __init__(self, id, nome, cnpj, cnae, setor, region, activityType, offeredServices, offeredProducts,
                 hasCertification, hasOwnProduct, doesRemoteWork, hasOtherPartners):
        super().__init__(id, nome, cnpj, cnae, setor, region, activityType, offeredServices, offeredProducts)
        self.__hasCertification = hasCertification
        self.__hasOwnProduct = hasOwnProduct
        self.__doesRemoteWork = doesRemoteWork
        self.__hasOtherPartners = hasOtherPartners

    @property
    def hasCertification(self):
        return self.__hasCertification

    @hasCertification.setter
    def hasCertification(self, hasCertification):
        self.__hasCertification = hasCertification

    @property
    def hasOwnProduct(self):
        return self.__hasOwnProduct

    @hasOwnProduct.setter
    def hasOwnProduct(self, hasOwnProduct):
        self.__hasOwnProduct = hasOwnProduct

    @property
    def doesRemoteWork(self):
        return self.__doesRemoteWork

    @doesRemoteWork.setter
    def doesRemoteWork(self, doesRemoteWork):
        self.__doesRemoteWork = doesRemoteWork

    @property
    def hasOtherPartners(self):
        return self.__hasOtherPartners

    @hasOtherPartners.setter
    def hasOtherPartners(self, hasOtherPartners):
        self.__hasOtherPartners = hasOtherPartners

    @staticmethod
    def toStartup(startupPkl):
        return Startup(
            startupPkl["id"],
            startupPkl["nome"],
            startupPkl["cnpj"],
            startupPkl["cnae"],
            startupPkl["setor"],
            startupPkl["region"],
            startupPkl["activityType"],
            startupPkl["offeredServices"],
            startupPkl["offeredProducts"],
            startupPkl["hasCertification"],
            startupPkl["hasOwnProduct"],
            startupPkl["doesRemoteWork"],
            startupPkl["hasOtherPartners"]
        )

    @staticmethod
    def toJson(startup):
        startupJson = {}
        if startup is not None:
            startupJson["id"] = startup.id,
            startupJson["nome"] = startup.nome,
            startupJson["cnpj"] = startup.cnpj,
            startupJson["cnae"] = startup.cnae,
            startupJson["setor"] = startup.setor,
            startupJson["region"] = startup.region,
            startupJson["activityType"] = startup.activityType,
            startupJson["offeredServices"] = startup.offeredServices,
            startupJson["offeredProducts"] = startup.offeredProducts,
            startupJson["hasCertification"] = startup.hasCertification,
            startupJson["hasOwnProduct"] = startup.hasOwnProduct,
            startupJson["doesRemoteWork"] = startup.doesRemoteWork,
            startupJson["hasOtherPartners"] = startup.hasOtherPartners
        return startupJson
