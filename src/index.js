import "./styles.css"

/* TODO / learning items
  • eventHandlers: click, submit
  • .innerHTML vs. .textContent vs.innerText
  • basic form validation
  • quick problem solving -- implement 1 HTML field and functionality at a time
  • testing -- automated test suite for this type of problem
  • common other validations I should add
  */

/* --------------------
     Add your code here
    --------------------- */
/* No missing fields
  Valid email address
  String password
  Matching password */

// Error messages
const NO_MISSING_FIELDS_ERROR = "Please complete all missing fields"

const checkForNoMissingFields = inputs => {
  inputs.forEach(input => {
    if (input.textContent === "") {
      return NO_MISSING_FIELDS_ERROR
    }
  })
  return ""
}

const validateForm = () => {
  let inputs = document.querySelectorAll("input")
  let errors = []

  // Valid email address
  const noMissingFieldsError = checkForNoMissingFields(inputs)
  noMissingFieldsError && errors.push(noMissingFieldsError)

  // String password

  // Matching password

  // For this example, don't actually submit the form

  if (errors.length > 0) {
    alert(errors[0])
    document.getElementById("error").textContent = errors[0]
  }

  return true // Form was submitted
}

// const form = document.getElementById("form")
// form.onsubmit = submit

document.getElementById("submit").addEventListener("click", function(event) {
  event.preventDefault()
  document.getElementById("error").textContent = "form submitted"
  return validateForm()
})
