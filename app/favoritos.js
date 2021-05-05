let favoritos = JSON.parse(localStorage.getItem('favoritos'))

function cargarFavoritos() {
    if (favoritos) {
        favoritos.forEach(mascota => {
            let misFavoritos = document.querySelector('.favoritos')
            misFavoritos.innerHTML += `<a href="detallemascota.html?id=${mascota.id}">
                                    <div class="item">
                                        <img src="${mascota.img}" alt="">
                                    </div>
                                </a>`
        })
    }
}

cargarFavoritos()