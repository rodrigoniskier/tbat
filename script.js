// Espera todo o HTML ser carregado para executar o script
document.addEventListener('DOMContentLoaded', () => {

    // Seletores dos elementos da interface
    const contentFrame = document.getElementById('content-frame');
    const navButtons = document.querySelectorAll('.nav-button');
    const menuToggleButton = document.getElementById('menu-toggle');
    const sidebar = document.querySelector('.sidebar');

    // --- Lógica de Navegação Principal ---

    // Função para definir o botão ativo
    function setActiveButton(clickedButton) {
        // Remove a classe 'active' de todos os botões
        navButtons.forEach(button => {
            button.classList.remove('active');
        });
        // Adiciona a classe 'active' apenas ao botão que foi clicado
        clickedButton.classList.add('active');
    }

    // Adiciona um evento de clique para cada botão de navegação
    navButtons.forEach(button => {
        button.addEventListener('click', () => {
            const pageToLoad = button.dataset.page;

            // Altera a página no iframe
            contentFrame.src = pageToLoad;

            // Atualiza o botão ativo
            setActiveButton(button);
            
            // Se estiver em modo mobile, fecha a sidebar após o clique
            if (window.innerWidth <= 992) {
                document.body.classList.remove('sidebar-open');
            }
        });
    });

    // --- Lógica do Menu Responsivo (Mobile) ---

    // Adiciona evento de clique para o botão "hambúrguer"
    menuToggleButton.addEventListener('click', (e) => {
        e.stopPropagation(); // Impede que o clique feche o menu imediatamente
        document.body.classList.toggle('sidebar-open');
    });
    
    // Opcional: Fecha a sidebar se o usuário clicar fora dela no mobile
    document.querySelector('.main-content').addEventListener('click', () => {
        if (document.body.classList.contains('sidebar-open')) {
            document.body.classList.remove('sidebar-open');
        }
    });

    // Estado inicial: Garante que o primeiro botão já apareça como ativo
    if (navButtons.length > 0) {
        navButtons[0].classList.add('active');
    }
});
