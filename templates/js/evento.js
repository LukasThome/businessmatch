var eventos = [];

// Função para adicionar um evento
function addEvent(event) {
  event.preventDefault();

  var titulo = $("#titulo").val();
  var local = $("#local").val();
  var data = $("#data").val();
  var hora = $("#hora").val();
  var descricao = $("#descricao").val();

  var evento = {
    titulo: titulo,
    local: local,
    data: data,
    hora: hora,
    descricao: descricao,
  };

  eventos.push(evento);

  localStorage.setItem("eventos", JSON.stringify(eventos));
  console.log(eventos);

  $("#titulo").val("");
  $("#local").val("");
  $("#data").val("");
  $("#hora").val("");
  $("#descricao").val("");

  criarCardEvento(evento);
  console.log(eventos);
}

// Função para criar um card de evento
function criarCardEvento(evento) {
  var eventoDiv = document.createElement("div");
  eventoDiv.className = "eventCard";

  eventoDiv.innerHTML = `
        <h3>${evento.titulo}</h3>
        <p><strong>Local:</strong> ${evento.local}</p>
        <p><strong>Data:</strong> ${evento.data}</p>
        <p><strong>Hora:</strong> ${evento.hora}</p>
        <p><strong>Descrição:</strong> ${evento.descricao}</p>
    `;

  //$(".eventList").append(eventoDiv);
}

$(document).ready(function () {
  var eventosSalvos = localStorage.getItem("eventos");

  if (eventosSalvos) {
    eventos = JSON.parse(eventosSalvos);

    eventos.forEach(function (evento) {
      criarCardEvento(evento);
    });
  }
});

$(document).ready(function () {
  var eventosSalvos = localStorage.getItem("eventos");

  if (eventosSalvos) {
    eventos = JSON.parse(eventosSalvos);

    if (eventos.length === 0) {
      // Se o array de eventos estiver vazio, exibir uma mensagem
      $(".eventList").html("<p>Nenhum evento cadastrado.</p>");
    } else {
      eventos.forEach(function (evento) {
        criarCardEvento(evento);
      });
    }
  } else {
    // Se não houver eventos salvos, exibir uma mensagem
    $(".eventList").html("<p>Nenhum evento cadastrado.</p>");
  }
});

function editEvent(eventoIndex) {
  // Recupera o evento do array eventos pelo índice
  var evento = eventos[eventoIndex];

  // Crie um formulário de edição preenchido com os detalhes do evento
  var eventoEditForm = `
    <form onsubmit="saveEditedEvent(${eventoIndex}); return false;">
    <label for="edit-titulo">Título:</label>
    <input type="text" id="edit-titulo" value="${evento.titulo}" required><br>
    <label for="edit-local">Local:</label>
    <input type="text" id="edit-local" value="${evento.local}" required><br>
    <label for="edit-data">Data:</label>
    <input type="date" id="edit-data" value="${evento.data}" required><br>
    <label for="edit-hora">Hora:</label>
    <input type="time" id="edit-hora" value="${evento.hora}" required><br>
    <label for="edit-descricao">Descrição:</label>
    <input type="text" id="edit-descricao" value="${evento.descricao}" required><br>
    <button type="submit">Salvar</button>
    </form>
    `;

  // Substitui o conteúdo do card do evento pelo formulário de edição
  var eventoCard = document.getElementById(`evento-card-${eventoIndex}`);
  eventoCard.innerHTML = eventoEditForm;
}

function saveEditedEvent(eventoIndex) {
  // Recupera o evento editado do formulário
  var editedEvento = {
    titulo: document.getElementById("edit-titulo").value,
    local: document.getElementById("edit-local").value,
    data: document.getElementById("edit-data").value,
    hora: document.getElementById("edit-hora").value,
    descricao: document.getElementById("edit-descricao").value
    // Adicione campos adicionais para outros detalhes do evento aqui
  };

  // Atualiza o evento no array eventos
  eventos[eventoIndex] = editedEvento;

  // Atualiza o Local Storage
  localStorage.setItem("eventos", JSON.stringify(eventos));

  // Atualiza o card do evento com os detalhes editados
  criarCardEvento(editedEvento);

  // Informa ao usuário que o evento foi editado
  alert("Evento editado com sucesso!");

  // Limpa o card de edição
  var eventoCard = document.getElementById(`evento-card-${eventoIndex}`);
  eventoCard.innerHTML = ""; // Limpa o conteúdo do card de edição
}

function deleteEvent(eventoIndex) {
  // Remove o evento do array eventos pelo índice
  eventos.splice(eventoIndex, 1);

  // Atualiza o Local Storage
  localStorage.setItem("eventos", JSON.stringify(eventos));

  // Remove o card do evento da lista
  var eventoCard = document.getElementById(`evento-card-${eventoIndex}`);
  eventoCard.remove();

  // Informa ao usuário que o evento foi excluído
  alert("Evento excluído com sucesso!");
}

function logList() {
  console.log("entrou");
  // Verifica se o array de eventos está vazio
  if (eventos.length === 0) {
    // Se estiver vazio, exibe uma mensagem
    var noEventMessage = "<p>Nenhum evento cadastrado.</p>";
    $(".eventList").html(noEventMessage);
  } else {
    // Se houver eventos, cria os cards dos eventos
    eventos.forEach(function (evento, eventoIndex) {
      var eventoCard = document.createElement("div");
      eventoCard.className = "eventCard";
      eventoCard.id = `evento-card-${eventoIndex}`;

      eventoCard.innerHTML = `
          <h3>${evento.titulo}</h3>
          <p><strong>Local:</strong> ${evento.local}</p>
          <p><strong>Data:</strong> ${evento.data}</p>
          <p><strong>Hora:</strong> ${evento.hora}</p>
          <p><strong>Descrição:</strong> ${evento.descricao}</p>
          <button onclick="editEvent(${eventoIndex})">Editar</button>
          <button onclick="deleteEvent(${eventoIndex})">Excluir</button>
      `;

      $(".eventList").append(eventoCard);
    });
  }
} 
