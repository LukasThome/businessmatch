var body = document.querySelector("body");

let header = `
    <div class="headerContainer">
        <a href="/home.html">
            <img class="headerLogo" src="/assets/logo.png" />
        </a>
        <ul class="menuBarContainer">
            <li class="menuItem"><a href="/home.html" class="linkItem">Home</a></li>
            <li class="menuItem">
                <a href="/cadastroEmpresa.html" class="linkItem"
                    >Cadastro de Empresas
                </a>
            </li>
            <li class="menuItem">
                <a href="/cadastroStartup.html" class="linkItem"
                    >Cadastro de Startup
                </a>
            </li>
            <li class="menuItem">
                <a href="/gerenciarStartups.html" class="linkItem"
                    >Gerenciar Startups
                </a>
            </li>
        </ul>
    </div>
`;

body.insertAdjacentHTML("afterbegin", header);

var form = document.getElementById("signup");

function onSubmit(event) {
  event.preventDefault();
  var obj = {
    nome: form.elements["nome"].value,
    cnpj: form.elements["cnpj"].value,
    cnae: form.elements["cnae"].value,
    setor: form.elements["setor"].value,
    pergunta1: form.elements["pergunta1"].value,
    pergunta2: form.elements["pergunta2"].value,
    pergunta3: form.elements["pergunta3"].value,
  };
  eel.workWithValues(obj)();
}

function remove() {
  var list = eel.sendList()();
  list.then((l) => {
    l.map(({ id }) => {
      document
        .getElementById(`startupId__${id}`)
        .addEventListener("click", () => {
          eel.removeStartup(id)();
        });
      document
        .getElementById(`startupId__${id}`)
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
    <div class="card">
        <div class="titleContainer">
            <h2 id="title">Nome: ${nome}</h2>
            <svg id="startupId__${id}" onclick="remove()" class="trash" width="25px" height="25px" xmlns="http://www.w3.org/2000/svg" fill="#a00" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
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
