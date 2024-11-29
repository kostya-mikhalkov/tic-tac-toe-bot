import React, {FunctionComponent, useState} from "react";
import DividerLine from "../DividerLine/DividerLine";
import DifficultySelector from "../DifficultySelector/DifficultySelector";
import PlaySelector from '../PlaySelector/PlaySelector';
import HumanBotSelector from "../HumanBotSelector/HumanBotSelector";
import ChoiceCrossOrZeroSelector from "../ChoiceCrossOrZeroSelector/ChoiceCrossOrZeroSelector";

import './Game.scss';

const Game: FunctionComponent = (): JSX.Element => {
    const [difficulty, setDifficulty] = useState('easy');

    const onChangeDifficulty = (newDifficulty: string): void => {
        setDifficulty(newDifficulty)
    }

    return (
        <div className="game">
            <DividerLine orientation="horizontal" position={1} />
            <DividerLine orientation="horizontal" position={2} />
            <DividerLine orientation="vertical" position={1} />
            <DividerLine orientation="vertical" position={2} />
            
            {Array.from({length: 9}).map((_, ind): JSX.Element => {
                return <div key={ind} className="cell"></div>
            })}
            <div className="game_btn">
                <DifficultySelector />
                <PlaySelector />
                <HumanBotSelector />
            </div>
            <ChoiceCrossOrZeroSelector />
        </div>
    )
}

export default Game;