function showError(erroredInput) {
  const inputContent = erroredInput.getAttribute("placeholder")
  let errorMessage = document.createElement("small")
  if (erroredInput.type === "email") {
    errorMessage.innerText = "Looks like this is not an email"
  } else {
    errorMessage.innerText = inputContent + " cannot be empty"
  }
  erroredInput.classList.add("error")
  erroredInput.after(errorMessage)
}

function formValidation() {
  const allInputs = document.querySelectorAll('input')
  const allSmalls = document.querySelectorAll("small")
  allSmalls.forEach(small => small.remove())
  allInputs.forEach(input => {
    input.classList.remove('error')
    if (input.type === 'text' || input.type === 'password') {
      if (input.value === "") {
        showError(input)
      }
    } else if (input.type === "email") {
      const mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
      if (!input.value.match(mailformat)) {
        showError(input)
      }
    }
  })
}

const btn = document.querySelector('input[type="submit"]')
btn.addEventListener('click', (e) => {
  e.preventDefault()
  formValidation()
})