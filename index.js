var ourdata;
const json_link = "http://localhost:3000/beers";
fetch('db.json')
.then(res => {
    return res.json();
})
.then(data => {
    ourdata = data;
    var beers = ourdata['beers'];
    //console.log(ourdata['beers'][0].name);

    for(let i = 0; i < beers.length; i++)
    {
        let card = document.createElement("ul");
        card.className = "card";
        console.log(beers[i].name);
        card.innerHTML = `
            
            <div class="beer">
                <h3>${beers[i].name}</h3>
                <div class = "col-25">
                    <img src="${beers[i].image_url}" alt="" class="beer_img" srcset="">
                </div>
                <div class = "col-75">
                    <p>${beers[i].description}</p>
                </div>
            </div>          
        
        `;
        document.querySelector('#beers').appendChild(card);
    }
    
    //console.log(data);
})


for(data in ourdata)
{
    console.log(data);
}