import React from 'react'

function App() {

    let message = 'Bye there!'

    if(Math.random(0,1)>0.5){
        message =  'Hello there!'
    }

    return (
        <div>{message}</div>
    )
}

export default App