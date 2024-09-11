const elBtn = document.querySelector(".btn");
const elBody = document.querySelector("body");

let record = new webkitSpeechRecognition();

elBtn.onclick = () => {
    record.start();
}

record.lang = "uz-UZ";

record.onend = (evt) => {
    console.log(evt.results[0][0].transcript)
    console.log(evt)
    console.log('Hear');
}

record.onerror = (evt) => {
    console.log(evt + "ukam soqov bo'sang ayb mandamas");
};

record.onresult = (evt) => {
    console.log(evt.results[0][0].transcript);

    if (evt.results[0][0].transcript === 'qizil') {
        elBody.style.backgroundColor = "red"
    }
    if (evt.results[0][0].transcript === 'yashil') {
        elBody.style.backgroundColor = "green"
    }
}