const elForm = document.querySelector(".form");
const userEmail = document.querySelector(".user-email");
const userPassword = document.querySelector(".user-password");

const PORT = "10.30.2.236";

elForm.onsubmit = (evt) => {
  evt.preventDefault();
  const obj = {
    email: userEmail.value,
    password: userPassword.value,
  };
  login(obj);
};
async function login(d) {
  const res = await fetch(`http://${PORT}:8000/api/auth`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(d),
  });
  const data = await res.json();
  console.log(data);
  data && localStorage.setItem("token", data.token);
}
