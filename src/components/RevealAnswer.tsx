import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function RevealAnswer(): JSX.Element {
    const [toggle, setToggle] = useState(false);
    return (
        <span>
            <Button onClick={() => setToggle(!toggle)}>Reveal Answer</Button>
            {toggle && 42}
        </span>
    );
}
