const date = new Date();
let year = date.getFullYear();
console.log(year);

document.getElementById('year').innerHTML += `

<p>Copyright ${year} </p>

`
