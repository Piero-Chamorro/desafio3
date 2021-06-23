// texto por recorrer
const text = [
    "Primera porción de texto",
    "Segunda porción de texto",
    "Tercera porción de texto"
];

const delay = d => {
    for (let i = 0; i < d * 3e6; i++);
};

const timeOut = (word, time) => {
    console.log(word);
    delay((time / 300));
};

const readText = (text, time, totalWords, callback) => {
    const words = text.split(" ");
    for (let i = 0; i < words.length; i++) {
        timeOut(words[i], time);
    }
    totalWords += words.length;
    setTimeout(
        callback(false, totalWords), time
    );
};

const operation = (text, time) => {
    console.log("Leyendo el texto");
    readText(text[0], time, 0, (_error, totalWords) => {
        readText(text[1], time, totalWords, (_error, totalWords) => {
            readText(text[2], time,  totalWords, (_error, totalWords) =>{
                console.log("Proceso completado");
                console.log(`Total de palabras: ${totalWords}`);
            });
        });
    });
};
operation(text, 1000);