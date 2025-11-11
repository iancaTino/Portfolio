document.addEventListener("DOMContentLoaded", () => {
    const container = document.querySelector(".flower-container");

    if (container) {
        for (let i = 1; i <= 20; i++) {
            const flower = document.createElement("div");
            flower.textContent = "🌸";
            flower.style.left = `${Math.random() * 100}%`;
            flower.style.animationDuration = `${4 + Math.random() * 4}s`;
            flower.style.fontSize = `${1 + Math.random() * 1.5}rem`;
            container.appendChild(flower);
        }
    }
});
