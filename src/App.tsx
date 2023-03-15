import React from 'react';
import './App.css';
import { Navbar } from './components/Navbar';
import { Main } from './components/Main';
import { Projects } from './data/projectList';
import {Card} from './components/Card.js'

function App() {


    return (
        <>
            <Navbar />
            <Main />
            {/* <Opener /> */}
            <div className="projectContainer">
                {
                    Projects.map((project, i )=> (
                        <Card project={project} key={i}/>
                    ))
                }

            </div>
        </>
    );
}

export default App;
