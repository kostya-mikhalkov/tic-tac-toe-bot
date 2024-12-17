import { memo, FunctionComponent } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from "../../store/store";
import imageX from '../../images/X_little.svg';
import imageO from '../../images/O_little.svg';
import checkWinner from "../CheckWinner/checkWinner";
import { addElements, addPlayer, botMoveOnBoard } from "../../store/slices/gameSlice";

interface CellProps {
    ind: number;
    classes: string;
}

const Cell: FunctionComponent<CellProps> = ({ ind, classes }): JSX.Element => {
    const dispatch = useDispatch();
    const playState = useSelector((state: RootState) => state.play.play);
    const botState = useSelector((state: RootState) => state.rival.rival);
    const botMoveState = useSelector((state: RootState) => state.game.botMove);
    const board = useSelector((state: RootState) => state.game.board);
    const currentPlayer = useSelector((state: RootState) => state.game.currentPlayer);

    const handleChange = () => {
        if (!botState) {
            if (playState && board[ind] === '' && !botMoveState) {
                dispatch(addElements(ind));
                dispatch(addPlayer(currentPlayer === 'X' ? 'O' : 'X'));
                dispatch(botMoveOnBoard(true));
                checkWinner(board, currentPlayer, dispatch)
            }
        }
        if (botState) {
            if (playState && board[ind] === '') {
                dispatch(addElements(ind));
                dispatch(addPlayer(currentPlayer === 'X' ? 'O' : 'X'));
                checkWinner(board, currentPlayer, dispatch)
            }
        }
    };

    return (
        <div
            key={ind}
            className={board[ind] !== '' ? 'cell-active' : classes}
            onClick={() => playState && handleChange()}
        >
            {board[ind] !== '' ? <img src={board[ind] === 'X' ? imageX : imageO} alt={board[ind]} /> : null}
        </div>
    );
};

export default memo(Cell);
