function init(){
    divLog = document.querySelector(".logado")

    const user = JSON.parse(sessionStorage.getItem("user"))

    if (user) {
        divLog.innerHTML += `
        <div class="usuario">
            <img src="/assets/users/axolot.svg" alt="Imagem de um axolot">
            <h4>${user.nome}</h4>
        </div>
        <a href="#popup1"><i class="ph ph-sign-out"></i></a>
        `;
        return;
    }

    divLog.innerHTML += `
        <a href="/login-cad/login.html" onclick="salvarPagina()">Entrar</a>
        <a href="/login-cad/cadastro.html">Cadastrar</a>
        <a href="/login-cad/login.html"  onclick="salvarPagina()">
            <img src="/assets/login-cadastrp/user.svg" alt="Imagem de usuário não cadastrado">
        </a>
    `;
}

init()

function sair() {
    sessionStorage.removeItem("user");

    history.replaceState(null, null, window.location.pathname);

    window.location.reload();
}



function acessarRanking() {
    const user = JSON.parse(sessionStorage.getItem("user"));

    if (!user) {
        alert("Você precisa estar logado para acessar o Ranking!");
        salvarPagina();
        window.location.href = "/login-cad/login.html";
        return;
    }

    salvarPagina();
    window.location.href = "/ranking.html";
}

