class Request{
    constructor(){
        this.url="https://icanhazdadjoke.com/"
    }

    getJokes(){
        return new Promise((Result,Err)=>{

            const config={
                headers:{
                    "Accept":"application/json"
                }
            }
            fetch(this.url,config)
            .then(resolve=>resolve.json())
            .then(data=>Result(data))
            .catch(err=>Err(err))


        })
        
    }
}

