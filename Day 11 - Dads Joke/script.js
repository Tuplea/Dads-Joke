const jokeElement = document.getElementById('joke')
const jokeBtn = document.getElementById('jokeBtn')

jokeElement.style.color = "white";
jokeBtn.style.color = "blue";

jokeBtn.addEventListener('click', generateJoke)

generateJoke()

//using async/await

async function generateJoke() {
    const config = {
        headers: {
            Accept: 'application/json',
        }
    }
    

    const res = await fetch('https://icanhazdadjoke.com', config)

    const data = await res.json()

    jokeElement.innerHTML = data.joke
}




