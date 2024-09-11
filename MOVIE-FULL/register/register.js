const elForm = document.querySelector(".form");
const userName = document.querySelector(".user-name");
const userEmail = document.querySelector(".user-email");
const userPassword = document.querySelector(".user-password");

const PORT = "10.50.2.0";

elForm.onsubmit = (evt) => {
  evt.preventDefault();
  const obj = {
    name: userName.value,
    email: userEmail.value,
    password: userPassword.value,
  };
  register(obj);
};
async function register(d) {
  const res = await fetch(`http://${PORT}:8000/api/users`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(d),
  });
  const data = await res.json();
  console.log(data);
  if (data) {
    window.location.href = "../index.html";
  }
}
