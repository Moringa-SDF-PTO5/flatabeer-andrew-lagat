var ourdata;
var each_beer;
const json_link = "http://localhost:3000/beers";
fetch(json_link)
.then(res => {
    return res.json();
})
.then(data => {
    ourdata = data;
    var beers = data;

    for(let i = 0; i < beers.length; i++)
    {
        let card = document.createElement("ul");
        card.className = "card";
        each_beer = beers[i];
        card.innerHTML = `
            <div class="beer">
                <a onClick="beer('${beers[i].id}')"><h3>${beers[i].name}</h3></a>
            </div>  
        `;
        document.querySelector('#beers').appendChild(card);
        //function that calls each beer
        
    }
        
    //console.log(data);
})

function beer(id)
{
    document.querySelector('#beer').innerHTML = '';
    var img = document.createElement('li');
    
    img.innerHTML = `
        <h2>${ourdata[id-1].name}</h2>
        <img src="${ourdata[id-1].image_url}" alt="" class="beer_img" srcset="">
        <h2>Description</h2>
        <p>${ourdata[id-1].description}</p>
        <h2>Reviews</h2>
        <ul id='reviews'>

        </ul>
       `
    //console.log(img);
    document.querySelector('#beer').appendChild(img);
    console.log(ourdata[id-1].reviews);
    let myreviews = ourdata[id-1].reviews;
    for(let k = 0; k < ourdata[id-1].reviews.length; k++)
    {
        var review_list = document.createElement('ul');
        review_list.innerHTML = `
        <a onClick="deletReview('${myreviews.indexOf(ourdata[id-1].reviews[k])}')" id="${myreviews.indexOf(ourdata[id-1].reviews[k])}"><li>${ourdata[id-1].reviews[k]}</li></a>
        `
        myreviews = ourdata[id-1].reviews;
        console.log();
        document.querySelector('#reviews').appendChild(review_list);
    }
     //console.log('reviews are')
    //console.log(myreviews);
    
}

function deletReview(r) {
    console.log(r);
    var reviewId = document.getElementById(r);
    reviewId.remove();
}
// fetch(json_link, {
//     method: 'post',
//     headers: {
//         'Content-Type':'application/json'
//     },
//     body:JSON.stringify('kd')
// })