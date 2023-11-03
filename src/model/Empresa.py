from src.model.Organizacao import Organizacao


class Empresa(Organizacao):

    def __init__(self, id, nome, cnpj, cnae, setor, region, activityType, offeredServices, offeredProducts,
                 needCertification, wantsSoftwareFactory, wantsRemoteWork, wantsFullCommitment):
        super().__init__(id, nome, cnpj, cnae, setor, region)
        self.__activityType = activityType
        self.__offeredServices = offeredServices
        self.__offeredProducts = offeredProducts
        self.__needCertification = needCertification
        self.__wantsSoftwareFactory = wantsSoftwareFactory
        self.__wantsRemoteWork = wantsRemoteWork
        self.__wantsFullCommitment = wantsFullCommitment

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
    def needCertification(self):
        return self.__needCertification

    @needCertification.setter
    def needCertification(self, needCertification):
        self.__needCertification = needCertification

    @property
    def wantsSoftwareFactory(self):
        return self.__wantsSoftwareFactory

    @wantsSoftwareFactory.setter
    def wantsSoftwareFactory(self, wantsSoftwareFactory):
        self.__wantsSoftwareFactory = wantsSoftwareFactory

    @property
    def wantsRemoteWork(self):
        return self.__wantsRemoteWork

    @wantsRemoteWork.setter
    def wantsRemoteWork(self, wantsRemoteWork):
        self.__wantsRemoteWork = wantsRemoteWork

    @property
    def wantsFullCommitment(self):
        return self.__wantsFullCommitment

    @wantsFullCommitment.setter
    def wantsFullCommitment(self, wantsFullCommitment):
        self.__wantsFullCommitment = wantsFullCommitment

    @staticmethod
    def toEmpresa(empresaPkl):
        return Empresa(
            empresaPkl["id"],
            empresaPkl["nome"],
            empresaPkl["cnpj"],
            empresaPkl["cnae"],
            empresaPkl["setor"],
            empresaPkl["region"],
            empresaPkl["activityType"],
            empresaPkl["offeredServices"],
            empresaPkl["offeredProducts"],
            empresaPkl["needCertification"],
            empresaPkl["wantsSoftwareFactory"],
            empresaPkl["wantsRemoteWork"],
            empresaPkl["wantsFullCommitment"]
        )
