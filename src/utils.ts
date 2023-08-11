enum state {
    STARTED,
    STOPPED
}

interface Scores {
    player1: number,
    player2: number
}

interface Velocity{
    dx:number,
    dy:number
}

const random =(min:number,max:number)=> {
   return min +Math.floor(Math.random()*(max-min+1)) 
} 

export {
    state,
    Scores,
    Velocity,random
}