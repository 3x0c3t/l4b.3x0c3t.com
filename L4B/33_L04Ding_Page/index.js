
let percentage = 0;
const percentageText = document.getElementById("percentage");

const loadingInterval = setInterval(() => {
    if (percentage < 100) {
        percentage += 1;
        percentageText.textContent = `${percentage}%`;
    } else {
        clearInterval(loadingInterval);
        window.location.href = "home.html";
    }
}, 40);
