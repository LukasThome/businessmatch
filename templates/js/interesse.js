function logStartupList(list, type) {
  //var list = eel.sendStartupList()();
  return list.then((l) => {
    if (!l) {
      let startupCard = `<div>Não há startups cadastradas!</div>`;
      document
        .getElementById('logBtn')
        .insertAdjacentHTML('afterend', startupCard);
      return;
    }
    return l.map(({ nome, cnpj, cnae, setor, id }) => {
      let startupCard = `
                <div class="card" id="cardId__${id}">
                    <div class="titleContainer">
                        <h2 id="titleStartup__${id}">Nome: ${nome}</h2>
                        ${
                          type === 'cadastro'
                            ? `<svg onclick="addToFavourites('sendStartupList')" id="starId__${id}" xmlns="http://www.w3.org/2000/svg" fill="none" width="25px" height="25px" viewBox="0 0 24 24" stroke-width="1.5" stroke="#fcba03" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                          </svg>`
                            : ''
                        }
                      
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
                    ${
                      type === 'view'
                        ? `
                        <div class="bodyText">
                          <span
                            >Tipo:
                              <span id="tipo">Startup</span>
                          </span>
                        </div>
                    `
                        : ''
                    }
                </div>
            `;
      return startupCard;
    });
  });
}

function logEmpresaList(list, type) {
  //var list = eel.sendEmpresaList()();
  return list.then((l) => {
    if (!l) {
      let empresaCard = `<div>Não há empresas cadastradas!</div>`;
      document
        .getElementById('logBtn')
        .insertAdjacentHTML('afterend', empresaCard);
      return;
    }
    return l.map(({ nome, cnpj, cnae, setor, id }) => {
      let empresaCard = `
                <div class="card" id="cardId__${id}">
                    <div class="titleContainer">
                        <h2 id="titleEmpresa__${id}">Nome: ${nome}</h2>
                            ${
                              type === 'cadastro'
                                ? `<svg onclick="addToFavourites('sendEmpresaList')" id="starId__${id}" xmlns="http://www.w3.org/2000/svg" fill="none" width="25px" height="25px" viewBox="0 0 24 24" stroke-width="1.5" stroke="#fcba03" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                            </svg>`
                                : ''
                            }
                        
                     
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
                    ${
                      type === 'view'
                        ? `
                        <div class="bodyText">
                          <span
                            >Tipo:
                              <span id="tipo">Empresa</span>
                          </span>
                        </div>
                    `
                        : ''
                    }
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
  const list = el.join(' ');
  return `
  <div class="organizacaoItem">
  <h2 class="title">${type}</h2>
    ${list}
  </div>
`;
}

function saveData() {
  const dataToSave = {
    empresas: empresaFavState,
    startups: startupFavState,
  };
  eel.saveInteresse(dataToSave)();
  location.reload();
}

function combineLists() {
  logStartupList(eel.sendStartupList()(), 'cadastro').then((el) => {
    document
      .getElementById('list')
      .insertAdjacentHTML('afterbegin', createTemplate(el, 'Startups'));
  });
  logEmpresaList(eel.sendEmpresaList()(), 'cadastro').then((el) => {
    document
      .getElementById('list')
      .insertAdjacentHTML('beforeend', createTemplate(el, 'Empresas'));
  });
  document
    .getElementById('saveBtn')
    .insertAdjacentHTML(
      'beforeend',
      `<button class='submitBtn' onclick='saveData()'>Salvar</button>`
    );
}
function determineFavStatus(func) {
  var list = eel[func]()();
  return list.then((l) => {
    return l;
  });
}

let empresaFavState = [];
determineFavStatus('sendEmpresaList').then((el) => {
  el.map(({ id }, index) => {
    empresaFavState.push({ id, isFavourite: false, index });
  });
});

let startupFavState = [];
determineFavStatus('sendStartupList').then((el) => {
  el.map(({ id }, index) => {
    startupFavState.push({ id, isFavourite: false, index });
  });
});

function addToFavourites(func) {
  var list = eel[func]()();
  list.then((l) => {
    l.map(({ id, nome, cnpj, cnae, setor }) => {
      let favStateCopy;
      if (func === 'sendEmpresaList') {
        favStateCopy = empresaFavState.find((e) => e.id === id);
      } else {
        favStateCopy = startupFavState.find((e) => e.id === id);
      }

      const listener = () => {
        favStateCopy.isFavourite = !favStateCopy.isFavourite;
        let star = document.getElementById(`starId__${id}`);
        star.remove();
        if (favStateCopy.isFavourite) {
          document
            .getElementById(
              func === 'sendEmpresaList'
                ? `titleEmpresa__${id}`
                : `titleStartup__${id}`
            )
            .insertAdjacentHTML(
              'afterend',
              `<svg onclick="addToFavourites(${
                func === 'sendEmpresaList'
                  ? "'sendEmpresaList'"
                  : "'sendStartupList'"
              })" id="starId__${id}" xmlns="http://www.w3.org/2000/svg" width="25px" height="25px" viewBox="0 0 24 24" stroke-width="1.5" stroke="#fcba03" fill="#fcba03" viewBox="0 0 24 24" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
            </svg>`
            );
        } else {
          document
            .getElementById(
              func === 'sendEmpresaList'
                ? `titleEmpresa__${id}`
                : `titleStartup__${id}`
            )
            .insertAdjacentHTML(
              'afterend',
              `<svg onclick="addToFavourites(${
                func === 'sendEmpresaList'
                  ? "'sendEmpresaList'"
                  : "'sendStartupList'"
              })" id="starId__${id}" xmlns="http://www.w3.org/2000/svg" fill="none" width="25px" height="25px" viewBox="0 0 24 24" stroke-width="1.5" stroke="#fcba03" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
            </svg>`
            );
        }
        if (func === 'sendEmpresaList') {
          empresaFavState[favStateCopy.index] = favStateCopy;
        } else {
          startupFavState[favStateCopy.index] = favStateCopy;
        }
        star.removeEventListener('click', listener);
      };
      document
        .getElementById(`starId__${id}`)
        .addEventListener('click', listener);
    });
  });
}

function handleInteresseTemplate(ids, method) {
  var list = eel[method]()();
  list.then((el) => {
    var fav = el.filter(({ id }) => {
      return ids.find((e) => id === e.id);
    });
    const promise = new Promise((resolve, reject) => resolve(fav));
    var template;
    if (method === 'sendEmpresaList') {
      template = logEmpresaList(promise, 'view');
    } else {
      template = logStartupList(promise, 'view');
    }

    template.then((templates) => {
      templates.map((t) => {
        document
          .getElementById('organizacoes')
          .insertAdjacentHTML('beforeend', t);
      });
    });
  });
}

function printInteresses() {
  var list = eel.loadInteresse()();
  list.then(({ empresas, startups }) => {
    var idsEmpresas = empresas.filter(({ status, id }) => {
      if (status === true) return id;
    });
    var idsStartups = startups.filter(({ status, id }) => {
      if (status === true) return id;
    });
    handleInteresseTemplate(idsEmpresas, 'sendEmpresaList');
    handleInteresseTemplate(idsStartups, 'sendStartupList');
  });
}
