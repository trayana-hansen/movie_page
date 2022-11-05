const rating = [
  {0: "💩"},
  {1: "💩"} ,
  {2: "💩"} ,
  {3: "💩"} ,
  {4: "😊"} ,
  {5: "😊"} ,
  {6: "😊"} ,
  {7: "😊"} ,
  {8: "🔥"} ,
  {9: "🔥"} ,
  {10: "🔥"} ,
]

const url = 'http://api.tvmaze.com/shows'
let apiData;
const contents = document.querySelector('#content')
const contents2 = document.querySelector('#content2')
let theDay = new Date().getDay()
let day;
let number;
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
  console.log(Math.round(apiData[1].rating.average));
  apiData.sort()

for (let index = 0; index < apiData.length; index++) {
  
  const element = apiData[index];
  number = apiData.indexOf(element)
  if (apiData[number].network !== null) {
  if (element.schedule.days == day) {
          if (element.rating.average >= 8) {
           
             console.log(element.name)
        contents.innerHTML += `
      <article id="${apiData.indexOf(element)}">
<h3>${element.schedule.time}<span>${apiData[number].network.name}</span></h3>
<div style="background-image: url('${element.image.original}')">
<p><span>${rating[Math.round(element.rating.average)][Math.round(element.rating.average)]}</span>${element.rating.average}</p>
</div>
<h4>${element.name}</h4>
</article>
      `  
      }
      }
    }
            }




for (let index = 0; index < 10; index++) {
 let random = Math.floor(Math.random() * 100) + 1;
  const element = apiData[random];
number = apiData.indexOf(element)
if (apiData[number].network !== null) {

      contents2.innerHTML += `
    <article id="${apiData.indexOf(element)}">
<h3>${element.schedule.time}<span>on ${apiData[number].network.name}</span></h3>
<div style="background-image: url('${element.image.original}')">
<p><span>${rating[Math.round(element.rating.average)][Math.round(element.rating.average)]}</span>${element.rating.average}</p>
</div>
<h4>${element.name}</h4>
</article>
    `  



}
    
}
document.querySelectorAll('article').forEach(element => {
  element.addEventListener('click', function () {
      document.querySelector('#modalContent').innerHTML = `
      <img src="${apiData[element.id].image.original}" alt="">
      <div id="modalRightDiv">
        <h6>${apiData[element.id].name} <span>${apiData[element.id].network.name}</span></h6>
        <p>${apiData[element.id].summary}</p>
        <p>${apiData[element.id].genres}</p>
        <p>${apiData[element.id].runtime} min</p>
        <p>${rating[Math.round(apiData[element.id].rating.average)][Math.round(apiData[element.id].rating.average)]} <span>${apiData[element.id].rating.average}</span></p>
      </div>
`
modal.style.display = "block";
  })
})    
  

}


      

    )}

fetchCall()