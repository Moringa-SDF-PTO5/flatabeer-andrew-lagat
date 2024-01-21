var ourdata;
var each_beer;
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

function beer(x)
{
    document.querySelector('#beer').innerHTML = '';
    //console.log(x)
    console.log(ourdata['beers'][x-1].reviews[0]);
    var img = document.createElement('li');
    

    img.innerHTML = `
        <h2>${ourdata['beers'][x-1].name}</h2>
        <img src="${ourdata['beers'][x-1].image_url}" alt="" class="beer_img" srcset="">
        <p>${ourdata['beers'][x-1].description}</p>
        <h3>Reviews</h3>
        <ul id='reviews'>

        </ul>
        
       `
    //console.log(img);
    document.querySelector('#beer').appendChild(img);
    

    var review_list = document.createElement('li');
    
    for(let k = 0; k < ourdata['beers'][x-1].reviews.length; k++)
    {
        review_list.innerHTML = `
            <li>${ourdata['beers'][x-1].reviews[k]}</li>
        `
    }

    document.querySelector('#reviews').appendChild(review_list);
}
