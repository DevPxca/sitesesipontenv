let btnler = document.getElementById('btn-ler');
        let texto = document.getElementById('textbox');
        let num = 0;

        btnler.addEventListener('click', () => {
            num++;
            if (num % 3 === 1) {
                texto.classList.add('textboxsee'); // Ação X
            } else if (num % 3 === 2) {
                texto.classList.remove('textboxsee'); // Ação Y
            } else if (num % 3 === 0) {
            texto.classList.add('textboxsee'); // Ação X novamente
        }});