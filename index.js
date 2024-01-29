let ourdata;
const json_link = "http://localhost:3000/beers";
fetch(json_link)
.then(res => {
    return res.json();
})
.then(res => {
    ourdata = res;
    data = res;

    //initial item everytime it loads
    beer(res[0].id)
    
    for(let i = 0; i < data.length; i++)
    {
        renderOneBeer(data[i])
    }
})

//function that calls each beer
function renderOneBeer(beer)
{
    let card = document.createElement("li");
    card.className = "navItem";
    card.innerHTML = `
        <div>
            <a onClick="beer('${beer.id}')"><h3>${beer.name}</h3></a>
        </div>  
    `;
    document.querySelector('#beers').appendChild(card);
    
}

function beer(id)
{
    document.querySelector('#beer').innerHTML = '';
    var img = document.createElement('div');
    img.className = "beer"
    
    img.innerHTML = `
        <h3>${ourdata[id-1].name}</h3>
        <img src="${ourdata[id-1].image_url}" alt="" class="beer_img" srcset="">
        <div class="description">
            <h3>Description</h3>
            <p>${ourdata[id-1].description}</p>
        </div>
        <div class="reviews">
                <h3>Reviews</h3>
                <div id='reviews'>

                </div>
        </div>
       `
    
    document.querySelector('#beer').appendChild(img);
    //console.log(ourdata[id-1].reviews);
    let myreviews = ourdata[id-1].reviews;
    for(let k = 0; k < ourdata[id-1].reviews.length; k++)
    {
        var review_list = document.createElement('div');
        review_list.innerHTML = `
            <a onClick="deletReview('${myreviews.indexOf(ourdata[id-1].reviews[k])}')" id="${myreviews.indexOf(ourdata[id-1].reviews[k])}"><li>${ourdata[id-1].reviews[k]}</li></a>
        `
        myreviews = ourdata[id-1].reviews;
        //console.log();
        document.querySelector('#reviews').appendChild(review_list);
        
        
    }

    //beer update section
    document.querySelector('#beer_input').innerHTML = '';
    const beerInput = document.createElement('div');
    beerInput.innerHTML = `
            <input type="hidden" name="beer_id" value="${ourdata[id-1].id}">
            <textarea name="review" id=""></textarea>
            <div class="row">
                
                <input type="submit" id="button" value="Update Beer">
            </div>
            `
    document.querySelector('#beer_input').appendChild(beerInput);

    //review input section
    document.querySelector('#review_input').innerHTML = '';
    var revInput = document.createElement('div');
    revInput.innerHTML = "";
    revInput.innerHTML = `
            <h3>Leave a review</h3> 
            <input type="hidden" name="beer_id" value="${ourdata[id-1].id}">
            <textarea name="review" id=""></textarea>
        `
        document.querySelector('#review_input').appendChild(revInput);
}
document.querySelector('.myReview').addEventListener('submit', handlesubmit)
function handlesubmit(e)
{
    e.preventDefault();
    console.log(e.target.beer_id.value);
    console.log(e.target.review.value);
    id = [e.target.beer_id.value];
    console.log(id);
    fetch("http://localhost:3000/beers/?id=11",{
        method: "PUT",
        headers: {
            "Content-Type":"application/json"
        },
        body: JSON.stringify(
            {
                "reviews": e.target.review.value
            })
    })
    .then(res => res.json)
    .then(data => console.log(data.status))
    
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