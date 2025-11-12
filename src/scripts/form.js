document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");

    if (!form) return;

    form.addEventListener("submit", async (e) => {
        e.preventDefault();
        const data = new FormData(form);

        const msgBox = document.createElement("div");
        msgBox.classList.add("msg-box");
        document.body.appendChild(msgBox);

        msgBox.innerHTML = "⏳ Enviando sua mensagem...";
        msgBox.classList.add("show");

        try {
            const response = await fetch(form.action, {
                method: form.method,
                body: data,
                headers: { "Accept": "application/json" },
            });

            if (response.ok) {
                msgBox.innerHTML = "💌 Mensagem enviada com sucesso!";
                msgBox.style.background = "#ff4d86ff";
                msgBox.style.color = "white";
                form.reset();
            } else {
                msgBox.innerHTML = "😕 Algo deu errado, tente novamente!";
                msgBox.style.background = "#ff9800";
            }
        } catch (error) {
            msgBox.innerHTML = "❌ Erro de conexão! Tente mais tarde.";
            msgBox.style.background = "#f44336";
        }

        setTimeout(() => {
            msgBox.classList.remove("show");
            setTimeout(() => msgBox.remove(), 500);
        }, 3000);
    });
});
