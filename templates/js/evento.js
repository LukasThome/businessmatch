var form = document.getElementById('signup');

// Defina a função validateTimeFormat no início do seu arquivo JavaScript
function validateTimeFormat(time) {
  var regex = /^([0-1]?[0-9]|2[0-3]):[0-5][0-9](:[0-5][0-9])?$/;

  return regex.test(time);
}

// Função para pesquisar no Google Maps e preencher o campo "LOCAL"
function searchLocationOnMaps() {
  const locationInput = document.getElementById('local').value;
  const googleMapsUrl = `https://www.google.com/maps?q=${encodeURIComponent(
    locationInput
  )}`;
  window.open(googleMapsUrl, '_blank');
}

function openMap() {
  // URL do mapa do Google Maps
  const googleMapsUrl = 'https://www.google.com/maps';
  window.open(googleMapsUrl, '_blank');
}

// Função para adicionar um evento
function onSubmit(event) {
  event.preventDefault();

  var horaValue = form.elements['hora'].value.trim();
  if (!validateTimeFormat(horaValue)) {
    alert('Formato de hora inválido. Use o formato HH:mm ou HH:mm:ss.');
    return;
  }

  var obj = {
    nome_organizacao: null,
    titulo: form.elements['titulo'].value,
    local: form.elements['local'].value, // Usa o campo "localInput" para obter o link do Google Maps
    data: form.elements['data'].value,
    hora: horaValue, // Agora, hora é definida após a validação
    descricao: form.elements['descricao'].value,
  };

  // Verifica se a data é válida e no futuro
  var selectedDate = new Date(obj.data);
  var currentDate = new Date();
  if (selectedDate <= currentDate) {
    alert('A data deve ser no futuro.');
    return;
  }
  eel.workWithValuesEvento(obj)();
  console.log(obj.value);
  console.log('create');

  location.reload();
}

function remove() {
  var list = eel.sendEventoList()();
  list.then((l) => {
    l.map(({ id }) => {
      document
        .getElementById(`eventoId__${id}`)
        .addEventListener('click', () => {
          eel.removeEvento(id)();
          location.reload();
        });
      document
        .getElementById(`eventoId__${id}`)
        .removeEventListener('click', () => {});
    });
  });
}

function onEdit(event) {
  var editForm = document.getElementById('edit');

  var horaValue = editForm.elements['hora'].value.trim();
  if (!validateTimeFormat(horaValue)) {
    alert('Formato de hora inválido. Use o formato HH:mm ou HH:mm:ss.');
    return;
  }
  event.preventDefault();
  var obj = {
    titulo: editForm.elements['titulo'].value,
    local: editForm.elements['local'].value,
    data: editForm.elements['data'].value,
    hora: horaValue, // Agora, hora é definida após a validação
    descricao: editForm.elements['descricao'].value,
    id: document.querySelector('#edit').children[0].id,
  };
  eel.editEvento(obj)();
  location.reload();
}

function generateEditTemplate(titulo, local, data, hora, descricao, id) {
  let eventoCardEdit = `
      <form onsubmit="onEdit(event)" id="edit">
        <div id="${id}">
              <div class="titleContainer">
                  <h2 id="title">Título: <input name="titulo" value="${titulo}" class="formInput"></h2>
              </div>
              <div class="bodyText">
                    <span
                    >LOCAL:
                    <span id="local" ><input name="local" value="${local}" class="formInput"></span>
                    <button type="button" id="searchLocationBtn" class="submitBtn" onclick="searchLocationOnMaps()">Pesquisar no Google Maps</button>
              </div>

              <div class="bodyText">
                  <span 
                      >DATA:
                      <span id="data" ><input type="date" name="data" value="${data}" class="formInput"></span>
                  </span>
              </div>
              <div class="bodyText">
                  <span
                      >HORA:
                      <span id="hora"><input type="time" name="hora" value="${hora}"class="formInput"></span>
                  </span>
              </div>
              <div class="bodyText">
              <span>DESCRICAO:</span>
                <textarea id="descricao" name="descricao" class="formInputDescricao">${descricao}</textarea>
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
    l.map(({ id, titulo, local, data, hora, descricao }) => {
      document.getElementById(`editId__${id}`).addEventListener('click', () => {
        let eventoCardEdit = generateEditTemplate(
          titulo,
          local,
          data,
          hora,
          descricao,
          id
        );
        document.getElementById(`cardId__${id}`).innerHTML = eventoCardEdit;
      });
      document
        .getElementById(`editId__${id}`)
        .removeEventListener('click', () => {});
    });
  });
}

function logList() {
  var list = eel.sendEventoList()();
  list.then((l) => {
    if (!l) {
      let eventoCard = `<div>Não há eventos cadastradas!</div>`;
      document
        .getElementById('logBtn')
        .insertAdjacentHTML('afterend', eventoCard);
      return;
    }
    l.map(({ titulo, local, data, hora, descricao, nome_organizacao, id }) => {
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
                          <a href="https://www.google.com/maps?q=${local}" target="_blank">Ver no Google Maps</a>
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
                  <div class="descricao">
                      <span
                          >DESCRICAO:
                          <span id="descricao">${descricao}</span>
                      </span>
                  </div>
                  <div class="nome_organizacao">
                      <span
                          >NOME_ORG:
                          <span id="nome_organizacao">${nome_organizacao}</span>
                      </span>
                  </div>
              </div>
          `;
      document
        .getElementById('logBtn')
        .insertAdjacentHTML('afterend', eventoCard);
    });
  });
}

function logListViewOnly() {
  var list = eel.sendEventoList()();
  list.then((l) => {
    if (!l) {
      let eventoCard = `<div>Não há eventos cadastradas!</div>`;
      document
        .getElementById('logBtn')
        .insertAdjacentHTML('afterend', eventoCard);
      return;
    }
    l.map(({ titulo, local, data, hora, descricao, id, nome_organizacao }) => {
      let eventoCard = `
                <div class="card" id="cardId__${id}">
                    <div class="titleContainer">
                        <h2 id="title">Nome: ${titulo}</h2>
    
            
                    </div>
                    <div class="bodyText">
                        <span
                            >LOCAL:
                            <a href="https://www.google.com/maps?q=${local}" target="_blank">Ver no Google Maps</a>
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
                    <div class="descricao">
                        <span
                            >DESCRICAO:
                            <span id="descricao">${descricao}</span>
                        </span>
                    </div>
                    <div class="nome_organizacao">
                        <span
                            >NOME_ORG:
                            <span id="nome_organizacao">${nome_organizacao}</span>
                        </span>
                    </div>
                </div>
            `;
      document
        .getElementById('logBtn')
        .insertAdjacentHTML('afterend', eventoCard);
    });
  });
}
