import React, {FunctionComponent} from "react";
import DividerLine from "../DividerLine/DividerLine";

import './Game.scss';

const Game: FunctionComponent = (): JSX.Element => {
    return (
        <div className="game">
            <DividerLine orientation="horizontal" position={1} />
            <DividerLine orientation="horizontal" position={2} />
            <DividerLine orientation="vertical" position={1} />
            <DividerLine orientation="vertical" position={2} />
            
            {Array.from({length: 9}).map((_, ind): JSX.Element => {
                return <div key={ind} className="cell"></div>
            })}
        </div>
    )
}

export default Game;