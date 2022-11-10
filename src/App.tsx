import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import "./App.css";
import DoodleBob from "./Images/DoodleBob.jpeg";
import { ChangeType } from "./components/ChangeType";
import { RevealAnswer } from "./components/RevealAnswer";
import { StartAttempt } from "./components/StartAttempt";
import { TwoDice } from "./components/TwoDice";
import { CycleHoliday } from "./components/CycleHoliday";
import { Counter } from "./components/Counter";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                <h1>My Website!</h1>
                UD CISC275 with React Hooks and TypeScript
                <br />
                Hello World
                <br />
                by Robert Perez
                <img src={DoodleBob} alt="Doodle Bob"></img>
                Best Spongebob Characters
                <ol>
                    <li>Doodle Bob</li>
                    <li>Bubble Bass</li>
                    <li>Smitty WerbenJagerManJensen</li>
                </ol>
                <div>
                    <Container>
                        <Row>
                            <Col className="main-col">First column.</Col>
                            <Col className="main-col">
                                Second column. You can put whatever you want in
                                here, and it will be on the right side. Maybe
                                try adding an image?
                            </Col>
                        </Row>
                    </Container>
                </div>
            </header>

            <Button onClick={() => console.log("Hello World!")}>
                Log Hello World
            </Button>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload.
            </p>
            <hr></hr>
            <Counter></Counter>
            <hr />
            <RevealAnswer></RevealAnswer>
            <hr />
            <StartAttempt></StartAttempt>
            <hr />
            <TwoDice></TwoDice>
            <hr />
            <ChangeType></ChangeType>
            <hr />
            <CycleHoliday></CycleHoliday>
        </div>
    );
}

export default App;
