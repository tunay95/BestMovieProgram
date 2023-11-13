let movieId = window.location.href.split('=')[1]
let movie = document.querySelector(".container")

let json_url = `https://api.tvmaze.com/shows/${movieId}`;

fetch(json_url)
    .then(Response => Response.json())
    .then((data) => {
        movie.innerHTML = `
        <div class="content">
            <div class="d-flex justify-content-evenly">
                <img src="${data.image.original}" width="500px" style="border-radius: 10px;">

                
                <div class="ms-4" id="mr-white">
                <h1 id="title">${data.name}</h1>
                    <h6>Netflix Original Film</h6>
                    <h5 id="gen">${data.genres}</h5>
                    <h5>Premiered-Ended: ${data.premiered.split("-")[0]} - ${data.ended.split("-")[0]}</h5>
                    <h5>Status: ${data.status}</h5>
                    <h5>Schedule: ${data.schedule.time} ${data.schedule.days}</h5>
                    <h5>Show long: ${data.weight} min</h5>
                    <h3 id="rate"><span>IMDB: </span>${data.rating.average}<i class="bi bi-star-fill"></i></h3>
                    <h4 class="mt-5">Summary</h4>
                    <p>${data.summary}</p>
                    <a
                        href="./index1.html"
                        class="btn btn-outline-success mt-5"
                        style="font-size: 20px"
                        >Go Back</a
                    >
                </div>
            </div>
        </div>
        `
    });

