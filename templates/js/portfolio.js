
var form = document.getElementById("signup");

function onSubmit(event) {
  event.preventDefault();
  var obj = {
    nome: form.elements["nome"].value,
    descricao: form.elements["descricao"].value,
  };
  eel.workWithValues(obj)();
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
    id: document.querySelector("#edit").children[0].id,
  };
  eel.editStartup(obj)();
  location.reload();
}

function remove() {
  var list = eel.sendList()();
  list.then((l) => {
    l.map(({ id }) => {
      document
        .getElementById(`startupId__${id}`)
        .addEventListener("click", () => {
          eel.removeStartup(id)();
          location.reload();
        });
      document
        .getElementById(`startupId__${id}`)
        .removeEventListener("click", () => {});
    });
  });
}

function generateEditTemplate(nome, cnpj, cnae, setor, id) {
  let startupCardEdit = `
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
                <span id="setor"><input name="setor" value="${setor} "class="formInput"></span>
            </span>
        </div>
        <div class="inputsContainer">
              <input type="submit" class="submitBtn editBtn" value="Enviar" />
        </div>
        </div>
        </form>
    `;
  return startupCardEdit;
}

function edit() {
  var list = eel.sendList()();
  list.then((l) => {
    l.map(({ id, nome, cnpj, cnae, setor }) => {
      document.getElementById(`editId__${id}`).addEventListener("click", () => {
        let startupCardEdit = generateEditTemplate(nome, cnpj, cnae, setor, id);
        document.getElementById(`cardId__${id}`).innerHTML = startupCardEdit;
      });
      document
        .getElementById(`editId__${id}`)
        .removeEventListener("click", () => {});
    });
  });
}

function logList() {
  var list = eel.sendList()();
  list.then((l) => {
    if (!l) {
      let startupCard = `<div>Não há startups cadastradas!</div>`;
      document
        .getElementById("logBtn")
        .insertAdjacentHTML("afterend", startupCard);
      return;
    }
    l.map(({ nome, cnpj, cnae, setor, id }) => {
      let startupCard = `
    <div class="card" id="cardId__${id}">
        <div class="titleContainer">
            <h2 id="title">Nome: ${nome}</h2>
            <svg id="startupId__${id}" onclick="remove()" class="svgIcons" width="25px" height="25px" xmlns="http://www.w3.org/2000/svg" fill="#a00" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
            </svg>
            <svg id="editId__${id}" onclick="edit()" class="svgIcons" width="25px" height="25px" xmlns="http://www.w3.org/2000/svg" fill="#000" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
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
        .insertAdjacentHTML("afterend", startupCard);
    });
  });
}
