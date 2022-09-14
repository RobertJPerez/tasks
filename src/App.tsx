import { mainModule } from "process";
import React from "react";
import { Button } from "react-bootstrap";
import "./App.css";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                <h1>My Website</h1>
                UD CISC275 with React Hooks and TypeScript
                <br />
                Hello World
                <br />
                by Robert Perez
                <img
                    src="/Users/robertperez/tasks/src/Images/DoodleBob.jpeg"
                    alt="Doodle Bob"
                ></img>
                Best Spongebob Characters
                <ol>
                    <li>Doodle Bob</li>
                    <li>Bubble Bass</li>
                    <li>Smitty WerbenJagerManJensen</li>
                </ol>
                <section className="main-col">
                    <h3>All about Smitty</h3>
                    <p>He was number 1</p>
                    <aside className="sidebar-col">
                        <img
                            src="/Users/robertperez/tasks/src/Images/Smitty WerbenJaegermanjensen.jpeg"
                            alt="Doodle Bob"
                        ></img>
                    </aside>
                </section>
            </header>

            <Button onClick={() => console.log("Hello World!")}>
                Log Hello World
            </Button>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload.
            </p>
        </div>
    );
}

export default App;
