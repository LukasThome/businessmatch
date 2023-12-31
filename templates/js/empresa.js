var form = document.getElementById("signup");

function onSubmit(event) {
    event.preventDefault();
    var obj = {
        nome: form.elements["nome"].value,
        cnpj: form.elements["cnpj"].value,
        cnae: form.elements["cnae"].value,
        setor: form.elements["setor"].value,
        region: form.elements["region"].value,
        activityType: form.elements["activityType"].value,
        offeredServices: form.elements["offeredServices"].value,
        offeredProducts: form.elements["offeredProducts"].value,
        needCertification: form.elements["needCertification"].value,
        wantsSoftwareFactory: form.elements["wantsSoftwareFactory"].value,
        wantsRemoteWork: form.elements["wantsRemoteWork"].value,
        wantsFullCommitment: form.elements["wantsFullCommitment"].value,
    };
    eel.workWithValuesEmpresa(obj)();
    location.reload();
}

function onEdit(event) {
    var editForm = document.getElementById("edit");

    event.preventDefault();
    var obj = {
        nome: editForm.elements["nome"].value,
        cnpj: editForm.elements["cnpj"].value,
        cnae: editForm.elements["cnae"].value,
        setor: editForm.elements["setor"].value,
        region: editForm.elements["region"].value,
        activityType: editForm.elements["activityType"].value,
        offeredServices: editForm.elements["offeredServices"].value,
        offeredProducts: editForm.elements["offeredProducts"].value,
        needCertification: editForm.elements["needCertification"].value,
        wantsSoftwareFactory: editForm.elements["wantsSoftwareFactory"].value,
        wantsRemoteWork: editForm.elements["wantsRemoteWork"].value,
        wantsFullCommitment: editForm.elements["wantsFullCommitment"].value,
        id: document.querySelector("#edit").children[0].id,
    };
    eel.editEmpresa(obj)();
    location.reload();
}

function remove() {
    var list = eel.sendEmpresaList()();
    list.then((l) => {
        l.map(({id}) => {
            document
                .getElementById(`idEmpresa__${id}`)
                .addEventListener("click", () => {
                    eel.removeEmpresa(id)();
                    location.reload();
                });
            document
                .getElementById(`idEmpresa__${id}`)
                .removeEventListener("click", () => {
                });
        });
    });
}

function generateEditTemplate(nome, cnpj, cnae, setor, region, activityType, offeredServices, offeredProducts,
                              needCertification, wantsSoftwareFactory, wantsRemoteWork, wantsFullCommitment, id) {
    let empresaCardEdit = `
        <form onsubmit="onEdit(event)" id="edit">
            <div id="${id}">
                <div class="titleContainer">
                    <h2 id="title">Nome: <input name="nome" value="${nome}" class="formInput"></h2>
                </div>
                <div class="bodyText">
                    <span
                        >CPNJ:
                        <span id="cnpj"><input name="cnpj" value="${cnpj}" class="formInput"></span>
                    </span>
                </div>
                <div class="bodyText">
                    <span 
                        >CNAE:
                        <span id="cnae" ><input name="cnae" value="${cnae}" class="formInput"></span>
                    </span>
                </div>
                <div class="bodyText">
                    <span
                        >Setor:
                        <span id="setor"><input name="setor" value="${setor}" class="formInput"></span>
                    </span>
                </div>
                <div class="bodyText">
                    <span
                        >Região:
                        <span id="region"><input name="region" value="${region}" class="formInput"></span>
                    </span>
                </div>
                <div class="bodyText">
                    <span
                        >Tipo de atividade(produto ou serviço):
                        <span id="activityType"><input name="activityType" value="${activityType}" class="formInput"></span>
                    </span>
                </div>
                <div class="bodyText">
                    <span
                        >Serviços oferecidos:
                        <span id="offeredServices"><input name="offeredServices" value="${offeredServices}" class="formInput"></span>
                    </span>
                </div>
                <div class="bodyText">
                    <span
                        >Produtos oferecidos:
                        <span id="offeredProducts"><input name="offeredProducts" value="${offeredProducts}" class="formInput"></span>
                    </span>
                </div>
                <div class="bodyText">
                    <span
                        >Certificação necessária para parcerias?
                        <span id="needCertification"><input name="needCertification" value="${needCertification}" class="formInput"></span>
                    </span>
                </div>
                <div class="bodyText">
                    <span
                        >Procura fábrica de software?
                        <span id="wantsSoftwareFactory"><input name="wantsSoftwareFactory" value="${wantsSoftwareFactory}" class="formInput"></span>
                    </span>
                </div>
                <div class="bodyText">
                    <span
                        >Quer trabalho remoto?
                        <span id="wantsRemoteWork"><input name="wantsRemoteWork" value="${wantsRemoteWork}" class="formInput"></span>
                    </span>
                </div>
                <div class="bodyText">
                    <span
                        >Quer exclusividade em parcerias?
                        <span id="wantsFullCommitment"><input name="wantsFullCommitment" value="${wantsFullCommitment}" class="formInput"></span>
                    </span>
                </div>
                <div class="inputsContainer">
                      <input type="submit" class="submitBtn editBtn" value="Enviar" />
                </div>
            </div>
        </form>
    `;
    return empresaCardEdit;
}

