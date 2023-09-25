// Função para adicionar um evento
function addEvent(event) {
    event.preventDefault(); // Evita o envio do formulário

    // Obtenha os valores dos campos do formulário
    var titulo = $("#titulo").val();
    var local = $("#local").val();
    var data = $("#data").val();
    var hora = $("#hora").val();
    var descricao = $("#descricao").val();

    // Valide os campos (adicione mais validações, se necessário)
    if (!titulo || !local || !data || !hora || !descricao) {
        alert("Preencha todos os campos do evento.");
        return;
    }

    // Crie uma div para exibir o evento
    var eventoDiv = document.createElement("div");
    eventoDiv.className = "evento";

    // Preencha a div com informações do evento
    eventoDiv.innerHTML = `
        <h3>${titulo}</h3>
        <p><strong>Local:</strong> ${local}</p>
        <p><strong>Data:</strong> ${data}</p>
        <p><strong>Hora:</strong> ${hora}</p>
        <p><strong>Descrição:</strong> ${descricao}</p>
    `;

    // Adicione o evento à lista de eventos
    $(".eventList").append(eventoDiv);

    // Limpe os campos do formulário
    $("#titulo").val("");
    $("#local").val("");
    $("#data").val("");
    $("#hora").val("");
    $("#descricao").val("");
}

