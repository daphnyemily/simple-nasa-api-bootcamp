//The user will enter a date. Use that date to get the NASA picture of the day from that date! https://api.nasa.gov/

document.querySelector('button').addEventListener('click', searchButton)

const url = "https://api.nasa.gov/planetary/apod?api_key=wZBPrbPCcBsTBf47RRI0QD5KllfaLmNwaEsgZZ2y&date="

function searchButton(){
    let date = document.querySelector('input').value
   

    fetch(url+date)
        .then(res => res.json())
        .then(data => { 
            console.log(data)
            console.log(data.title)
            console.log(data.explanation)
            document.querySelector('h2').innerText = data.title 
            document.querySelector('h3').innerText = data.explanation
            document.querySelector('img').src = data.url
        })
        .catch(err => {
            console.log(`error ${err}`)
        })

}
