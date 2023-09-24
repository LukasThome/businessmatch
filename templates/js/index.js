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

function logList() {
  var list = eel.sendList()();
  list.then((l) => console.log(l));
}
