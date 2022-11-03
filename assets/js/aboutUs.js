let ApiData = [];

fetch('https://reqres.in/api/users/', {

	//fetching the data
	method: 'GET',
})

	//return response if EndPoint is resolved
	.then((response) =>
	//returns response in json format
	{
		return response.json()
	})

	.then((users) => {
		console.log(users);
		ApiData = users.data //Data inside users
	})
	.catch((error) => {
		console.error(error); //Catches error if promise fails
	})
	.finally(() => {
		for (let i = 0; i < ApiData.length; i++) {
			let user = ApiData[i];
			createElm(user);
		}
	})

const createElm = (user) => { //Creates innerHTML elements

	document.getElementById('employeesSection').innerHTML += `
<figure class="card">
  <img src="${user.avatar}" alt="${user.first_name}"/>
  <article class="container">
    <h3>${user.first_name} ${user.last_name}</h3>
    <p>${user.email}</p>
    <p><button class="button">Contact me</button></p>
  </article>
</figure>
`
}
