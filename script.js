const name = document.querySelector("#name");
const phone = document.querySelector("#phone");
const mail = document.querySelector("#mail");
const btn = document.getElementById("btn");

const regExPattern = {
  name: /[a-zA-Z]{8,12}/,
  phone: /\d{10}/,
  mail: ^([a-Za-z0-9\.-]+)@[a-zA-Z-]{9}(\.)([a-zA-Z]{2,3})$
}

btn.addEventListener("click", () => {
  console.log(`Name: ${name.value}, Phone: ${phone.value}, Mail: ${mail.value}`)
});

name.addEventListener("keyup", (e) => {
  if(regExPattern.name.test(name.value)) {
    console.log("name is valid")
    name.className = "valid"
  } else name.className = "invalid"
});

mail.addEventListener("keyup", (e) => {
  evaluate(mail, regExPattern.mail);
});

phone.addEventListener("keydown", (e) => {
  evaluate(phone,regExPattern.phone);
});

function evaluate (input, regEx) {
  if (regEx.test(input.value)) {
    input.className = "valid"
  } else input.className = "invalid"
}






