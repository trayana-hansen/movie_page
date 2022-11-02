
             const url = 'http://api.tvmaze.com/shows'
             let apiData = []
     fetch(url)
         .then(response => {
             return response.json();
             //parsing our data
         })
         .then(data => {
             
             apiData = data
             
             //Our parsed data
         })
         .catch(error => {
             console.log(error);
             //On error
         })
         .finally(() => {
              
         })

         setTimeout(() => {
            makeCards()
         }, 200);

    for (let index = 0; index < 1; index++) {
console.log(apiData);
    document.querySelector('.cont__inner').innerHTML += `
    <div class="el">
    <div class="el__overflow">
      <div class="el__inner">
        <div class="el__bg"></div>
        <div class="el__preview-cont" style="background-image: url('https://static.tvmaze.com/uploads/images/original_untouched/117/293987.jpg');">
          //Card front
        </div>
        <div class="el__content">
          //Inner card
          <div class="el__close-btn"></div>
        </div>
      </div>
    </div>
    <div class="el__index">
      <div class="el__index-back"></div>
      <div class="el__index-front">
        <div class="el__index-overlay" data-index="1"></div>
      </div>
    </div>
  </div>
    `
     
}        




