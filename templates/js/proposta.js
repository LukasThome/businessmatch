var form = document.getElementById("signup");
var currentDatetime = new Date();

// Função para adicionar uma proposta
async function onSubmit(event) {
  event.preventDefault();
  const currentSession = await eel.currentSession()();
  var proposta = {
    nome_empresa: "Nome estático",
    nome_startup: currentSession.nome,
    titulo: form.elements["titulo"].value,
    data: formatDate(currentDatetime), // Get and format the current date
    hora: formatTime(currentDatetime), // Get and format the current time
    descricao: form.elements["descricao"].value,
  };

  eel.workWithValuesProposta(proposta)();
  console.log(proposta.value);
  console.log("create");

  location.reload();
}

// Deixar a data como YYYY-MM-DD
function formatDate(date) {
  var day = String(date.getDate()).padStart(2, "0");
  var monthNames = [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro",
  ];
  var month = monthNames[date.getMonth()];
  var year = date.getFullYear();
  return `${day} ${month} ${year}`;
}

// Deixar a hora como HH:MM:SS
function formatTime(date) {
  var hours = String(date.getHours()).padStart(2, "0");
  var minutes = String(date.getMinutes()).padStart(2, "0");
  var seconds = String(date.getSeconds()).padStart(2, "0");
  return `${hours}:${minutes}:${seconds}`;
}

function logList() {
  var list = eel.sendPropostaList()();
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




function generateEditTemplate(titulo, descricao, id) {
  let propostaCardEdit = `
        <form onsubmit="onEdit(event)" id="edit">
          <div id="${id}">
                <div class="titleContainer">
                    <h2 id="title">Nome: <input name="titulo" value="${titulo}" class="formInput"></h2>
                </div>
                <div class="bodyText">
                    <span 
                        >DESCRICAO:
                        <span id="descricao" ><input name="descricao" value="${descricao}" class="formInputDescricao"></span>
                    </span>
                </div>
                <div class="inputsContainer">
                      <input type="submit" class="submitBtn editBtn" value="Enviar" />
                </div>
            </div>
        </form>
    `;
  return propostaCardEdit;
}

function remove() {
  var list = eel.sendPropostaList()();
  list.then((l) => {
    l.map(({ id }) => {
      const listener = () => {
        eel.removeProposta(id)();
        location.reload();
        document
          .getElementById(`propostaId__${id}`)
          .removeEventListener("click", listener);
      };
      document
        .getElementById(`propostaId__${id}`)
        .addEventListener("click", listener);
    });
  });
}

function aceitar(id) {
  // Aqui você deve implementar a lógica para aceitar a proposta com o ID fornecido
  // Você pode chamar uma função do servidor Python usando Eel para executar essa ação
  eel.aceitarProposta(id)();
  location.reload(); // Recarregue a página após a ação ser concluída
}

function recusar(id) {
  // lógica para recusar a proposta com o ID fornecido
  // chama uma função do servidor Python usando Eel para executar essa ação
  eel.recusarProposta(id)();
  location.reload(); // Recarregaa página após a ação ser concluída
}

function logListWithActions() {
  var list = eel.sendPropostaList()();
  list.then((l) => {
    if (!l) {
      let propostaCard = `<div>Não há propostas cadastradas!</div>`;
      document
        .getElementById("logBtn")
        .insertAdjacentHTML("afterend", propostaCard);
      return;
    }
    l.map(
      ({ titulo, data, hora, descricao, id, nome_empresa, nome_startup }) => {
        let propostaCard = `
          <div class="card" id="cardId__${id}">
            <div class="titleContainer">
              <h2 id="title">Nome: ${titulo}</h2>
              <svg id="propostaId__${id}" onclick="remove()" class="svgIcons w-6 h-6" width="25px" height="25px" xmlns="http://www.w3.org/2000/svg" fill="#a00" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
              </svg>
              <button class="aceitar-btn" onclick="aceitar(${id})">Aceitar</button>
              <button class="recusar-btn" onclick="recusar(${id})">Recusar</button>
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
