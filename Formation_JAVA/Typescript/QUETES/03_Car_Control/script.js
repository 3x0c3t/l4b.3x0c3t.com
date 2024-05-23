class Car {
    #numGears;
    #maxSpeed;
    #currentGear;
    #currentSpeed;
    #isPowerOn;
    #isHandbrakeOn;

    constructor(numGears, maxSpeed) {
        this.#numGears = numGears;
        this.#maxSpeed = maxSpeed;
        this.#currentGear = 0;
        this.#currentSpeed = 0;
        this.#isPowerOn = false;
        this.#isHandbrakeOn = true;
    }

    turnOn() {
        if (this.#isPowerOn) {
            console.log("La voiture est déjà allumée.");
            return;
        }

        this.#isPowerOn = true;
        document.getElementById("powerStatus").innerText = "Allumé";
        this.displayMessage("Voiture allumée.");
        console.log("Voiture allumée.");
    }

    turnOff() {
        if (!this.#isPowerOn) {
            console.log("La voiture est déjà éteinte.");
            return;
        }

        this.#isPowerOn = false;
        document.getElementById("powerStatus").innerText = "Éteint";
        this.displayMessage("Voiture éteinte.");
        console.log("Voiture éteinte.");
    }

    lowerHandbrake() {
        if (!this.#isHandbrakeOn) {
            console.log("Le frein à main est déjà baissé.");
            return;
        }

        this.#isHandbrakeOn = false;
        document.getElementById("handbrakeStatus").innerText = "Frein à Main Baissé";
        this.displayMessage("Frein à main baissé.");
        console.log("Frein à main baissé.");
    }

    raiseHandbrake() {
        if (this.#isHandbrakeOn) {
            console.log("Le frein à main est déjà levé.");
            return;
        }

        this.#isHandbrakeOn = true;
        document.getElementById("handbrakeStatus").innerText = "Frein à Main Levé";
        this.displayMessage("Frein à main levé.");
        console.log("Frein à main levé.");
    }

    changeGear(gear) {
        if (gear >= 0 && gear <= this.#numGears) {
            this.#currentGear = gear;
            document.getElementById("gearStatus").innerText = `Vitesse : ${gear}`;
            this.displayMessage(`Vitesse changée en ${gear}.`);
            console.log(`Vitesse changée en ${gear}.`);
        } else {
            this.displayMessage("Impossible de changer de vitesse. Veuillez sélectionner une vitesse valide.");
            console.log("Impossible de changer de vitesse. Veuillez sélectionner une vitesse valide.");
        }
    }

    accelerate() {
        if (this.#isPowerOn && !this.#isHandbrakeOn && this.#currentGear > 0 && this.#currentSpeed < this.#maxSpeed) {
            this.#currentSpeed += 5;
            if (this.#currentSpeed > this.#maxSpeed) {
                this.#currentSpeed = this.#maxSpeed;
            }
            this.updateSpeed();
            this.displayMessage("Accélération.");
            console.log("Accélération.");
        } else if (!this.#isPowerOn) {
            this.displayMessage("Impossible d'accélérer. Veuillez d'abord allumer la voiture.");
            console.log("Impossible d'accélérer. Veuillez d'abord allumer la voiture.");
        } else if (this.#isHandbrakeOn) {
            this.displayMessage("Impossible d'accélérer. Veuillez d'abord baisser le frein à main.");
            console.log("Impossible d'accélérer. Veuillez d'abord baisser le frein à main.");
        } else if (this.#currentGear === 0) {
            this.displayMessage("Impossible d'accélérer. Veuillez engager une vitesse.");
            console.log("Impossible d'accélérer. Veuillez engager une vitesse.");
        } else {
            this.displayMessage("La vitesse maximale est atteinte.");
            console.log("La vitesse maximale est atteinte.");
        }
    }

    decelerate() {
        if (this.#isPowerOn && !this.#isHandbrakeOn && this.#currentSpeed > 0) {
            this.#currentSpeed -= 5;
            if (this.#currentSpeed < 0) {
                this.#currentSpeed = 0;
            }
            this.updateSpeed();
            this.displayMessage("Décélération.");
            console.log("Décélération.");
        } else if (!this.#isPowerOn) {
            this.displayMessage("Impossible de décélérer. Veuillez d'abord allumer la voiture.");
            console.log("Impossible de décélérer. Veuillez d'abord allumer la voiture.");
        } else if (this.#isHandbrakeOn) {
            this.displayMessage("Impossible de décélérer. Veuillez d'abord baisser le frein à main.");
            console.log("Impossible de décélérer. Veuillez d'abord baisser le frein à main.");
        } else if (this.#currentSpeed === 0) {
            this.displayMessage("La voiture est déjà à l'arrêt.");
            console.log("La voiture est déjà à l'arrêt.");
        }
    }

    getCurrentGear() {
        return this.#currentGear;
    }

    getCurrentSpeed() {
        return this.#currentSpeed;
    }

    displayMessage(message) {
        document.getElementById("actionMessage").innerText = message;
        console.log(message);
    }

    updateSpeed() {
        document.getElementById("speedStatus").innerText = `Vitesse : ${this.#currentSpeed} km/h`;
    }
}

const myCar = new Car(5, 180);

document.getElementById("turnOnBtn").addEventListener("click", () => {
    myCar.turnOn();
});

document.getElementById("turnOffBtn").addEventListener("click", () => {
    myCar.turnOff();
});

document.getElementById("lowerHandbrakeBtn").addEventListener("click", () => {
    myCar.lowerHandbrake();
});

document.getElementById("raiseHandbrakeBtn").addEventListener("click", () => {
    myCar.raiseHandbrake();
});

document.getElementById("gearUpBtn").addEventListener("click", () => {
    myCar.changeGear(myCar.getCurrentGear() + 1);
});

document.getElementById("gearDownBtn").addEventListener("click", () => {
    myCar.changeGear(myCar.getCurrentGear() - 1);
});

document.getElementById("accelerateBtn").addEventListener("click", () => {
    myCar.accelerate();
});

document.getElementById("decelerateBtn").addEventListener("click", () => {
    myCar.decelerate();
});
