
// ================= FRASES ROTATIVAS DA HOME =================
const frasesHome = [
    "Estruturamos sua presença digital para gerar clientes.",
    "Seu negócio não precisa de mais posts. Precisa de estrutura.",
    "Transformamos ideias em presença digital profissional.",
    "Construindo estruturas digitais que geram resultado.",
    "Seu digital precisa funcionar, não apenas existir.",
    "Criamos presença, estratégia e resultado.",
    "Tecnologia com propósito. Estrutura com resultado.",
    "O digital do seu negócio precisa transmitir valor.",
    "Sua presença digital define como o mercado enxerga você.",
    "Não criamos apenas sites. Construímos estruturas de crescimento."
];

let indiceFrase = 0;
const elementoTexto = document.getElementById('texto-animado');

setInterval(() => {
    elementoTexto.style.opacity = 0;
    setTimeout(() => {
        indiceFrase = (indiceFrase + 1) % frasesHome.length;
        elementoTexto.innerText = frasesHome[indiceFrase];
        elementoTexto.style.opacity = 1;
    }, 500);
}, 4000); // Troca a frase a cada 4 segundos

elementoTexto.style.transition = "opacity 0.5s ease-in-out";

// ================= EFEITO SONDORA SYSTEMS (ROTAÇÃO E BLUR) =================
/* * Aqui é o efeito de rotação e blur na logo.
    * Quando clicar em Sondora Systems, prevenimos o link padrão, aplicamos a classe na logo,
    * esperamos 1 segundo (tempo da animação configurada no CSS) e redirecionamos.
    */
const linkSystems = document.getElementById('link-systems');
const logo = document.getElementById('logo-sondora');

linkSystems.addEventListener('click', function(evento) {
    evento.preventDefault(); // Evita abrir o link imediatamente
    
    // Adiciona a classe que faz a rotação e o desfoque
    logo.classList.add('efeito-transformacao-logo');

    // Aguarda 1 segundo e redireciona para uma página em branco (ou URL de sistemas)
    setTimeout(() => {
        // Remove a classe para caso o usuário volte pelo botão do navegador
        logo.classList.remove('efeito-transformacao-logo');

        window.location.href = 'sondora-systems.html'; 
    }, 1000); 
});

// ================= SCRIPT DO POPUP ALEATÓRIO (AVAGRAT) =================
// Sorteia um número entre 0 e 1. Tem cerca de 30% de chance de aparecer.
function checarSorteio() {
    const chance = Math.random();
    // Para testar sempre, pode-se mudar o 0.3 para 1.1 (vai abrir toda vez)
    if (chance < 0.3) { 
        setTimeout(() => {
            document.getElementById('fundo-modal').style.display = 'flex';
        }, 3000); // Espera 3 segundos após abrir o site
    }
}

function fecharModal() {
    document.getElementById('fundo-modal').style.display = 'none';
}

// Executa o sorteio ao carregar a página
window.onload = checarSorteio;

//Correção para abrir e fechar menu mobile
const botaoMenuMobile = document.getElementById('botao-menu-mobile');
const menuPrincipal = document.getElementById('menu-principal');

botaoMenuMobile.addEventListener('click', () => {
    menuPrincipal.classList.toggle('ativo');
});

//Abrir e fechar o submenu "sondora group" no dispositivo móvel
const menuSuspenso = document.querySelector('.item-menu-suspenso');

menuSuspenso.addEventListener('click', (e) => {

    if (window.innerWidth <= 768) {

        if (e.target.closest('.menu-suspenso-conteudo a')) {
            return;
        }

        e.stopPropagation();

        menuSuspenso.classList.toggle('ativo');
    }
});