document.addEventListener("DOMContentLoaded", () => {
    const popupHTML = `
    <div id="popup1" class="overlay">
        <div class="popup">
            <a class="fechar" href="#"><i class="ph ph-x"></i></a>
            <h3>Deseja sair da sua conta?</h3>

            <div class="conteudo">
                <a href="#"><h4>Voltar</h4></a>
                <a href="#" onclick="sair()"><h4>Sair</h4></a>
            </div>
        </div>
    </div>
    `;

    document.body.insertAdjacentHTML("beforeend", popupHTML);
});

function salvarPagina() {
    sessionStorage.setItem("returnTo", window.location.href);
}

