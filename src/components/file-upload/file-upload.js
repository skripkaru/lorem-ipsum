export const fileUpload = (
  parentSelector = '.js-file-upload',
  selectSelector = '.js-file-select',
  fileSelector = '.js-file',
  listSelector = '.js-file-list'
) => {
  const formFiles = document.querySelector(parentSelector)

  if (!formFiles) return

  const fileSelect = document.querySelector(selectSelector)
  const fileElem = document.querySelector(fileSelector)
  const fileList = document.querySelector(listSelector)
  let files

  if (!files?.length) {
    fileList.innerHTML = '<p>Файл не выбран</p>'
  }

  fileSelect.addEventListener(
    'click',
    (e) => {
      e.preventDefault()

      if (fileElem) {
        fileElem.click()
      }
    },
    false
  )

  fileElem.addEventListener('change', handleFiles, false)

  function handleFiles() {
    files = this.files

    if (!files.length) {
      fileList.innerHTML = '<p>Файл не выбран</p>'
    } else {
      fileList.innerHTML = ''

      // Create file list
      const list = document.createElement('ul')
      list.classList.add('file-list')
      fileList.appendChild(list)

      for (let i = 0; i < files.length; i++) {
        // Create file preview
        const preview = document.createElement('li')
        preview.classList.add('file-list__item')
        list.appendChild(preview)

        // Create file name
        const info = document.createElement('span')
        info.innerHTML = files[i].name
        preview.appendChild(info)

        // Create remove button
        const removeBtn = document.createElement('button')
        removeBtn.id = 'fileRemove'
        removeBtn.classList.add('btn', 'btn--icon')
        removeBtn.innerHTML = 'Удалить файл'
        preview.appendChild(removeBtn)

        // Handle remove
        preview.addEventListener(
          'click',
          (e) => {
            e.preventDefault()

            if (e.target.parentNode.closest('.btn')) {
              fileElem.value = null
              preview.remove()
              fileList.innerHTML = '<p>Файл не выбран</p>'
            }
          },
          false
        )
      }
    }
  }
}
