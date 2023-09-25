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
            <li class="menuItem">
                <a href="/eventos.html" class="linkItem"
                    >Eventos
                </a>
            </li>
            <li class="menuItem">
            <a href="/gerenciarEmpresas.html" class="linkItem"
                >Gerenciar Empresas
            </a>
            <li class="menuItem">
            <a href="/portfolio.html" class="linkItem"
                >Portfólio
            </a>
        </li>
        </ul>
    </div>
`;

body.insertAdjacentHTML("afterbegin", header);