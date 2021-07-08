;(() => {
  const refs = {
    openMenuBtns: document.querySelectorAll('[data-menu-open]'),
    closeMenuBtn: document.querySelector('[data-menu-close]'),
    menu: document.querySelector('[data-menu]'),
  }

  refs.openMenuBtns.forEach((btn) => {
    btn.addEventListener('click', toggleMenu)
  })
  refs.closeMenuBtn.addEventListener('click', toggleMenu)
  window.addEventListener('keydown', (e) => {
    if (e.code === 'Escape') {
      toggleMenu()
    }
  })

  function toggleMenu() {
    refs.menu.classList.toggle('is-hidden')
  }
})()