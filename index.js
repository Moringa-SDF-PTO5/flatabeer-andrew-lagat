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
                
                <div class = "col-25">
                    <h3>${beers[i].name}</h3>
                </div>
                <div class = "col-75">
                   
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