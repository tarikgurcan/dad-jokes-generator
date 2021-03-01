
const newJoke=document.querySelector("#new-joke")
const container=document.querySelector("#joke-container")
const tweet=document.querySelector("#twitter")
const loading=document.querySelector("#loader")
const jokeText=document.querySelector("#joke")
const rq = new Request();
const ui=new Ui()


eventListeners();

function eventListeners(){
    document.addEventListener("DOMContentLoaded",NewJoke)
    newJoke.addEventListener("click",NewJoke)
    tweet.addEventListener("click",Tweet)
}

function NewJoke(){
    loading.style.display="block"
    container.style.display="none"
    rq.getJokes().then(data=>ui.setJokes(data))
    setTimeout(()=>{
    loading.style.display="none"
    container.style.display="block"

    },1000);   
}

function Tweet(){
        const jokeText=joke.textContent;
        const twitterUrl=`https://twitter.com/intent/tweet?text=${jokeText}`
        open(twitterUrl,"_blank")
}