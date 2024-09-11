fetch("http://172.20.10.7:8000/api/genres")
  .then((res) => res.json())
  .then((data) => console.log(data));
