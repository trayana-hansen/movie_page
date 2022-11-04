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
        console.log();
        contents.innerHTML = 
        `<h2>The CW</h2>`

        apiData.forEach(element => {
if (element.schedule.days == day) {
    if (element.network.name == "The CW") {
              console.log(element.rating.average);  
              
              contents.innerHTML += `
            <article >
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
        
    })
   }

   fetchCall()

   function Clear(obj) {
    console.log(document.querySelectorAll('select')[0]);
        apiData.sort()
        contents.innerHTML = 
        `<h2>${obj.value}</h2>`
        
        apiData.forEach(element => {
            if (element.schedule.days == day) {
                if (element.network.name == obj.value) {
                
              
              contents.innerHTML += `
            <article >
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
        
    }