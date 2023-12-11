var form = document.getElementById("search");
let userSession = {};

function onSubmit(event) {
    event.preventDefault();
    document.querySelectorAll(".card").forEach(el => el.remove());
    var e = document.getElementById("attributes");
    var field = e.options[e.selectedIndex].value;
    var value = form.elements["searchValue"].value
    var list = eel.getSearchResult(userSession.id, userSession.tipo, field, value)();
    list.then((l) => {
        if (l.length === 0) {
            let matchCard = `<div class="card">Não foram encontrados resultados para o critério informado!</div>`;
            document
                .getElementById("logBtn")
                .insertAdjacentHTML("afterend", matchCard);
            return;
        }

        l.map(({
                   nome, matchingScore, setor, region, cnae, activityType, needCertification, hasCertification,
                   wantsSoftwareFactory, hasOwnProduct, wantsRemoteWork, doesRemoteWork, wantsFullCommitment,
                   hasOtherPartners, id
               }) => {
            let matchCard = `
                <div class="card" id="cardId__${id}" style="width: 95.5%">
                    <div class="titleContainer">
                        <h2 id="title">${nome}</h2>
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" height="30px" width="30px" version="1.1" id="Capa_1" viewBox="0 0 53.867 53.867" xml:space="preserve">
                                <polygon style="fill:#ffff00;" points="26.934,1.318 35.256,18.182 53.867,20.887 40.4,34.013 43.579,52.549 26.934,43.798   10.288,52.549 13.467,34.013 0,20.887 18.611,18.182 "/>
                            </svg>
                        </div>
                    </div>
                    <div class="bodyText">
                        <span
                            >Matching Score:
                            <span id="matchingScore"><b>${(matchingScore)}%</b></span>
                        </span>
                    </div>
                    <div class="bodyText">
                        <span
                            >CNAE:
                            <span id="cnae"><b>${cnae}</b></span>
                        </span>
                    </div>
                    <div class="bodyText">
                        <span
                            >Setor:
                            <span id="setor"><b>${setor}</b></span>
                        </span>
                    </div>
                    <div class="bodyText">
                        <span
                            >Região:
                            <span id="region"><b>${region}</b></span>
                        </span>
                    </div>
                    <div class="bodyText">
                        <span
                            >Tipo de atividade:
                            <span id="activityType"><b>${activityType}</b></span>
                        </span>
                    </div>
                    <div class="bodyText">
                        <span
                            >Possui ou necessita de certificações:
                            <span id="certification"><b>${(needCertification != null ? needCertification : hasCertification)}</b></span>
                        </span>
                    </div>
                    <div class="bodyText">
                        <span
                            >Desenvolve ou procura desenvolvimento de software proprietário :
                            <span id="softwareFactory"><b>${(wantsSoftwareFactory != null ? wantsSoftwareFactory : hasOwnProduct)}</b></span>
                        </span>
                    </div>
                    <div class="bodyText">
                        <span
                            >Trabalho remoto:
                            <span id="remoteWork"><b>${(wantsRemoteWork != null ? wantsRemoteWork : doesRemoteWork)}</b></span>
                        </span>
                    </div>  
                    <div class="bodyText">
                        <span
                            >Parcerias exclusivas:
                            <span id="hasOrWantOtherPartners"><b>${(wantsFullCommitment != null ? wantsFullCommitment : hasOtherPartners)}</b></span>
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
