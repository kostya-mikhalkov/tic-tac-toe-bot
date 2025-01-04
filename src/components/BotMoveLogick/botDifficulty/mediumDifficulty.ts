import { AppDispatch } from "../../../store/store";
import { addPlayer, addElements, botMoveOnBoard } from "../../../store/slices/gameSlice";
import easyDifficulty from './easyDifficulty';

const mediumDifficulty = (board: string[], player: string, dispatch: AppDispatch): void => {
    const winnerCombination = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6]
    ];
    const rivalPlayer = player === 'X' ? 'O' : 'X';                          

    for (const key of winnerCombination) {
        const [a, b, c] = key;
        if (board[a] === player && board[b] === player && board[c] === '') {
            dispatchMove(c);
            return;
        }
        if (board[a] === player && board[b] === '' && board[c] === player) {
            dispatchMove(b);
            return;
        }
        if (board[a] === '' && board[b] === player && board[c] === player) {
            dispatchMove(a);
            return;
        }
        if (board[a] === rivalPlayer && board[b] === rivalPlayer && board[c] === '') {
            dispatchMove(c);
            return;
        }
        if (board[a] === rivalPlayer && board[b] === '' && board[c] === rivalPlayer) {
            dispatchMove(b);
            return;
        }
        if (board[a] === '' && board[b] === rivalPlayer && board[c] === rivalPlayer) {
            dispatchMove(a);
            return;
        }
    }

    if (board[4] === '') {
        dispatchMove(4);
        return;
    }

    easyDifficulty(board, player, dispatch);

    function dispatchMove(index: number) {
        dispatch(addElements(index));
        dispatch(botMoveOnBoard(false));
        dispatch(addPlayer(rivalPlayer));
    }
}

export default mediumDifficulty;
