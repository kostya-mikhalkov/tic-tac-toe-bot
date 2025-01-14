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
import { addWinner } from "../../store/slices/gameSlice";
import elementTypes from "../../types/elementTypes";
import checkWinner from "../CheckWinner/checkWinner";
import { selectXO } from "../../store/slices/choiceSlice";
import { addPlayer, resetGame, addCheckedWinnerBoolean } from "../../store/slices/gameSlice";
import { RootState } from "../../store/store";
import Modal from "../Modal/Modal";

import './Game.scss';

const Game: FunctionComponent = (): JSX.Element => {
    const [choice, setChoice] = useState<elementTypes>('');
    const [openModal, setOpenModal] = useState(false);
    const botState = useSelector((state: RootState) => state.game);
    const winnerO = useSelector((state: RootState) => state.game.winner.o);
    const winnerX = useSelector((state: RootState) => state.game.winner.x);
    const playState = useSelector((state: RootState) => state.play.play);
    const choiceState = useSelector((state: RootState) => state.choice.selection);
    const currentPlayer = useSelector((state: RootState) => state.game.currentPlayer);
    const winnerPlayer = useSelector((state: RootState) => state.game.winnerPlayer);
    const gameOver = useSelector((state: RootState) => state.game.gameOver);
    const rivalState = useSelector((state: RootState) => state.rival.rival);
    const difficultyBot = useSelector((state: RootState) => state.game.botDifficulty);
    const {board, botMove} = botState;
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(selectXO(choice));
        dispatch(addPlayer(choice));
    }, [choice]);

    useEffect(() => {
        let timerId: ReturnType<typeof setTimeout> | undefined;
        if(botMove && !gameOver) {
            setTimeout(() => {
                BotMoveLogick(board, currentPlayer, dispatch, difficultyBot);
            }, 1000)
        }
        return () => {
            if(timerId) {
                clearTimeout(timerId);
            }
        }
    }, [botMove, gameOver])

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
        if (!botMove && rivalState) checkWinner(board, currentPlayer, dispatch);
    }, [currentPlayer])

    useEffect(() => {
        dispatch(play(false))
    }, [winnerX, winnerO])

    useEffect(() => {
        if (gameOver) {
            dispatch(resetGame())
        }
        if (gameOver && currentPlayer !== '') {
            setOpenModal(true)
        }
    }, [gameOver])

    useEffect(() => {
        if (board.indexOf("") === -1) {
            dispatch(play(false));
            setOpenModal(true);
            resetGame();
        }
        checkWinner(board, currentPlayer, dispatch);
    }, [botMove]);

    useEffect(() => {
        dispatch(addWinner('Reset'))
    }, [rivalState]);

    const onChangeXO = (elem: elementTypes): void => {
        setChoice(elem)
    }

    const onClose = () => {
        setOpenModal(false);
        dispatch(addCheckedWinnerBoolean(false));
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
            <Modal winnerElement={winnerPlayer} isOpen={openModal} onClose={onClose}/>
        </div>
    )
}

export default Game;