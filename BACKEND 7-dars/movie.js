const elForm = document.querySelector(".form");
const movieName = document.querySelector(".movieName");
const movieGenreId = document.querySelector(".movieGenreId");
const movieStock = document.querySelector(".movieStock");
const movieRate = document.querySelector(".movieRate");

elForm.onsubmit = (evt) => {
  evt.preventDefault();
  fetch("http://172.20.10.7:8000/api/movies", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    "x-auth-token":
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjVjNDE0MjczNDczYWE3NjA5ZjdjYzAiLCJuYW1lIjoiTWFuIiwiZW1haWwiOiJzYW5AbWFuIiwiaWF0IjoxNzE3MzkxMTY2fQ.Ssbtt-nwbh3hUqB6aCm_CefD98FvXXGnJUobgY9-jps",
    },
    
    body: JSON.stringify({
      title: movieName.value,
      genreId: movieGenreId.value,
      numberInStock: movieStock.value,
      dailyRentalRate: movieRate.value,
    }),
  })
    .then((res) => res.json())
    .then((data) => console.log(data))
    .catch((err) => console.log(err));
};
