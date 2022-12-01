import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function ChangeType(): JSX.Element {
    const [questionType, setToggle] = useState(false);
    return (
        <span>
            <Button onClick={() => setToggle(!questionType)}>
                Change Type
            </Button>
            {questionType && "Multiple Choice"}
            {!questionType && "Short Answer"}
        </span>
    );
}
