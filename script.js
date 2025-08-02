// Countdown Timer
function getNextFriendshipDay() {
    let now = new Date();
    let year = now.getFullYear();
    let date = new Date(year, 7, 1);
    while (date.getDay() !== 0) {
        date.setDate(date.getDate() + 1);
    }
    if (date < now) {
        year++;
        date = new Date(year, 7, 1);
        while (date.getDay() !== 0) {
            date.setDate(date.getDate() + 1);
        }
    }
    return date;
}

function updateCountdown() {
    let target = getNextFriendshipDay();
    let now = new Date();
    let diff = target - now;

    let days = Math.floor(diff / (1000 * 60 * 60 * 24));
    let hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    let minutes = Math.floor((diff / (1000 * 60)) % 60);
    let seconds = Math.floor((diff / 1000) % 60);

    document.getElementById("timer").innerHTML =
        `${days}d ${hours}h ${minutes}m ${seconds}s`;
}
setInterval(updateCountdown, 1000);
updateCountdown();

// Friendship Quotes
const quotes = [
    "A real friend is one who walks in when the rest of the world walks out.",
    "Friendship is the only cement that will ever hold the world together.",
    "A friend is someone who knows all about you and still loves you.",
    "Good friends are like stars. You don’t always see them, but you know they’re always there.",
    "Friendship is the golden thread that ties the heart of all the world."
];
function newQuote() {
    let randomIndex = Math.floor(Math.random() * quotes.length);
    document.getElementById("quote").innerText = quotes[randomIndex];
}
setInterval(newQuote, 5000);
newQuote();

// Music Control
function toggleMusic() {
    let music = document.getElementById("bgMusic");
    if (music.paused) {
        music.play();
    } else {
        music.pause();
    }
}

// Falling Hearts Background Animation
const canvas = document.getElementById("heartsCanvas");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let hearts = [];
function createHeart() {
    hearts.push({
        x: Math.random() * canvas.width,
        y: -10,
        size: Math.random() * 20 + 10,
        speed: Math.random() * 2 + 1
    });
}
function drawHearts() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "red";
    hearts.forEach((heart, index) => {
        ctx.beginPath();
        ctx.moveTo(heart.x, heart.y);
        ctx.arc(heart.x - heart.size / 2, heart.y, heart.size / 2, 0, Math.PI, true);
        ctx.arc(heart.x + heart.size / 2, heart.y, heart.size / 2, 0, Math.PI, true);
        ctx.lineTo(heart.x, heart.y + heart.size);
        ctx.closePath();
        ctx.fill();

        heart.y += heart.speed;
        if (heart.y > canvas.height) {
            hearts.splice(index, 1);
        }
    });
}
setInterval(createHeart, 300);
function animate() {
    drawHearts();
    requestAnimationFrame(animate);
}
animate();

window.addEventListener("resize", () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});
// Responsive Design
document.addEventListener("DOMContentLoaded", () => {
    const timer = document.getElementById("timer");
    const quote = document.getElementById("quote");
    const musicButton = document.getElementById("musicButton");

    function adjustLayout() {
        if (window.innerWidth < 600) {
            timer.style.fontSize = "1.5em";
            quote.style.fontSize = "1.2em";
            musicButton.style.width = "100px";
        } else {
            timer.style.fontSize = "2em";
            quote.style.fontSize = "1.5em";
            musicButton.style.width = "150px";
        }
    }
    adjustLayout();
    window.addEventListener("resize", adjustLayout);
});
// Dark Mode Toggle
const darkModeToggle = document.getElementById("darkModeToggle");
darkModeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    const isDarkMode = document.body.classList.contains("dark-mode");
    localStorage.setItem("darkMode", isDarkMode);
});
