(function(){
    const BASE_URL='https://movie-list.alphacamp.io'
    const INDEX_URL = BASE_URL + '/api/v1/movies/'
    const POSTER_URL = BASE_URL + '/posters/'
    const data = []
    console.log(POSTER_URL)
    axios.get(INDEX_URL).then(response => {
        data.push(...response.data.results)
        results = data.filter(movie => movie.genres.includes(1))
        displayDataList(results)
    }).catch(err => console.log(error))

    const genres = {
        "1": "Action",
        "2": "Adventure",
        "3": "Animation",
        "4": "Comedy",
        "5": "Crime",
        "6": "Documentary",
        "7": "Drama",
        "8": "Family",
        "9": "Fantasy",
        "10": "History",
        "11": "Horror",
        "12": "Music",
        "13": "Mystery",
        "14": "Romance",
        "15": "Science Fiction",
        "16": "TV Movie",
        "17": "Thriller",
        "18": "War",
        "19": "Western"
      }

    const dataPanel = document.querySelector('#data-panel')
    const Navbar = document.querySelector('#navbar')

    function displayGenreList(genre){
        let htmlContent = ''
        for (i=1; i<20; i++){
            htmlContent += `
            <a class="nav-link" id="v-pills-home-tab" data-toggle="pill" data-id=${i} role="tab" aria-controls="v-pills-genre">${genre[i]}</a>
            `
        }
        Navbar.innerHTML = htmlContent
    }

    displayGenreList(genres)

    
    Navbar.addEventListener("click", event => {
        let results =[]
        console.log(event.target.dataset.id)
        results = data.filter(movie => movie.genres.includes(Number(event.target.dataset.id)))
        console.log(results)
        displayDataList(results)
    })
  


    function displayDataList(data){
           let htmlContent = ''
        data.forEach(function(item){      
            htmlContent += `
            <div class="col-sm-3">
                <div class="card mb-2">
                    <img class="card-img-top" src="${POSTER_URL}${item.image}" alt="Card image cap">
                    <div class="card-body">
                        <h5 class="card-title">${item.title}</h5>
            `
            for (let i of item.genres){
                htmlContent += `
                <button type="button" id="btnGenre" class="btn btn-outline-secondary btn-sm">${genres[i]}</button>
                `
            }
            htmlContent += `
                    </div>
                </div>
            </div>
            `
        })
        dataPanel.innerHTML = htmlContent
    }

})()