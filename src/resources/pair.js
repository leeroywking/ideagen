import React from 'react'

let list = [
"Web development",
"Cyber Security",
"Pashto",
"AWS",
"Cloud",
"Bicycle riding",
"Rally fighter",
"Motocross",
"Concrete",
"Army",
"Military",
"Sigint",
"Raspberry pi",
"Accessibility",
"Hiking",
"Edge computing",
"Comedy",
"Tiny living",
"Ultralight",
"Web development",
"Linux",
"The thing to your left",
"git"
]

function returnrandPair(){
    let one = Math.floor(Math.random() * list.length);
    let first = list.splice(one,1);
    let two = Math.floor(Math.random() * list.length);
    let second = list.splice(two, 1)
    return(
        <div>
        <h1>{first}</h1>
        <br/> and
        <h1>{second} </h1>
        </div>
    )
}


export default returnrandPair;