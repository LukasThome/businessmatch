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
    name: form.elements["name"].value,
    other: form.elements["other"].value,
  };
  eel.workWithValues(obj)();
}
