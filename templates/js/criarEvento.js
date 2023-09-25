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
    descricao: descricao
  };

  eventos.push(evento);

  localStorage.setItem("eventos", JSON.stringify(eventos));
  console.log(eventos)

  $("#titulo").val("");
  $("#local").val("");
  $("#data").val("");
  $("#hora").val("");
  $("#descricao").val("");

  criarCardEvento(evento);
  console.log(eventos)
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

  $(".eventList").append(eventoDiv);
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
