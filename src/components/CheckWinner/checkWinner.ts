import { AppDispatch } from "../../store/store";
import { addWinner, gameOver, addWinnerPlayer, addCheckedWinnerBoolean } from "../../store/slices/gameSlice";
import { play } from "../../store/slices/playSlice";

const checkWinner = (board: string[], playerCurrent: string, dispatch: AppDispatch) => {
    const player = playerCurrent === 'X' ? 'O' : 'X';

    const winnerCombination = [[0, 1, 2], 
                               [3, 4, 5], 
                               [6, 7, 8],
                               [0, 3, 6],
                               [1, 4, 7],
                               [2, 5, 8],
                               [0, 4, 8],
                               [2, 4, 6]
                              ];
    for (const key of winnerCombination) {
        if (key.every(index => board[index] === player)) {
            dispatch(addWinner(player));
            dispatch(addWinnerPlayer(player));
            dispatch(gameOver());
            dispatch(play(false));
            dispatch(addCheckedWinnerBoolean(true));
            return;
        }
    }
}

export default checkWinner;