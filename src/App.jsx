import React from 'react';
import { heroes } from './data';
import Hero from './Hero';
import Pokemon from './Pokemon';

import { v4 as uuidv4 } from 'uuid';
import { pokemon } from './data'

function App() {
    // let heroesRender = []

    // for(let i = 0; i < heroes.length; i++) {
    //     let heroCard = <Hero key={i} first={heroes[i].first} last={heroes[i].last} alias={heroes[i].alias} comic={heroes[i].comic}></Hero>
    //     heroesRender.push(heroCard)
    // }

    // console.log(heroesRender)

    // hero = {first: "Clark", last: "Kent", alias: "Superman"}
    // first->clark, last->Ke

    // return (
    // <div>
    //     {
    //         heroes.map((hero, idx) => <Hero key={uuidv4()} {...hero} />)
    //     }
    // </div>
    // )

    return (
        <div>
            <Pokemon {...pokemon[3]}></Pokemon>
        </div>
    )
}

// <Hero first="Bruce" last="Wayne" alias="Batman" comic="DC" />

// 1. Loop over it, background-color: grey
// 2. Split The Pokemon into 2 Groups(Randomly)
// 3. Calculate the total base_experience of Each Group
// 4. Declare either group 1 or group 2 as the winner

// Team1: C1 C2 C3
// Total is 

// Team2: C1 C2 C3
// Total is

// Winner is T1/2

export default App;
