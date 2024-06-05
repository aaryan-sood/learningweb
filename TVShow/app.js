let form = document.querySelector('#searchform');
form.addEventListener('submit', async function (event) {
    clearImages();
    event.preventDefault();
    let searchterm = form.elements.query.value
    let config={params : {q:searchterm}}
    let res = await axios.get(`https://api.tvmaze.com/search/shows`,config)
    let shows = res.data
    appendImages(shows)
    form.elements.query.value=''
})

appendImages = (shows) => {
    for (const obj of shows) {
        if (obj.show.image) {
            let path = obj.show.image.medium
            const image = document.createElement('img')
            image.src = path
            document.body.append(image)
        }

    }
}

clearImages=() => {
    images=document.querySelectorAll('img');
    for (img of images)
    {
        img.remove()
    }
}