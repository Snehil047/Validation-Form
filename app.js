var nameError = document.getElementById("name-error");
var phoneError = document.getElementById("phone-error");
var emailError = document.getElementById("email-error");
var messageError = document.getElementById("message-error");
var submitError = document.getElementById("submit-error");

function validateName() {
  var name = document.getElementById("contact-name").value;
  if (name.length == 0) {
    nameError.innerHTML = "Name is required";
    return false;
  }
  if (!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {
    nameError.innerHTML = "Write Full Name";
    return false;
  }
  nameError.innerHTML =
    '<i class="fa-solid fa-circle-check" style="color: #0be040;"></i>';
  return true;
}

function validatePhone() {
  var phone = document.getElementById("phone-number").value;

  if (phone.length < 10) {
    phoneError.innerHTML = "Phone no. must be 10";
    return false;
  }
  if (phone.length > 10) {
    phoneError.innerHTML = "Phone no. can't be more than 10";
    return false;
  }
  if (!phone.match(/^[0-9]{10}$/)) {
    phoneError.innerHTML = "Phone no. can't be alphabets";
    return false;
  }

  phoneError.innerHTML =
    '<i class="fa-solid fa-circle-check" style="color: #0be040;"></i>';
  return true;
}

function validateEmail() {
  var email = document.getElementById("contact-email").value;
  if (email.length == 0) {
    emailError.innerHTML = "email feild can't be empty";
    return false;
  }
  if (!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
    emailError.innerHTML = "Email Invalid";
    return false;
  }

  emailError.innerHTML =
    '<i class="fa-solid fa-circle-check" style="color: #0be040;"></i>';
  return true;
}

function validateMessage() {
  var message = document.getElementById("contact-message").value;
  var required = 30;
  var left = required - message.length;

  if (left > 0) {
    messageError.innerHTML = left + " more characters required";
    return false;
  }

  messageError.innerHTML =
    '<i class="fa-solid fa-circle-check" style="color: #0be040;"></i>';
  return true;
}

function validateForm() {
  if (
    !validateEmail() ||
    !validateMessage() ||
    !validateName() ||
    !validatePhone()
  ) {
    submitError.style.display = "block";
    submitError.innerHTML = "Please Fix The Form";
    setTimeout(function () {
      submitError.style.display = "none";
    }, 3000);
    return false;
  }
}
