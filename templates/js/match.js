var form = document.getElementById("signup");
let userSession = {};

function logList() {
    document.querySelectorAll(".card").forEach(el => el.remove());
    var list = eel.getMatchingList(userSession.id, userSession.tipo)();
    list.then((l) => {
        if (!l || l.length === 0) {
            let matchCard = `<div class="card">Não foi possível gerar matchmaking!</div>`;
            document
                .getElementById("logBtn")
                .insertAdjacentHTML("afterend", matchCard);
            return;
        }
        l.map(({nome, matchingScore, setor, region, id}) => {
            let matchCard = `
                <div class="card" id="cardId__${id}" style="width: 365px">
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
                            <span id="cnpj"><b>${matchingScore}%</b></span>
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
                            <span id="setor"><b>${region}</b></span>
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
