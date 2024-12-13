import {FunctionComponent, useState, useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import DividerLine from "../DividerLine/DividerLine";
import DifficultySelector from "../DifficultySelector/DifficultySelector";
import PlaySelector from '../PlaySelector/PlaySelector';
import BotMoveLogick from "../BotMoveLogick/BotMoveLogick";
import HumanBotSelector from "../HumanBotSelector/HumanBotSelector";
import ChoiceCrossOrZeroSelector from "../ChoiceCrossOrZeroSelector/ChoiceCrossOrZeroSelector";
import Score from "../Score/Score";
import Cell from "../Cell/Cell";
import elementTypes from "../../types/elementTypes";
import { selectXO } from "../../store/slices/choiceSlice";
import { addPlayer } from "../../store/slices/gameSlice";
import { RootState } from "../../store/store";

import './Game.scss';

const Game: FunctionComponent = (): JSX.Element => {
    const [choice, setChoice] = useState<elementTypes>('');
    const state = useSelector((state: RootState) => state)
    const botState = useSelector((state: RootState) => state.game);
    const {board, botMove} = botState;
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(selectXO(choice));
        dispatch(addPlayer(choice))
    }, [choice, dispatch]);

    useEffect(() => {
        if (botMove) {
            BotMoveLogick(state, dispatch)
        }
    }, [botMove, dispatch, state])

    const onChangeXO = (elem: elementTypes): void => {
        setChoice(elem)
    }

    return (
        <div className="game">
            <Score />

            <DividerLine orientation="horizontal" position={1} />
            <DividerLine orientation="horizontal" position={2} />
            <DividerLine orientation="vertical" position={1} />
            <DividerLine orientation="vertical" position={2} />
            
            {board.map((_, ind): JSX.Element => {
                return <Cell key={ind} ind={ind} classes='cell'/>
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