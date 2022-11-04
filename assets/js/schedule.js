const url = 'http://api.tvmaze.com/shows'
let apiData;
const contents = document.querySelector('#content')
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
  window.localStorage.setItem('fetch', apiData)
    console.log();
    contents.innerHTML = 
    `<h2>The CW</h2>`

    apiData.forEach(element => {
if (element.schedule.days == day) {
if (element.network.name == "The CW") {
          console.log(element.rating.average);  
          
          contents.innerHTML += `
        <article id="${apiData.indexOf(element)}">
<h3>${element.schedule.time}</h3>
<div style="background-image: url('${element.image.original}')">
<p><span>🔥</span>${element.rating.average}</p>

</div>
<h4>${element.name}</h4>
</article>
        `  
        }
}

        
        

    });
    document.querySelectorAll('article').forEach(element => {
      element.addEventListener('click', function () {
          document.querySelector('#modalContent').innerHTML = `
          <img src="${apiData[element.id].image.original}" alt="">
          <div id="modalRightDiv">
            <h6>${apiData[element.id].name} <span>${apiData[element.id].network.name}</span></h6>
            <p>${apiData[element.id].summary}</p>
  
            <p>${apiData[element.id].genres}</p>
            <p>${apiData[element.id].runtime} min</p>
            <p>🔥 <span>${apiData[element.id].rating.average}</span></p>
          </div>
`
modal.style.display = "block";
      })
  }); 
})
}

fetchCall()

function Clear(obj) {
    apiData.sort()
    contents.innerHTML = 
    `<h2>${obj.value}</h2>`
    
    apiData.forEach(element => {
        if (element.schedule.days == day) {
            if (element.network.name == obj.value) {
              
            console.log(apiData.indexOf(element));
          
          contents.innerHTML += `
        <article id="${apiData.indexOf(element)}">
<h3>${element.schedule.time}</h3>
<div style="background-image: url('${element.image.original}')">
<p><span>🔥</span>${element.rating.average}</p>

</div>
<h4>${element.name}</h4>
</article>
        `  
        }
        }

        
        

    });
   document.querySelectorAll('article').forEach(element => {
            element.addEventListener('click', function () {
                document.querySelector('#modalContent').innerHTML = `
                <img src="${apiData[element.id].image.original}" alt="">
                <div id="modalRightDiv">
                  <h6>${apiData[element.id].name} <span>${apiData[element.id].network.name}</span></h6>
                  <p>${apiData[element.id].summary}</p>
        
                  <p>${apiData[element.id].genres}</p>
                  <p>${apiData[element.id].runtime} min</p>
                  <p>🔥 <span>${apiData[element.id].rating.average}</span></p>
                </div>
`
modal.style.display = "block";
            })
        }); 
}