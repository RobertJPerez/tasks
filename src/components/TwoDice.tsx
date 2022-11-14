import React, { useState } from "react";
import { Button } from "react-bootstrap";

/**
 * Here is a helper function you *must* use to "roll" your die.
 * The function uses the builtin `random` function of the `Math`
 * module (which returns a random decimal between 0 up until 1) in order
 * to produce a random integer between 1 and 6 (inclusive).
 */
export function d6(): number {
    return 1 + Math.floor(Math.random() * 6);
}

export function TwoDice(): JSX.Element {
    const [firstddice, setfirstDice] = useState(1);
    const [seconddice, setsecondDice] = useState(2);
    //if statement to check each dice number and return win if seconddice and firstdice match, otherwise false
    return (
        <span>
            <Button onClick={() => setfirstDice(d6())}>Roll Left</Button>
            <Button onClick={() => setsecondDice(d6())}>Roll Right</Button>
            <span data-testid="left-die">{firstddice}</span>
            <span data-testid="right-die">{seconddice}</span>
            <span>
                {firstddice == seconddice && firstddice != 1 && "Win"}
                {firstddice == 1 && seconddice == 1 && "Lose"}
            </span>
        </span>
    );
}
