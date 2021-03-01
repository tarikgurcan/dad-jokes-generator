class Ui{
    constructor(){
        this.joke=document.querySelector("#joke")
    }

    setJokes(data){
        this.joke.innerHTML=data.joke
    }
}