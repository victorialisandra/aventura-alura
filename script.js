const avanca= Document.querySelectorAll('.btn-proximo');

avanca.array.forEach(button => {
    button.addEventListener('click', function () {
        const atual = document.querySelector('.ativo');
        const proximoPasso= 'passo-' + this.getAttribute('data-proximo');

        atual.ClassList.remove('ativo');
        documnet.getElementById(proximoPasso).classList.add('ativo');
    })
})