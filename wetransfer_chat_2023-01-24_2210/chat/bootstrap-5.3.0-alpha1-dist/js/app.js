const modalimagen = document.querySelector('#modal-imagen')

modalimagen.addEventListener('show.bs.modal', function (event) {
  const enlace = event.relatedTarget
  const rutaimagen = enlace.getAttribute('data-bs-imagen')

  //costruir la imagen
  const imagen = document.createElement('IMG')
  imagen.src = `img/${rutaimagen}.jpg`
  imagen.classList.add('w-100')
  imagen.alt = `imagen galeria`

  //seleccionar el modal
  const contenidoModal = document.querySelector('.modal-body')
  // Borra el contendio del modal
  contenidoModal.innerHTML = ''
  // Agrega la imagen al modal
  contenidoModal.appendChild(imagen)
})
