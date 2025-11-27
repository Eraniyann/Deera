setInterval(() => {
    let heart = document.createElement("div");
    heart.innerHTML = "💘";
    heart.style.position = "fixed";
    heart.style.left = Math.random() * window.innerWidth + "px";
    heart.style.fontSize = "30px";
    heart.style.top = "100vh";
    heart.style.transition = "8s linear";
    document.body.appendChild(heart);
    setTimeout(() => { heart.style.top = "-10vh"; }, 100);
    setTimeout(() => { heart.remove(); }, 8000);
}, 1200);
