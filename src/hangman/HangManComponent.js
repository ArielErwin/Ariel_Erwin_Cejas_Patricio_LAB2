import React from "react";
import "./styles.css";
import { KeyBoardComponent } from "./components/KeyBoardComponent";
import { DrawComponent } from "./components/DrawComponent";
import { useCounter } from "./hooks/useCounter";

export const HangManComponent = () => {

    const [counter, incrementCounter, decrementCounter, resetCounter] = useCounter(0,{max:10,min:0});
    return (
        <div>
            <h1>HangMan</h1>
            <hr />
        <DrawComponent/>
        <h1>{counter}</h1>
        <KeyBoardComponent incre={incrementCounter}/>
        </div>
    );
};
