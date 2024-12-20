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
import { play } from "../../store/slices/playSlice";
import elementTypes from "../../types/elementTypes";
import checkWinner from "../CheckWinner/checkWinner";
import { selectXO } from "../../store/slices/choiceSlice";
import { addPlayer } from "../../store/slices/gameSlice";
import { RootState } from "../../store/store";

import './Game.scss';

const Game: FunctionComponent = (): JSX.Element => {
    const [choice, setChoice] = useState<elementTypes>('');
    const botState = useSelector((state: RootState) => state.game);
    const winnerO = useSelector((state: RootState) => state.game.winner.o);
    const winnerX = useSelector((state: RootState) => state.game.winner.x);
    const playState = useSelector((state: RootState) => state.play.play);
    const choiceState = useSelector((state: RootState) => state.choice.selection);
    const currentPlayer = useSelector((state: RootState) => state.game.currentPlayer);
    const gameOverState = useSelector((state: RootState) => state.game.gameOver);
    const {board, botMove} = botState;
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(selectXO(choice));
        dispatch(addPlayer(choice));
    }, [choice]);

    useEffect(() => {
        if (botMove) {
            BotMoveLogick(board, currentPlayer, dispatch)
        }
        checkWinner(board, currentPlayer, dispatch)
    }, [botMove])

    useEffect(() => {
        if (playState === true && choiceState === "") {
            dispatch(selectXO("X"));
            dispatch(addPlayer("X"));
            setChoice("X")
        }
    }, [playState])

    useEffect(() => {
        if (playState) {
            setChoice(currentPlayer)
        }
    }, [currentPlayer, playState])

    useEffect(() => {
        dispatch(play(false))
    }, [winnerX, winnerO])

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