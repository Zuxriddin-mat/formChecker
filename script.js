const fname = document.getElementById('name')
const email = document.getElementById('email')
const password = document.getElementById('password')
const passwordCheck = document.getElementById('pswCheck')
const submitBtn = document.getElementById('submitBtn')

function checkForm() {
    if (fname.value.length !== 0 && email.value.length !== 0 && password.value.length !== 0 && passwordCheck.value.length !== 0){
      if (password.value !== passwordCheck.value) {
      alert("Password mismatch!")
    } else if (password.value.length <= 6){
      alert("Short password")
    } else {
      alert("Success")
    }
  } else {
  alert("Fill in the form!")
  }
}