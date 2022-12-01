import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function CheckAnswer({
    expectedAnswer
}: {
    expectedAnswer: string;
}): JSX.Element {
    const [answer, setAnswer] = useState<string>("");

    return (
        <div>
            <h3>Check Answer</h3>
            <Form.Group controlId="checkAnswer">
                <Form.Label>Your Answer:</Form.Label>
                <Form.Control
                    value={answer}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                        setAnswer(event.target.value)
                    }
                ></Form.Control>
            </Form.Group>
            {answer === expectedAnswer ? "✔️" : "❌"};
        </div>
    );
}
