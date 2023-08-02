AOS.init();

const dataEvento = new Date("Mar 31, 2024 20:00:00");
const timeStampEvento = dataEvento.getTime();

const contaHoras = setInterval(function() {
    const agora = new Date();
    const timeStampAtual = agora.getTime();

    const distanciaAteEvento = timeStampEvento - timeStampAtual;

    const diaEmMs = 1000 * 60 * 60 * 24;
    const horaEmMs = 1000 * 60 * 60;
    const minutoEmMs = 1000 * 60;

    const diasAteEvento = Math.floor(distanciaAteEvento / (diaEmMs));
    const horasAteEvento = Math.floor((distanciaAteEvento % (diaEmMs)) / (horaEmMs));
    const minutosAteEvento = Math.floor((distanciaAteEvento % (horaEmMs)) / (minutoEmMs));
    const segundosAteEvento = Math.floor((distanciaAteEvento % (minutoEmMs)) / 1000);

    document.getElementById('contador').innerHTML = `${diasAteEvento}d ${horasAteEvento}hs ${minutosAteEvento}min ${segundosAteEvento}s`;

    if (distanciaAteEvento < 0) {
        clearInterval(contaHoras);
        document.getElementById('contador').innerHTML = '<br>0d 0hs 0min 0s';
    }
}, 1000);