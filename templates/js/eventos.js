// Função para inicializar o Datepicker
function initializeDatepicker() {
    $("#calendar").datepicker({
        dateFormat: "yy-mm-dd",
        onSelect: function (dateText, inst) {
            // Nesta função, você pode armazenar a data selecionada em uma variável global
            selectedDate = dateText;
        }
    });
}

// Variável global para armazenar a data selecionada
var selectedDate = "";

// Função para adicionar um evento ao calendário
function addEvent() {
    var eventText = $("#eventInput").val();
    if (eventText && selectedDate) {
        // Verifique se ambos os campos foram preenchidos
        $("#calendar").append(selectedDate + ": " + eventText + "<br>"); // Adicione o evento ao calendário
        $("#eventInput").val('');
    } else {
        alert("Preencha o nome do evento e selecione a data antes de adicionar.");
    }
}

// Função para remover um evento do calendário
function removeEvent() {
    // Aqui você pode implementar a lógica para remover eventos, se desejar
    // Por exemplo, você pode adicionar IDs aos eventos e remover com base no ID
}
