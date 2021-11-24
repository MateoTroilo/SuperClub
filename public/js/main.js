const menuUser = document.querySelector('.menuUserContainer')
const main = document.querySelector('main')
const changeTheme = document.querySelector('.changeTheme')
const lightMode = document.querySelector('.toLightMode')
const darkMode = document.querySelector('.toDarkMode')
const links = document.querySelectorAll('.menuUserLinks div')
const logout = document.querySelector('#logout')
const modalBlack = document.querySelector('.modalBlack')
const footer = document.querySelector('footer')
const header = document.querySelector('header')
const productCard = document.querySelectorAll('.productCard')
const productCardImagen = document.querySelectorAll('.productCardImagen')
const imagenContainerProduct = document.querySelector('.imagenContainerProduct')
const recortada = document.querySelectorAll('.recortada')
const menuUserSettings = document.querySelectorAll('.menuUserSettings img')
const cart = document.querySelector('.cart')
const mainCartAnchors = document.querySelectorAll('.main-cart a')
const cartBtns = document.querySelectorAll('.button-cart')
const cantBars = document.querySelectorAll('.cant-bar')
const buttonProfile = document.querySelector('.btn-profile')
const productMobile = document.querySelector('.product-mobile')
const btnAddCart = document.querySelectorAll('.btn-agregar-cart')
const rutaArnchor = document.querySelectorAll('.ruta a')
const productDesktop = document.querySelector('.producto')
const body = document.querySelector('body')
const loginContainer = document.querySelector('.login-container')
const loginContainerInput = document.querySelectorAll('.login-container input')
const loginContainerButton = document.querySelector('.login-container button')
const anchorQuestion = document.querySelector('.question a')
const registerContainer = document.querySelector('.register')
const anchorRegisterQuestion = document.querySelector('main a')
const registerContainerInput = document.querySelectorAll('.register input')
const registerContainerButton = document.querySelector('.register button')

