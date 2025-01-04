import { AppDispatch } from "../../../store/store";
import { addPlayer, addElements, botMoveOnBoard } from "../../../store/slices/gameSlice";
import easyDifficulty from './easyDifficulty';

const hardDifficulty = (board: string[], player: string, dispatch: AppDispatch): void => {
    const winnerCombination = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6]
    ];
    const rivalPlayer = player === 'X' ? 'O' : 'X';

    for(const key of winnerCombination) {
        const [a, b, c] = key;
        if(board[a] === player && board[b] === player && board[c] === '') {
            moved(c);
            return
        }
        if(board[a] === player && board[b] === '' && board[c] === player) {
            moved(b);
            return
        }
        if(board[a] === '' && board[b] === player && board[c] === player) {
            moved(a);
            return
        }

        if(board[a] === rivalPlayer && board[b] === rivalPlayer && board[c] === '') {
            moved(c);
            return
        }
        if(board[a] === rivalPlayer && board[b] === '' && board[c] === rivalPlayer) {
            moved(b);
            return
        }
        if(board[a] === '' && board[b] === rivalPlayer && board[c] === rivalPlayer) {
            moved(a);
            return
        }
    }

    for (const key of winnerCombination) {
        const [a,b,c] = key;

        if(board[a] === player && board[b] === '' && board[c] === '') {
            moved(b);
            return
        }
        if(board[a] === '' && board[b] === '' && board[c] === player) {
            moved(a);
            return
        }
        if(board[a] === '' && board[b] === player && board[c] === '') {
            moved(c);
            return
        }
    }

    if (board[4] === '') {
        moved(4);
        return
    }

    const anglesFieldGame = [0, 2, 6, 8];
    for (const key of anglesFieldGame) {
        if (board[key] === '') {
            moved(key);
            return
        }
    }

    easyDifficulty(board, player, dispatch);

    function moved(ind: number): void {
        dispatch(addElements(ind));
        dispatch(botMoveOnBoard(false));
        dispatch(addPlayer(player === 'X' ? 'O' : 'X'));
    }
 }

export default hardDifficulty;