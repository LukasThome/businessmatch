function logStartupList() {
  var list = eel.sendStartupList()();
  return list.then((l) => {
    if (!l) {
      let startupCard = `<div>Não há startups cadastradas!</div>`;
      document
        .getElementById("logBtn")
        .insertAdjacentHTML("afterend", startupCard);
      return;
    }
    return l.map(({ nome, cnpj, cnae, setor, id }) => {
      let startupCard = `
                <div class="card" id="cardId__${id}">
                    <div class="titleContainer">
                        <h2 id="title">Nome: ${nome}</h2>
                        <svg id="starId__${id}" xmlns="http://www.w3.org/2000/svg" width="25px" height="25px" viewBox="0 0 24 24" stroke-width="1.5" stroke="#fcba03" fill="#fcba03" viewBox="0 0 24 24" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                        </svg>
                        <svg id="starId__${id}" xmlns="http://www.w3.org/2000/svg" fill="none" width="25px" height="25px" viewBox="0 0 24 24" stroke-width="1.5" stroke="#fcba03" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
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
      return startupCard;
    });
  });
}

function logEmpresaList() {
  var list = eel.sendEmpresaList()();
  return list.then((l) => {
    if (!l) {
      let empresaCard = `<div>Não há empresas cadastradas!</div>`;
      document
        .getElementById("logBtn")
        .insertAdjacentHTML("afterend", empresaCard);
      return;
    }
    return l.map(({ nome, cnpj, cnae, setor, id }) => {
      let empresaCard = `
                <div class="card" id="cardId__${id}">
                    <div class="titleContainer">
                        <h2 id="titleEmpresa__${id}">Nome: ${nome}</h2>
                        
                            <svg onclick="addToFavouritesEmpresa()" id="starId__${id}" xmlns="http://www.w3.org/2000/svg" fill="none" width="25px" height="25px" viewBox="0 0 24 24" stroke-width="1.5" stroke="#fcba03" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
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
      return empresaCard;
      /* document
        .getElementById("logBtn")
        .insertAdjacentHTML("afterend", empresaCard); */
    });
  });
}

function createTemplate(el, type) {
  return `
  <div class="organizacaoItem">
    <h2 class="title">${type}</h2>
    ${el}
    </div>
`;
}

function combineLists() {
  logEmpresaList().then((el) => {
    document
      .getElementById("list")
      .insertAdjacentHTML("afterbegin", createTemplate(...el, "Empresas"));
  });
  logStartupList().then((el) => {
    document
      .getElementById("list")
      .insertAdjacentHTML("afterbegin", createTemplate(el, "Startups"));
  });
}
function determineFavStatus() {
  var list = eel.sendEmpresaList()();
  return list.then((l) => {
    return l;
  });
}

let empresaFavState = [];
determineFavStatus().then((el) => {
  el.map(({ id }, index) => {
    empresaFavState.push({ id, isFavourite: false, index });
  });
});

function addToFavouritesEmpresa() {
  var list = eel.sendEmpresaList()();
  console.log(empresaFavState);
  list.then((l) => {
    l.map(({ id, nome, cnpj, cnae, setor }) => {
      let favStateCopy = empresaFavState.find((e) => e.id === id);
      const listener = () => {
        favStateCopy.isFavourite = !favStateCopy.isFavourite;
        let star = document.getElementById(`starId__${id}`);
        star.remove();
        if (favStateCopy.isFavourite) {
          document.getElementById(`titleEmpresa__${id}`).insertAdjacentHTML(
            "afterend",
            `<svg onclick="addToFavouritesEmpresa()" id="starId__${id}" xmlns="http://www.w3.org/2000/svg" width="25px" height="25px" viewBox="0 0 24 24" stroke-width="1.5" stroke="#fcba03" fill="#fcba03" viewBox="0 0 24 24" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
            </svg>`
          );
        } else {
          document.getElementById(`titleEmpresa__${id}`).insertAdjacentHTML(
            "afterend",
            `<svg onclick="addToFavouritesEmpresa()" id="starId__${id}" xmlns="http://www.w3.org/2000/svg" fill="none" width="25px" height="25px" viewBox="0 0 24 24" stroke-width="1.5" stroke="#fcba03" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
            </svg>`
          );
        }
        empresaFavState[favStateCopy.index] = favStateCopy;
        star.removeEventListener("click", listener);
      };
      document
        .getElementById(`starId__${id}`)
        .addEventListener("click", listener);
    });
  });
}
