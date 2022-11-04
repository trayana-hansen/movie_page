function loading() {
	setTimeout(() => {
		document.getElementById("first").click()
		
	}, 3000);
	setTimeout(() => {
		document.querySelector('#preloader').style.display = "none"
	}, 3500);
}
loading()



