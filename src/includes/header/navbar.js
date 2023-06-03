export const navbar = (navSelector = '.js-navbar', openBtnSelector = '.js-nav-open', closeBtnSelector = '.js-nav-close') => {
  const nav = document.querySelector(navSelector)
  const openBtn = document.querySelector(openBtnSelector)
  const closeBtn = document.querySelector(closeBtnSelector)

  openBtn.addEventListener('click', () => {
    nav.classList.add('active')
  })

  closeBtn.addEventListener('click', () => {
    nav.classList.remove('active')
  })
}
