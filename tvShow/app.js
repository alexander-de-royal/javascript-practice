const form = document.querySelector('#searchForm');
form.addEventListener('submit', function(e){
    e.preventDefault();
    const searchTerm = form.elements.query.value()
    axios.get(`http://api.tvmaze.com/search/q=${searchTerm}`);
    console.log(res.data[0].show.image.medium);
    makeImages(res.data)
    form.elements.query.value = '';
})
const makeImages = (shows) => {
    for(let result of show){
        if(result.show.image){
            const img = document.createElement('IMG');
            img.src = result.show.image.medium;
            document.body.append(img)
        }

    }
}