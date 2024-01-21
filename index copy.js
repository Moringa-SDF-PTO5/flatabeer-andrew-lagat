var ourdata;
const json_link = "http://localhost:3000/beers";
fetch('db.json')
.then(res => {
    return res.json();
})
.then(data => {
    ourdata = data;
    var beers = ourdata['beers'];
    
    //console.log(ourdata['beers'][0].reviews[2]);

    for(let i = 0; i < beers.length; i++)
    {
        let card = document.createElement("ul");
        card.className = "card";
        //console.log(beers[i].name);
        card.innerHTML = `
            
            <div class="beer">
                <h3>${beers[i].name}</h3>
                <div class = "col-25">
                    <img src="${beers[i].image_url}" alt="" class="beer_img" srcset="">
                </div>
                <div class = "col-75">
                    <p>${beers[i].description}</p>
                    <ul id="reviews">
                    </ul>
                </div>
            </div>          
        
        `;
        document.querySelector('#beers').appendChild(card);
        console.log(" ");
        console.log(beers[i].name);
        var reviews = ourdata['beers'][i].reviews
        let review = document.createElement('li');
        //console.log(reviews);
        for(let j = 0; j <reviews.length; j++){
            review.innerHTML = `
            <ul>
               <li class="review"> ${reviews[j]} </li>
            </ul>
               `
            document.querySelector('#reviews').appendChild(review);
            console.log(reviews[j]);
        }
    }
        
    //console.log(data);
})


for(data in ourdata)
{
    console.log(data);
}

// Function to display reviews
// function beerReviews(reviews) {
//     const reviewList = document.querySelector(".reviewList");
//     reviews.forEach((review) => {
//       const list = document.createElement("li");
//       list.textContent = review;
//       reviewList.appendChild(list);
//     });
//   }