buttonProfile?.addEventListener('click', (e) => {
  menuUser.classList.toggle('show')
  menuUser.focus()

  buttonProfile?.addEventListener('click', () => {
    menuUser.classList.toggle('show')
    if (window.innerWidth <= 414) {
      menuUser.focus()
      modalBlack.classList.add('showModalBlack')
      modalBlack.style.width = `${window.innerWidth}px`
      modalBlack.style.height = `${window.innerHeight}px`

      main.style.pointerEvents = 'none'
    }
  })

  links?.forEach((link) => {
    link?.addEventListener('click', () => {
      if (link.id === 'inicio') return (window.location.href = '/')
      if (link.id === 'miscompras') return (window.location.href = '/cart')
      window.location.href = '#'
    })
  })

  logout?.addEventListener('click', () => {
    window.location.href = '/logout'
  })

  menuUser?.addEventListener('click', (e) => {
    e.stopPropagation()
  })

  menuUser?.addEventListener('blur', () => {
    menuUser.classList.remove('show')
    modalBlack.classList.remove('showModalBlack')
    main.style.pointerEvents = 'initial'
  })

  changeTheme?.addEventListener('click', () => {
    toggleTheme()
  })

  const makeDark = () => {
    main.classList.add('dark-main')
    menuUserSettings.forEach((img) => {
      img.style.filter = `invert(100%) sepia(0%) saturate(4097%) hue-rotate(120deg)
      brightness(111%) contrast(101%)`
    })
    cart?.classList.add('dark-cart')
    footer.classList.add('dark-footer')
    header.classList.add('dark-header')
    productCard?.forEach((product) => {
      product?.classList.add('dark-article')
    })
    mainCartAnchors?.forEach((anchor) => {
      anchor.style.color = 'white'
    })

    productCardImagen?.forEach((product) => {
      product.style.backgroundColor = 'white'
    })

    recortada?.forEach((mini) => {
      mini.style.backgroundColor = 'white'
    })

    imagenContainerProduct &&
      (imagenContainerProduct.style.backgroundColor = 'white')

    const children = cart ? [...cart.children] : []
    children?.forEach((child) => {
      if (child.tagName !== 'P' && child.tagName !== 'DIV')
        child.classList.add('dark-article')

      if (child.tagName === 'A') child.style.color = 'white'
    })
    cantBars?.forEach((btn) => {
      btn.style.color = 'black'
    })
    cartBtns?.forEach((button) => {
      button.style.backgroundColor = 'rgb(236,0,0)'
    })
    productMobile?.classList.add('dark-article')
    btnAddCart?.forEach((btn) => {
      btn.style.backgroundColor = '#222'
    })

    rutaArnchor?.forEach((anchor) => {
      anchor.style.color = 'white'
    })
    body.style.backgroundColor = '#222'
    productDesktop?.classList.add('dark-article')
    loginContainer?.classList.add('dark-article')
    registerContainer?.classList.add('dark-article')
    anchorRegisterQuestion && (anchorRegisterQuestion.style.color = 'black')
    anchorQuestion && (anchorQuestion.style.color = 'black')
    loginContainerButton &&
      (loginContainerButton.style.backgroundColor = '#222')
    registerContainerButton &&
      (registerContainerButton.style.backgroundColor = '#222')
    loginContainerInput?.forEach((input) => {
      input.style.backgroundColor = '#494f51'
    })
    registerContainerInput?.forEach((input) => {
      input.style.backgroundColor = '#494f51'
    })

    menuUser?.classList.add('dark-menu')
  }

  const makeLight = () => {
    main.classList.remove('dark-main')
    menuUserSettings.forEach((img) => {
      img.style.filter = ''
    })
    cart?.classList.remove('dark-cart')
    footer.classList.remove('dark-footer')
    header.classList.remove('dark-header')
    productCard?.forEach((product) => {
      product?.classList.remove('dark-article')
    })
    mainCartAnchors?.forEach((anchor) => {
      anchor.style.color = 'black'
    })
    const children = cart ? [...cart.children] : []
    children?.forEach((child) => {
      if (child.tagName !== 'P' && child.tagName !== 'DIV')
        child.classList.remove('dark-article')

      if (child.tagName === 'A') child.style.color = 'white'
    })
    cantBars?.forEach((btn) => {
      btn.style.color = 'black'
    })
    cartBtns?.forEach((button) => {
      button.style.backgroundColor = 'rgb(73,79,81)'
    })
    productMobile?.classList.remove('dark-article')
    btnAddCart?.forEach((btn) => {
      btn.style.backgroundColor = '#222'
    })

    rutaArnchor?.forEach((anchor) => {
      anchor.style.color = 'black'
    })
    body.style.backgroundColor = '#efefef'
    productDesktop?.classList.remove('dark-article')
    loginContainer?.classList.remove('dark-article')
    registerContainer?.classList.remove('dark-article')
    anchorRegisterQuestion && (anchorRegisterQuestion.style.color = 'black')
    anchorQuestion && (anchorQuestion.style.color = 'black')
    loginContainerButton &&
      (loginContainerButton.style.backgroundColor = '#494F51')
    registerContainerButton &&
      (registerContainerButton.style.backgroundColor = '#494F51')
    loginContainerInput?.forEach((input) => {
      input.style.backgroundColor = 'white'
    })
    registerContainerInput?.forEach((input) => {
      input.style.backgroundColor = 'white'
    })

    menuUser?.classList.remove('dark-menu')
  }

  const changeModes = (flag) => {
    if (flag) makeDark()
    else makeLight()
  }

  const isDarkMode = () => localStorage.getItem('temaPreferido') === 'dark'

  window.addEventListener('load', () => {
    changeModes(isDarkMode())
    changeText(!isDarkMode())
  })

  const toggleTheme = () => {
    changeText(isDarkMode())
    changeModes(isDarkMode())
  }

  const changeText = (flag) => {
    if (flag) {
      lightMode && (lightMode.style.display = 'none')
      darkMode && (darkMode.style.display = 'flex')
      localStorage.setItem('temaPreferido', 'light')
    } else {
      lightMode && (lightMode.style.display = 'flex')
      darkMode && (darkMode.style.display = 'none')
      localStorage.setItem('temaPreferido', 'dark')
    }
  }
})

menuUser?.addEventListener('click', (e) => {
  e.stopPropagation()
  console.log('clock')
})

menuUser?.addEventListener('blur', () => {
  menuUser.classList.remove('show')
  main.style.pointerEvents = 'initial'
  main.style.filter = ''
  main.style.backgroundColor = 'initial'
})

buttonProfile?.addEventListener('click', () => {
  menuUser.classList.toggle('show')
  if (window.innerWidth <= 414) {
    menuUser.focus()
    modalBlack.classList.add('showModalBlack')
    modalBlack.style.width = `${window.innerWidth}px`
    modalBlack.style.height = `${window.innerHeight}px`

    main.style.pointerEvents = 'none'
  }
})

links?.forEach((link) => {
  link?.addEventListener('click', () => {
    if (link.id === 'inicio') return (window.location.href = '/')
    if (link.id === 'miscompras') return (window.location.href = '/cart')
    window.location.href = '#'
    console.log('me reclickeraon crak')
  })
})

logout?.addEventListener('click', () => {
  window.location.href = '/logout'
})

menuUser?.addEventListener('click', (e) => {
  e.stopPropagation()
})

menuUser?.addEventListener('blur', () => {
  console.log('mega blurbeadi')
  menuUser.classList.remove('show')
  modalBlack.classList.remove('showModalBlack')
  main.style.pointerEvents = 'initial'
})

buttonProfile?.addEventListener('click', () => {
  menuUser.classList.toggle('show')
  if (window.innerWidth <= 414) {
    menuUser.focus()
    modalBlack.classList.add('showModalBlack')
    modalBlack.style.width = `${window.innerWidth}px`
    modalBlack.style.height = `${window.innerHeight}px`

    main.style.pointerEvents = 'none'
  }
})

