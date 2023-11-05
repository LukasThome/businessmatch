var form = document.getElementById("signup");
let userSession = {};

function logList() {
  var list = verifyStatus();

  list.then((l) => {
    if (!l) {
      let propostaCard = `<div>Não há propostas cadastradas!</div>`;
      document
        .getElementById("logBtn")
        .insertAdjacentHTML("afterend", propostaCard);
      return;
    }
    console.log(l);

    l.map(
      ({ titulo, data, hora, descricao, id, nome_empresa, nome_startup }) => {
        let propostaCard = `
                  <div class="card" id="cardId__${id}">
                      <div class="titleContainer">
                          <h2 id="title">Nome: ${titulo}</h2>
                          <svg id="propostaId__${id}" onclick="remove()" class="svgIcons w-6 h-6" width="25px" height="25px" xmlns="http://www.w3.org/2000/svg" fill="#a00" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor">
                              <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                          </svg>
              
                      </div>
                      <div class="bodyText">
                          <span 
                              >Data:
                              <span id="data" >${data}</span>
                          </span>
                      </div>
                      <div class="bodyText">
                          <span
                              >Hora:
                              <span id="hora">${hora}</span>
                          </span>
                      </div>
                      <div class="descricao">
                          <span
                              >Descrição:
                              <span id="descricao">${descricao}</span>
                          </span>
                      </div>
                      <div class="nome_empresa">
                          <span
                              >Nome da Empresa:
                              <span id="nome_empresa">${nome_empresa}</span>
                          </span>
                      </div>
                      <div class="nome_startup">
                          <span
                              >Nome da Startup:
                              <span id="nome_empresa">${nome_startup}</span>
                          </span>
                      </div>
  
                  </div>
              `;
        document
          .getElementById("logBtn")
          .insertAdjacentHTML("afterend", propostaCard);
      }
    );
  });
}

function remove() {
  var list = eel.getMatchingList(userSession.id, userSession.tipo)();
  list.then((l) => {
    l.map(({ id }) => {
      const listener = () => {
        const listWithoutDeleted = l.filter((el) => el.id[0] !== id[0]);
        location.reload();
        document
          .getElementById(`idMatch__${id}`)
          .removeEventListener("click", listener);
      };
      const element = document.getElementById(`idMatch__${id}`);
      if (element) {
        element.addEventListener("click", listener);
      }
    });
  });
}

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
let statusCode = 3;

function verifyStatus() {
  var list = eel.sendPropostaList()();
  return list.then((l) => {
    return l.filter((el) => el.status === statusCode);
  });
}

/* function logList() {
  document.querySelectorAll(".card").forEach((el) => el.remove());
  var list = eel.getMatchingList(userSession.id, userSession.tipo)();
  list.then((l) => {
    if (!l) {
      let matchCard = `<div>Não foi possível gerar matchmaking!</div>`;
      document
        .getElementById("logBtn")
        .insertAdjacentHTML("afterend", matchCard);
      return;
    }
    l.map(({ nome, matchingScore, setor, region, id }) => {
      let matchCard = `
                <div class="card" id="cardId__${id}" style="width: 365px">
                    <div class="titleContainer">
                        <h2 id="title">${nome}</h2>
                        <div>
                            <svg id="idMatch__${id}" onclick="remove()" class="svgIcons w-6 h-6" width="25px" height="25px" xmlns="http://www.w3.org/2000/svg" fill="#a00" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
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
} */

(function getSession() {
  var session = eel.currentSession()();
  session.then((s) => {
    console.log(s);
    userSession = s;
    console.log(userSession.id, userSession.tipo);
    /* body.insertAdjacentHTML(
          "beforeend",
          `<li>ID Usuário logado: ${s.id}</li> <li>Tipo: ${s.tipo}</li>`
        ); */
  });
})();
