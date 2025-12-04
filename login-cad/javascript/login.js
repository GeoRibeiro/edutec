const button = document.querySelector("button");

button.onclick = (event) => {
    event.preventDefault();
    login();
}

async function login() {
    const email = document.querySelector("#email").value;
    const password = document.querySelector("#password").value;

    const res = await fetch("https://backend-edutec-six.vercel.app/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password })
    });

    const data = await res.json();

    if (data.message) {
        alert(data.message);
        return;
    }

    const id = data.id;
    const nome = data.name;

    sessionStorage.setItem("user", JSON.stringify({ id, nome }));

    alert("Login efetuado com sucesso!");

    history.replaceState(null, null, "/");

    const backPage = sessionStorage.getItem("returnTo") || "/index.html";
    sessionStorage.removeItem("returnTo");

    window.location.href = backPage;
}
