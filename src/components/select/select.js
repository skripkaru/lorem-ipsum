import TomSelect from 'tom-select'

export const select = (selector = '.js-select') => {
  const selects = document.querySelectorAll(selector)

  selects.forEach((select) => {
    new TomSelect(select, {
      plugins: ['dropdown_header']['clear_button'],
      create: false,
      searchField: null
      // controlInput: null
    })
  })
}
