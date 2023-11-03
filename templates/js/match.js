var form = document.getElementById("signup");
let userSession = {};

function onSubmit(event) {
    // event.preventDefault();
    // var obj = {
    //     nome: form.elements["nome"].value,
    //     cnpj: form.elements["cnpj"].value,
    //     cnae: form.elements["cnae"].value,
    //     setor: form.elements["setor"].value,
    //     pergunta1: form.elements["pergunta1"].value,
    //     pergunta2: form.elements["pergunta2"].value,
    //     pergunta3: form.elements["pergunta3"].value,
    // };
    // eel.workWithValuesEmpresa(obj)();
    // location.reload();
}

function logList() {
    var list = eel.getMatchingList(userSession.id, userSession.tipo)();
    list.then((l) => {
        if (!l) {
            let matchCard = `<div>Não foi possível gerar matchmaking!</div>`;
            document
                .getElementById("logBtn")
                .insertAdjacentHTML("afterend", matchCard);
            return;
        }
        l.map(({nome, matchingScore, setor, id}) => {
            let matchCard = `
                <div class="card" id="cardId__${id}">
                    <div class="titleContainer">
                        <h2 id="title">${nome}</h2>
                        <div>
                            <svg style="float: right" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" height="40px" width="40px" version="1.1" id="Capa_1" viewBox="0 0 53.867 53.867" xml:space="preserve">
                                <polygon style="fill:#EFCE4A;" points="26.934,1.318 35.256,18.182 53.867,20.887 40.4,34.013 43.579,52.549 26.934,43.798   10.288,52.549 13.467,34.013 0,20.887 18.611,18.182 "/>
                            </svg>
                        </div>
                    </div>
                    <div class="bodyText">
                        <span
                            >Matching Score:
                            <span id="cnpj">${matchingScore}%</span>
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
                .insertAdjacentHTML("afterend", matchCard);
        });
    });
}

(function getSession() {
    var session = eel.currentSession()();
    session.then((s) => {
        console.log(s);
        userSession = s
        console.log(userSession.id, userSession.tipo)
        /* body.insertAdjacentHTML(
          "beforeend",
          `<li>ID Usuário logado: ${s.id}</li> <li>Tipo: ${s.tipo}</li>`
        ); */
    });
})();
