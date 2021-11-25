const changeImage = (source) => {
  const ImagenGrande = document.querySelectorAll('.imagengrande')
  const prevSelection = document.querySelectorAll('.currentSelect')
  ImagenGrande.forEach((img) => {
    img.src = source.src
  })
  prevSelection.forEach((prev) => {
    prev.classList.remove('currentSelect')
  })
  source.classList.add('currentSelect')
}

function imagenError(source) {
  source.src = '/img/not_found.png'
  source.onerror = ''
  return true
}
