const url = 'http://api.tvmaze.com/shows'
let apiData;
const contents = document.querySelector('#content')
const contents2 = document.querySelector('#content2')
let theDay = new Date().getDay()
let day;
switch(theDay)
{
  case 0:
    day="Sunday";
    break;
  case 1:
    day="Monday";
    break;
  case 2:
    day="Tuesday";
    break;
  case 3:
    day="Wednesday";
    break;
  case 4:
    day="Thursday";
    break;
  case 5:
    day="Friday";
    break;
  case 6:
    day="Saturday";
    break;
  default:
    day="Invalid day";
}
console.log(day);
function fetchCall(){
fetch(url)
.then(response => {
    return response.json();
    //parsing our data
})
.then(data => {
    console.log(data);
    apiData = data
    console.log(apiData[0].rating.average);
    //Our parsed data
})
.catch(error => {
    
    //On error
})
.finally(() => {
  console.log(document.querySelectorAll('select')[0]);
  apiData.sort()

  apiData.forEach(element => {
      if (element.schedule.days == day) {
          if (element.rating.average >= 8) {
          
        contents.innerHTML += `
      <article >
<h3>${element.schedule.time}<span>on ${element.network.name}</span></h3>
<div style="background-image: url('${element.image.original}')">
<p><span>🔥</span>${element.rating.average}</p>

</div>
<h4>${element.name}</h4>
</article>
      `  
      }
      }
  });

for (let index = 0; index < 10; index++) {
 let random = Math.floor(Math.random() * 100) + 1;
  const element = apiData[random];

      contents2.innerHTML += `
    <article >
<h3>${element.schedule.time}<span>on ${element.network.name}</span></h3>
<div style="background-image: url('${element.image.original}')">
<p><span>🔥</span>${element.rating.average}</p>

</div>
<h4>${element.name}</h4>
</article>
    `  

}

  apiData.forEach(element => {
    
});
}

        
        

    )}

fetchCall()
