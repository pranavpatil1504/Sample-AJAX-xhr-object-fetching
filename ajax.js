// Fruits Fetching
document.getElementById('fetchfruits').addEventListener('click', fruitshandler);

function fruitshandler() {
    console.log('You have clicked the fetch fruits button');

    const xhr = new XMLHttpRequest();

    xhr.open('GET', 'fruits.json', true);

    xhr.onprogress = function () {
        let list = document.getElementById('list');
        list.innerHTML = `
        <div class="d-flex justify-content-center">
            <div class="spinner-border" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>
        </div>`;
    };
    xhr.onload = function () {
        setTimeout(() => {
            if (this.status === 200) {
                let obj = JSON.parse(this.responseText);
                console.log(obj);
                let list = document.getElementById('list');
                let str = "";
                for (let fruits of obj.fruits) {
                    str += `
                <div class="col">
                  <div class="card h-100">
                    <img src="${fruits.image}" class="card-img-top" >
                    <div class="card-body">
                      <h4 class="card-title">${fruits.name}</h5>
                      <h5 class="card-title">${fruits.price}</h5>
                    </div>
                  </div>
                </div>`;
                }
                list.innerHTML = str;
            } else {
                console.error("Some Error Occurred");
            }
        }, 400);
    };
    xhr.send();
    console.log("We Are Done Fetching Vegetables");
}



// Movies Fetching
document.getElementById('fetchmovies').addEventListener('click', movieshandler);

function movieshandler() {
    console.log('You have clicked the fetch Movies button');

    const xhr = new XMLHttpRequest();

    xhr.open('GET', 'movies.json', true);

    xhr.onprogress = function () {
        let list = document.getElementById('list');
        list.innerHTML = `
        <div class="d-flex justify-content-center">
            <div class="spinner-border" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>
        </div>`;
    };
    xhr.onload = function () {
        setTimeout(() => {
            if (this.status === 200) {
                let obj = JSON.parse(this.responseText);
                console.log(obj);
                let list = document.getElementById('list');
                let str = "";
                for (let movies of obj.movies) {
                    str += `
                <div class="col">
                  <div class="card h-100">
                    <img src="${movies.Poster}" class="card-img-top" >
                    <div class="card-body">
                      <h5 class="card-title">${movies.Title}</h5>
                      <h5 class="card-title">${movies.Year}</h5>
                      <p class="card-text">Runtime: ${movies.Runtime}</p>
                    </div>
                  </div>
                </div>`;
                }
                list.innerHTML = str;
            } else {
                console.error("Some Error Occurred");
            }
        }, 400);
    };
    xhr.send();
    console.log("We Are Done Fetching Fruits");
}
