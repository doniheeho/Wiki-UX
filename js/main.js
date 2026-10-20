document.addEventListener('DOMContentLoaded', () => {
    //Desplegable
    const titulosSidebar = document.querySelectorAll('.sidebar-temas h2');

    titulosSidebar.forEach(titulo => {
        titulo.style.cursor = 'pointer';
        
        titulo.addEventListener('click', () => {
            const lista = titulo.nextElementSibling;
            const iconoFlecha = titulo.querySelector('.icono-inline');

            if (lista && lista.tagName === 'UL') {
                const estaOculto = lista.style.display === 'none';
                lista.style.display = estaOculto ? 'block' : 'none';

                if (iconoFlecha) {
                    iconoFlecha.style.transform = estaOculto ? 'rotate(0deg)' : 'rotate(180deg)';
                    iconoFlecha.style.transition = 'transform 0.3s ease';
                }
            }
        });
    });
	
    // Buscador
    const inputBuscador = document.querySelector('.buscador input');
    const itemsTemas = document.querySelectorAll('.sidebar-temas ul li');

    if (inputBuscador) {
        inputBuscador.addEventListener('input', (e) => {
            const termino = e.target.value.toLowerCase().trim();

            itemsTemas.forEach(item => {
                const texto = item.textContent.toLowerCase();
                
                if (texto.includes(termino)) {
                    item.style.display = 'flex';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    }
	
    //  Selección de tema
    itemsTemas.forEach(item => {
        item.addEventListener('click', () => {
            itemsTemas.forEach(i => i.classList.remove('activo'));
            item.classList.add('activo');
        });
    });

});