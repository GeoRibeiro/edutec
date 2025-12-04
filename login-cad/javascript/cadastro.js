const button = document.querySelector("button");

button.onclick = (event) => {
    event.preventDefault();
    signUpUser();
};

async function signUpUser() {
    const name = document.querySelector("#nome").value.trim();
    const email = document.querySelector("#email").value.trim();
    const password = document.querySelector("#password").value.trim();
    const confirm_password = document.querySelector("#confirm_password").value.trim();

    // validação
    if (!name || !email || !password || !confirm_password) {
        alert("Por favor, preencha todos os campos antes de continuar.");
        return;
    }

    if (password !== confirm_password) {
        alert("As senhas não coincidem!");
        return;
    }

    const user = { name, email, password, confirm_password };

    const response = await fetch("https://backend-edutec-six.vercel.app/cadastrar", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ user })
    }).then(res => res.json());

    alert(response.message);

    const backPage = sessionStorage.getItem("returnTo") || "/index.html";

    sessionStorage.removeItem("returnTo");

    window.location.href = backPage;
}