function edit() {
    var list = eel.sendEmpresaList()();
    list.then((l) => {
        l.map(({
                   id, nome, cnpj, cnae, setor, region, activityType, offeredServices, offeredProducts,
                   needCertification, wantsSoftwareFactory, wantsRemoteWork, wantsFullCommitment
               }) => {
            document.getElementById(`editId__${id}`).addEventListener("click", () => {
                let empresaCardEdit = generateEditTemplate(nome, cnpj, cnae, setor, region, activityType, offeredServices, offeredProducts,
                    needCertification, wantsSoftwareFactory, wantsRemoteWork, wantsFullCommitment, id);
                document.getElementById(`cardId__${id}`).innerHTML = empresaCardEdit;
            });
            document
                .getElementById(`editId__${id}`)
                .removeEventListener("click", () => {
                });
        });
    });
}

function logList() {
    document.querySelectorAll(".card").forEach(el => el.remove());
    var list = eel.sendEmpresaList()();
    list.then((l) => {
        if (!l || l.length === 0) {
            let empresaCard = `<div class="card">Não há empresas cadastradas!</div>`;
            document
                .getElementById("logBtn")
                .insertAdjacentHTML("afterend", empresaCard);
            return;
        }
        l.map(({nome, cnpj, cnae, setor, id}) => {
            let empresaCard = `
                <div class="card" id="cardId__${id}">
                    <div class="titleContainer">
                        <h2 id="title">Nome: ${nome}</h2>
                        <svg id="idEmpresa__${id}" onclick="remove()" class="svgIcons w-6 h-6" width="25px" height="25px" xmlns="http://www.w3.org/2000/svg" fill="#a00" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                        </svg>
                        <svg id="editId__${id}" onclick="edit()" class="svgIcons w-6 h-6" width="25px" height="25px" xmlns="http://www.w3.org/2000/svg" fill="#000" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" />
                        </svg>
            
                    </div>
                    <div class="bodyText">
                        <span
                            >CPNJ:
                            <span id="cnpj">${cnpj}</span>
                        </span>
                    </div>
                    <div class="bodyText">
                        <span 
                            >CNAE:
                            <span id="cnae" >${cnae}</span>
                        </span>
                    </div>
                    <div class="bodyText">
                        <span
                            >Setor:
                            <span id="setor">${setor}</span>
                        </span>
                    </div>
                </div>
            `;
            document
                .getElementById("logBtn")
                .insertAdjacentHTML("afterend", empresaCard);
        });
    });
}
