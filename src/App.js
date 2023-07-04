import React from 'react'

function App() {

    // Showing dynamic content
    let message = 'Bye there!'

    if(Math.random(0,1)>0.5){
        message =  'Hello there!'
    }

    // Writing shorthand jsx
    const time = new Date().toLocaleTimeString();

    return (
        <div>
            <div> {message} </div>
            <div> {time} </div>
        </div>
    )
}

export default App