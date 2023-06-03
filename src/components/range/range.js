import noUiSlider from 'nouislider'

export const range = (sliderSelector = '.js-range', valueSelector) => {
  const sliders = document.querySelectorAll(sliderSelector)

  sliders.forEach((slider) => {
    noUiSlider.create(slider, {
      start: [75],
      step: 5,
      range: {
        min: 0,
        max: 100
      }
    })

    slider.noUiSlider.on('update', (values) => {
      const valueItem = document.querySelector('.js-range-value')

      valueItem.textContent = `${Math.round(values)} %`
    })
  })
}
