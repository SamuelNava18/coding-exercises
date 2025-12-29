let testText = "El rápido zorro marrón salta sobre el perro perezoso.";
let startTime, endTime;

function startTest() {
    // Establecer el texto de prueba
    document.getElementById("inputText").value = testText;

    // Reiniciar la entrada y salida del usuario
    let userInput = document.getElementById("userInput");
    userInput.value = "";
    userInput.readOnly = false;
    userInput.focus();

    document.getElementById("output").innerHTML = "";

    // Iniciar el temporizador
    startTime = new Date().getTime();
}
function endTest() {
    endTime = new Date().getTime();

    // Deshabilitar la entrada del usuario
    document.getElementById("userInput").readOnly = true;

    // Calcular el tiempo transcurrido y las palabras por minuto (WPM)
    var timeElapsed = (endTime - startTime) / 1000; // en segundos
    var userTypedText = document.getElementById("userInput").value;

    // Dividir el texto usando regex para contar las palabras correctamente
    var typedWords = userTypedText.split(/\s+/).filter(function (word) {
        return word !== "";
    }).length;
    var typedCharacters = userTypedText.length;

    var wpm = 0; // Valor por defecto

    if (timeElapsed !== 0 && !isNaN(typedWords)) {
        wpm = Math.round((typedWords / timeElapsed) * 60);
    }

    // Mostrar los resultados
    var outputDiv = document.getElementById("output");
    outputDiv.innerHTML = "<h2>Resultados de la Prueba de Escritura:</h2>" +
        "<p>Longitud Total: " + typedCharacters + "</p>" +
        "<p>Palabras Escribidas: " + typedWords + "</p>" +
        "<p>Tiempo Transcurrido: " + timeElapsed.toFixed(2) + " segundos</p>" +
        "<p>Palabras Por Minuto (WPM): " + wpm + "</p>"
}
document.addEventListener('keydown', function (e) {
    if (e.key === 'Enter') {
        endTest();
    }
});