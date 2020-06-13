function modoNocturno() {

    let pagina = document.getElementById('pagina')
    if (pagina.classList.contains('darkMode')) {
        pagina.classList.remove('darkMode')

    } else {
        pagina.classList.add('darkMode')
        pagina.classList.remove('text-color')
    }

}