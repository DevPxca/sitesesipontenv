let btnler = document.getElementById('btn-ler');
        let btnler2 = document.getElementById('btn-ler2');
        let btnler3 = document.getElementById('btn-ler3');
        let texto = document.getElementById('textbox');
        let texto2 = document.getElementById('textbox2');
        let texto3 = document.getElementById('textbox3');
        let icon1 = document.getElementById('icon1');
        let icon2 = document.getElementById('icon2');
        let icon3 = document.getElementById('icon3');

        function closeAllTextBoxes() {
            texto.classList.remove('textboxsee');
            texto2.classList.remove('textboxsee');
            texto3.classList.remove('textboxsee');
        }

        btnler.addEventListener('click', () => {
            closeAllTextBoxes();
            texto.classList.add('textboxsee');
        });

        btnler2.addEventListener('click', () => {
            closeAllTextBoxes();
            texto2.classList.add('textboxsee');
        });

        btnler3.addEventListener('click', () => {
            closeAllTextBoxes();
            texto3.classList.add('textboxsee');
        });