let left_btn = document.getElementsByClassName('bi-chevron-left')[0];
let right_btn = document.getElementsByClassName('bi-chevron-right')[0];
let cards = document.querySelector(".cards");

left_btn.addEventListener('click', () => {
    cards.scrollLeft -= 600;
})
right_btn.addEventListener('click', () => {
    cards.scrollLeft += 600;
})


let json_url = "https://api.tvmaze.com/shows";

fetch(json_url)
    .then(Response => Response.json())
    .then((data) => {
        let newData = data.length
        for (let i = 0; i < newData; i++) {
            let card = document.createElement('a');
            card.classList.add("card")
            card.href = `./movie.html?id=${data[i].id}`
            card.innerHTML = `
            <img src="${data[i].image.original}" alt="${data[i].name}" class="poster">
            <div class="rest_card">
                <img src="${data[i].image.original}" alt="${data[i].name}">
                <div class="cont">
                    <h4>${data[i].name}</h4>
                    <div class="sub">
                        <p>Genres: ${data[i].genres}</p>
                        <h3><span>IMDB</span><i class="bi bi-star-fill" style="margin-bottom: 7px;"></i>${data[i].rating.average}</h3>
                    </div>
                </div>
            </div> 
        `
            cards.appendChild(card)
        }
    });






