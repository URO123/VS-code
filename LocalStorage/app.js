const elForm = document.querySelector(".form");
const inputName = document.querySelector(".name");
const inputAge = document.querySelector(".age");
const inputCity = document.querySelector(".city");
const elList = document.querySelector(".list");

let users = JSON.parse(localStorage.getItem('users')) || [];
elForm.onsubmit = (evt) => {
  evt.preventDefault();
  users.push({
    id: Date.now(),
    name: inputName.value,
    age: inputAge.value,
    city: inputCity.value,
  });
  localStorage.setItem("users", JSON.stringify(users));
  render(JSON.parse(localStorage.getItem("users")), elList);
  console.log(users);
  inputName.value = "";
  inputAge.value = "";
  inputCity.value = "";
};

function render(array, list) {
  let count = 1;
  list.innerHTML = "";
  array.forEach((el) => {
    list.innerHTML += `<li id=${el.id} class="js-item">
    <span class="item-id">${count++}</span>
    <span class="item-name"> ${el.name} </span>
    <span class="item-age">${el.age}</span>
    <span class="item-city">${el.city}</span>
    <button class="delete-btn">x</button>
    <button class="edit-btn">></button>
    </li>`;
  });
}
render(JSON.parse(localStorage.getItem("users")), elList);

function func() {
  // Event delegation
  document.body.onclick = (evt) => {
    // console.log(evt.target.classList);
    if (evt.target.classList.contains("delete-btn")) {
      console.log("delete btn bosildi");
      users = users.filter((item) => item.id != evt.target.parentElement.id);
      localStorage.setItem("users", JSON.stringify(users));
      render(JSON.parse(localStorage.getItem("users")), elList);
    }

    if (evt.target.classList.contains("edit-btn")) {
      users = JSON.parse(localStorage.getItem("users"));
      let editElement = users.find(
        (el) => el.id == evt.target.parentElement.id
      );
      let index = users.indexOf(editElement);
      console.log(index);

      inputName.value = editElement.name;
      inputAge.value = editElement.age;
      inputCity.value = editElement.city;

      elForm.onsubmit = (evt) => {
        evt.preventDefault();
        users.splice(index, 1, {
          id: Date.now(),
          name: inputName.value,
          age: inputAge.value,
          city: inputCity.value,
        });
        
        localStorage.setItem("users", JSON.stringify(users));
        render(JSON.parse(localStorage.getItem("users")), elList);
        console.log(users);
        inputName.value = "";
        inputAge.value = "";
        inputCity.value = "";
      };
      console.log("edit btn bosildi");
    }
  };
}
func();
