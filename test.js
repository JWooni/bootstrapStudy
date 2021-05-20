const emailInputEl = document.querySelector('#exampleInputEmail1')
const emailModalEl = document.querySelector('#exampleModal')

emailModalEl.addEventListener('shown.bs.modal', function (){
  emailInputEl.focus()
})

const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
const tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})