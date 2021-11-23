const buttonProfile = document.querySelector('.btn-profile')
const menuUser = document.querySelector('.menuUserContainer')
const main = document.querySelector('main')

buttonProfile.addEventListener('click', (e) => {
  menuUser.classList.toggle('show')
  menuUser.focus()

  if (window.innerWidth <= 414) {
    main.style.pointerEvents = 'none'
    main.style.filter = 'brightness(0.4)'
    main.style.backgroundColor = '#666'
  }
})

menuUser.addEventListener('click', (e) => {
  e.stopPropagation()
  console.log('clock')
})

menuUser.addEventListener('blur', () => {
  menuUser.classList.remove('show')
  main.style.pointerEvents = 'initial'
  main.style.filter = ''
  main.style.backgroundColor = 'initial'
})
