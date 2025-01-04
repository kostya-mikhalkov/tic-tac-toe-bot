import { AppDispatch } from "../../../store/store";
import { addElements, botMoveOnBoard, addPlayer } from "../../../store/slices/gameSlice";

const easyDifficulty = (board: string[], player: string, dispatch: AppDispatch) => {
    const emptyIndices: number[] = [];

    board.forEach((item, ind) => {
        if (item === "") {
            emptyIndices.push(ind);
        }
    });

    if (emptyIndices.length === 0) {
        return;
    }

    const randomIndex = Math.floor(Math.random() * emptyIndices.length);
    const chosenIndex = emptyIndices[randomIndex];

    if (chosenIndex === undefined || board[chosenIndex] !== "") {
        console.error("Invalid index chosen. Aborting move.");
        return;
    }

    dispatch(addElements(chosenIndex));
    dispatch(botMoveOnBoard(false));
    dispatch(addPlayer(player === 'X' ? 'O' : 'X'));
}

export default easyDifficulty;