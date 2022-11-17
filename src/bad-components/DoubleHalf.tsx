import React, { useState } from "react";
import { Button } from "react-bootstrap";
// import { dhValue, setDhValue } from "./DoubleHalfState";

export function DoubleHalf(): JSX.Element {
    const [value, setValue] = useState(10);
    function Doubler(): JSX.Element {
        return <Button onClick={() => setValue(2 * value)}>Double</Button>;
    }

    function Halver(): JSX.Element {
        return <Button onClick={() => setValue(0.5 * value)}>Halve</Button>;
    }
    return (
        <div>
            <h3>Double Half</h3>
            <div>
                The current value is: <span>{value}</span>
            </div>
            {Doubler()}
            {Halver()}
        </div>
    );
}