links?.forEach((link) => {
  link?.addEventListener('click', () => {
    if (link.id === 'inicio') return (window.location.href = '/')
    if (link.id === 'miscompras') return (window.location.href = '/cart')
    window.location.href = '#'
    console.log('me reclickeraon crak')
  })
})

logout?.addEventListener('click', () => {
  window.location.href = '/logout'
})

menuUser?.addEventListener('click', (e) => {
  e.stopPropagation()
})

menuUser?.addEventListener('blur', () => {
  console.log('mega blurbeadi')
  menuUser.classList.remove('show')
  modalBlack.classList.remove('showModalBlack')
  main.style.pointerEvents = 'initial'
})

changeTheme?.addEventListener('click', () => {
  toggleTheme()
})

const toggleTheme = () => {
  if (main.classList.contains('dark')) {
    lightMode && (lightMode.style.display = 'none')
    darkMode && (darkMode.style.display = 'flex')
    localStorage.setItem('temaPreferido', 'light')
  } else {
    lightMode && (lightMode.style.display = 'flex')
    darkMode && (darkMode.style.display = 'none')
    localStorage.setItem('temaPreferido', 'dark')
  }
  console.log(localStorage.getItem('temaPreferido'))
  const isDark = main.classList.toggle('dark-main')
  menuUserSettings.forEach((img) => {
    img.style.filter = isDark
      ? `invert(100%) sepia(0%) saturate(4097%) hue-rotate(120deg)
    brightness(111%) contrast(101%)`
      : ''
  })
  cart?.classList.toggle('dark-cart')
  footer.classList.toggle('dark-footer')
  header.classList.toggle('dark-header')
  productCard?.forEach((product) => {
    product?.classList.toggle('dark-article')
  })
  mainCartAnchors?.forEach((anchor) => {
    anchor.style.color = isDark ? 'white' : 'black'
  })
  const children = cart ? [...cart.children] : []
  children?.forEach((child) => {
    if (child.tagName !== 'P' && child.tagName !== 'DIV')
      child.classList.toggle('dark-article')

    if (child.tagName === 'A') child.style.color = 'white'
  })
  cantBars?.forEach((btn) => {
    btn.style.color = 'black'
  })
  cartBtns?.forEach((button) => {
    button.style.backgroundColor = isDark ? 'rgb(236,0,0)' : 'rgb(73,79,81)'
  })
  productMobile?.classList.toggle('dark-article')
  btnAddCart?.forEach((btn) => {
    btn.style.backgroundColor = '#222'
  })

  rutaArnchor?.forEach((anchor) => {
    anchor.style.color = isDark ? 'white' : 'black'
  })
  body.style.backgroundColor = isDark ? '#222' : '#efefef'
  productDesktop?.classList.toggle('dark-article')
  loginContainer?.classList.toggle('dark-article')
  registerContainer?.classList.toggle('dark-article')
  anchorRegisterQuestion &&
    (anchorRegisterQuestion.style.color = isDark ? 'white' : 'black')
  anchorQuestion && (anchorQuestion.style.color = isDark ? 'white' : 'black')
  loginContainerButton &&
    (loginContainerButton.style.backgroundColor = isDark ? '#222' : '#494F51')
  registerContainerButton &&
    (registerContainerButton.style.backgroundColor = isDark
      ? '#222'
      : '#494F51')
  loginContainerInput?.forEach((input) => {
    input.style.backgroundColor = isDark ? '#494f51' : 'white'
  })
  registerContainerInput?.forEach((input) => {
    input.style.backgroundColor = isDark ? '#494f51' : 'white'
  })

  menuUser?.classList.toggle('dark-menu')
}

loginContainerButton?.classList.add('hover-disable')
loginContainerButton && (loginContainerButton.style.opacity = '0.5')
const loginInputs = loginContainerInput ? [...loginContainerInput] : []
loginContainerInput?.forEach((input) => {
  input.addEventListener('keyup', (e) => {
    console.log(e.currentTarget.value)

    if (!loginInputs?.filter((x) => x?.value === '').length) {
      loginContainerButton.disabled = false
      loginContainerButton.classList.remove('hover-disable')
      loginContainerButton.style.opacity = '1'
    } else {
      loginContainerButton.disabled = true
      loginContainerButton.classList.add('hover-disable')
      loginContainerButton.style.opacity = '0.5'
    }
  })
})

registerContainerButton?.classList.add('hover-disable')
registerContainerButton && (registerContainerButton.style.opacity = '0.5')
const registerInput = registerContainerInput ? [...registerContainerInput] : []
registerContainerInput?.forEach((input) => {
  input.addEventListener('keyup', (e) => {
    console.log(e.currentTarget.value)

    if (!registerInput?.filter((x) => x?.value === '').length) {
      registerContainerButton.disabled = false
      registerContainerButton.classList.remove('hover-disable')
      registerContainerButton.style.opacity = '1'
    } else {
      registerContainerButton.disabled = true
      registerContainerButton.classList.add('hover-disable')
      registerContainerButton.style.opacity = '0.5'
    }
  })
})
