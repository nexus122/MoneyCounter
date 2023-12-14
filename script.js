class SalarioPorSegundo {
    salarioBrutoAnual = 26000;
    amount = 0;
    time = 0;
    resultado = document.getElementById("resultado");
    contador = document.getElementById("contador");
    intervalId = null;
    playButton = document.getElementById("playButton");
    pauseButton = document.getElementById("pauseButton");
    resetButton = document.getElementById("resetButton");

    constructor() {
        this.playButton.addEventListener("click", () => this.start());
        this.pauseButton.addEventListener("click", () => this.pause());
        this.resetButton.addEventListener("click", () => this.reset());
        this.pauseButton.style.display = "none";
    }

    start = () => {
        if (this.intervalId === null) {
            this.intervalId = setInterval(() => {
                this.addAmount();
                this.updateTime();
            }, 1000);
            this.playButton.style.display = "none";
            this.pauseButton.style.display = "inline-block";
        }
    };

    pause = () => {
        clearInterval(this.intervalId);
        this.intervalId = null;
        this.playButton.style.display = "inline-block";
        this.pauseButton.style.display = "none";
    };

    reset = () => {
        this.amount = 0;
        this.time = 0;
        this.drawAmount();
        this.resetTime();
        //this.playButton.style.display = "inline-block";
        //this.pauseButton.style.display = "none";
    };

    getSalarioBrutoSegundo = () => {
        return this.salarioBrutoAnual / 12 / 22 / 8 / 60 / 60;
    };

    addAmount = () => {
        this.amount += this.getSalarioBrutoSegundo();
        this.drawAmount();
    };

    drawAmount = () => {
        this.resultado.innerHTML = `${this.amount.toFixed(2)}€`;
        document.title = `${this.amount.toFixed(2)}€ ${this.getTimeString()}`;
    };

    updateTime = () => {
        this.time++;
        this.contador.innerHTML = this.getTimeString();
        document.title = `${this.amount.toFixed(2)}€ ${this.getTimeString()}`;
    };

    resetTime = () => {
        this.time = 0;
        this.contador.innerHTML = "00:00:00";
        document.title = "0.00€ 00:00:00";
    };

    getTimeString = () => {
        const hours = Math.floor(this.time / 3600);
        const minutes = Math.floor((this.time % 3600) / 60);
        const seconds = this.time % 60;
        return `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
    };
}

const main = new SalarioPorSegundo();