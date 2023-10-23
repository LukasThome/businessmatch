var form = document.getElementById("signup");

// Função para adicionar um evento
function onSubmit(event) {
  event.preventDefault();

  var evento = {
    titulo: form.elements["titulo"].value,
    local: form.elements["local"].value,
    data: form.elements["data"].value,
    hora: form.elements["hora"].value,
    descricao: form.elements["descricao"].value,
  };
    eel.workWithValuesEvento(evento)();
    console.log(evento.value);
    console.log("create")

    location.reload();


}

function remove() {
  var list = eel.sendEventoList()();
  list.then((l) => {
      l.map(({id}) => {
          document
              .getElementById(`eventoId__${id}`)
              .addEventListener("click", () => {
                  eel.removeEvento(id)();
                  location.reload();
              });
          document
              .getElementById(`eventoId__${id}`)
              .removeEventListener("click", () => {
              });
      });
  });
}


function onEdit(event) {
  var editForm = document.getElementById("edit");

  event.preventDefault();
  var evento = {
      titulo: editForm.elements["titulo"].value,
      local: editForm.elements["local"].value,
      data: editForm.elements["data"].value,
      hora: editForm.elements["hora"].value,
      descricao: editForm.elements["descricao"].value,
      id: document.querySelector("#edit").children[0].id,
  };
  eel.editEvento(evento)();
  location.reload();
}


function generateEditTemplate(titulo, local, data, hora, descricao, id) {
  let eventoCardEdit = `
      <form onsubmit="onEdit(event)" id="edit">
          <div id="${id}">
              <div class="titleContainer">
                  <h2 id="title">Nome: <input name="titulo" value="${titulo}" class="formInput"></h2>
              </div>
              <div class="bodyText">
                  <span
                      >CPNJ:
                      <span id="local"><input name="local" value="${local}" class="formInput"></span>
                  </span>
              </div>
              <div class="bodyText">
                  <span 
                      >CNAE:
                      <span id="data" ><input name="data" value="${data}" class="formInput"></span>
                  </span>
              </div>
              <div class="bodyText">
                  <span
                      >Setor:
                      <span id="hora"><input name="hora" value="${hora} "class="formInput"></span>
                  </span>
              </div>
              <div class="bodyText">
                  <span 
                      >CNAE:
                      <span id="descricao" ><input name="descricao" value="${descricao}" class="formInput"></span>
                  </span>
              </div>
              <div class="inputsContainer">
                    <input type="submit" class="submitBtn editBtn" value="Enviar" />
              </div>
          </div>
      </form>
  `;
  return eventoCardEdit;
}

function edit() {
  var list = eel.sendEventoList()();
  list.then((l) => {
      l.map(({id, titulo, local, data, hora, descricao}) => {
          document.getElementById(`editId__${id}`).addEventListener("click", () => {
              let eventoCardEdit = generateEditTemplate(nome, local, data, hora, id);
              document.getElementById(`cardId__${id}`).innerHTML = eventoCardEdit;
          });
          document
              .getElementById(`editId__${id}`)
              .removeEventListener("click", () => {
              });
      });
  });
}

function logList() {
  var list = eel.sendEventoList()();
  list.then((l) => {
      if (!l) {
          let eventoCard = `<div>Não há eventos cadastradas!</div>`;
          document
              .getElementById("logBtn")
              .insertAdjacentHTML("afterend", eventoCard);
          return;
      }
      l.map(({titulo, local, data, hora, descricao, id}) => {
          let eventoCard = `
              <div class="card" id="cardId__${id}">
                  <div class="titleContainer">
                      <h2 id="title">Nome: ${titulo}</h2>
                      <svg id="eventoId__${id}" onclick="remove()" class="svgIcons w-6 h-6" width="25px" height="25px" xmlns="http://www.w3.org/2000/svg" fill="#a00" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                      </svg>
                      <svg id="editId__${id}" onclick="edit()" class="svgIcons w-6 h-6" width="25px" height="25px" xmlns="http://www.w3.org/2000/svg" fill="#000" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" />
                      </svg>
          
                  </div>
                  <div class="bodyText">
                      <span
                          >LOCAL:
                          <span id="local">${local}</span>
                      </span>
                  </div>
                  <div class="bodyText">
                      <span 
                          >DATA:
                          <span id="data" >${data}</span>
                      </span>
                  </div>
                  <div class="bodyText">
                      <span
                          >HORA:
                          <span id="hora">${hora}</span>
                      </span>
                  </div>
                  <div class="bodyText">
                      <span
                          >DESCRICAO:
                          <span id="descricao">${descricao}</span>
                      </span>
                  </div>


              </div>
          `;
          document
              .getElementById("logBtn")
              .insertAdjacentHTML("afterend", eventoCard);
      });
  });
}

