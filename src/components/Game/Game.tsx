import {FunctionComponent, useState} from "react";
import { useSelector } from "react-redux";
import DividerLine from "../DividerLine/DividerLine";
import DifficultySelector from "../DifficultySelector/DifficultySelector";
import PlaySelector from '../PlaySelector/PlaySelector';
import HumanBotSelector from "../HumanBotSelector/HumanBotSelector";
import ChoiceCrossOrZeroSelector from "../ChoiceCrossOrZeroSelector/ChoiceCrossOrZeroSelector";
import Score from "../Score/Score";
import Cell from "../Cell/Cell";

import './Game.scss';
import { RootState } from '../../store/store';

const Game: FunctionComponent = (): JSX.Element => {
    const [difficulty, setDifficulty] = useState('easy');
    const [choice, setChoice] = useState('');
    const choiceState = useSelector((state: RootState) => state.choice.selection);

    const onChangeDifficulty = (newDifficulty: string): void => {
        setDifficulty(newDifficulty)
    }

    const onChangeXO = (elem: string): void => {
        setChoice(elem)
    }

    return (
        <div className="game">
            <Score />

            <DividerLine orientation="horizontal" position={1} />
            <DividerLine orientation="horizontal" position={2} />
            <DividerLine orientation="vertical" position={1} />
            <DividerLine orientation="vertical" position={2} />
            
            {Array.from({length: 9}).map((_, ind): JSX.Element => {
                return <Cell key={ind} ind={ind} classes='cell' initialState={choiceState}/>
            })}
            <div className="game_btn">
                <DifficultySelector />
                <PlaySelector />
                <HumanBotSelector />
            </div>
            <ChoiceCrossOrZeroSelector onChangeXO={onChangeXO} choiceXO={choice}/>
        </div>
    )
}

export default Game;