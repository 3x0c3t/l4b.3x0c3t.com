document.addEventListener('DOMContentLoaded', function() {
    const myCar = new Car(5, 180);

    document.getElementById('start-btn').addEventListener('click', function() {
        myCar.turnOn();
        console.log("Car started.");
    });

    document.getElementById('stop-btn').addEventListener('click', function() {
        myCar.turnOff();
        console.log("Car stopped.");
    });

    document.getElementById('lower-handbrake-btn').addEventListener('click', function() {
        myCar.lowerHandbrake();
        console.log("Handbrake lowered.");
    });

    document.getElementById('raise-handbrake-btn').addEventListener('click', function() {
        myCar.raiseHandbrake();
        console.log("Handbrake raised.");
    });

    document.getElementById('change-gear-btn').addEventListener('click', function() {
        const newGear = prompt("Enter gear number:");
        if (newGear !== null) {
            myCar.changeGear(parseInt(newGear));
            console.log("Gear changed to " + newGear);
        }
    });

    document.getElementById('accelerate-btn').addEventListener('click', function() {
        myCar.accelerate();
        console.log("Accelerating...");
    });

    document.getElementById('decelerate-btn').addEventListener('click', function() {
        myCar.decelerate();
        console.log("Decelerating...");
    });
});
