var body = document.querySelector("body");

let header = `
    <div class="headerContainer">
        <a href="/home.html">
            <img class="headerLogo" src="/assets/logo.png" />
        </a>
        <ul class="menuBarContainer">
            <li class="menuItem"><a href="/home.html" class="linkItem">Home</a></li>
            <div class="dropDownContainer">
                <li class="menuItem dropdownItem">
                    Empresas
                </li>
                <div class="dropdownItems">
                    <li class="menuDropdown">
                        <a href="/cadastroEmpresa.html" class="dropdownItem"
                            >Cadastro de Empresas
                        </a>
                    </li>
                    <li class="menuDropdown">
                        <a href="/gerenciarEmpresas.html" class="dropdownItem"
                            >Gerenciar Empresas
                        </a>
                    </li>
                </div>
            </div>
            <div class="dropDownContainer">
                <li class="menuItem dropdownItem">
                    Startups
                </li>
                <div class="dropdownItems">
                    <li class="menuDropdown">
                        <a href="/cadastroStartup.html" class="dropdownItem"
                            >Cadastro de Startups
                        </a>
                    </li>
                    <li class="menuDropdown">
                        <a href="/gerenciarStartups.html" class="dropdownItem"
                            >Gerenciar Startups
                        </a>
                    </li>
                </div>
            </div>
            <div class="dropDownContainer">
                <li class="menuItem dropdownItem">
                    Eventos
                </li>
                <div class="dropdownItems">
                    <li class="menuDropdown">
                        <a href="/eventos.html" class="dropdownItem"
                            >Mostrar todos os eventos
                        </a>
                    </li>
                    <li class="menuDropdown">
                        <a href="/cadastroEvento.html" class="dropdownItem"
                            >Cadastrar Evento
                        </a>
                    </li>
                    <li class="menuDropdown">
                        <a href="/gerenciarEventos.html" class="dropdownItem"
                            >Gerenciar Eventos
                        </a>
                    </li>
                </div>
            </div>
            <div class="dropDownContainer">
                <li class="menuItem dropdownItem">
                    Portfólios
                </li>
                <div class="dropdownItems">
                    <li class="menuDropdown">
                        <a href="/portfolio.html" class="dropdownItem"
                            >Cadastro de Portfólio
                        </a>
                    </li>
                    <li class="menuDropdown">
                        <a href="/gerenciarportfolios.html" class="dropdownItem"
                            >Gerenciar Portfólios
                        </a>
                    </li>
                </div>
            </div>
            <li class="menuItem">
                <a href="/cadastrarInteresse.html" class="linkItem"
                    >Interesses
                </a>
            </li>
            <div class="dropDownContainer">
                <li class="menuItem dropdownItem">
                    Propostas
                </li>
                <div class="dropdownItems">
                    <li class="menuDropdown">
                        <a href="/cadastroProposta.html" class="dropdownItem"
                            >Cadastro de Proposta
                        </a>
                    </li>
                    <li class="menuDropdown">
                        <a href="/gerenciarPropostas.html" class="dropdownItem"
                            >Gerenciar Propostas
                        </a>
                    </li>
                </div>
            </div>
        </ul>
    </div>
`;

(function getSession() {
  var session = eel.currentSession()();
  session.then((s) => {
    console.log(s);
    /* body.insertAdjacentHTML(
      "beforeend",
      `<li>ID Usuário logado: ${s.id}</li> <li>Tipo: ${s.tipo}</li>`
    ); */
  });
})();
body.insertAdjacentHTML("afterbegin", header);
