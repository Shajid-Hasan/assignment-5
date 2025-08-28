
function updateClock() {
        const now = new Date();
        document.getElementById("clock").textContent = now.toLocaleTimeString();
    }

    updateClock();                 // run once immediately
    setInterval(updateClock, 1000);