import { navbar } from '../includes/header/navbar'
import { select } from '../components/select/select'
import { range } from '../components/range/range'
import { fileUpload } from '../components/file-upload/file-upload'

document.addEventListener('DOMContentLoaded', () => {
  navbar()
  select()
  range()
  fileUpload()
})
