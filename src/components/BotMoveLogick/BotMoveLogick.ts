import { AppDispatch } from '../../store/store';
import { addElements, botMoveOnBoard, addPlayer } from "../../store/slices/gameSlice";

const BotMoveLogick = (board: string[], player: string, dispatch: AppDispatch): void => {
    console.log("Current Board State: ", board);

    const emptyIndices: number[] = [];

    board.forEach((item, ind) => {
        if (item === "") {
            emptyIndices.push(ind);
        }
    });

    if (emptyIndices.length === 0) {
        // Если нет пустых индексов, завершаем функцию
        console.log("No empty indices found.");
        return;
    }

    // Выбираем случайный индекс из списка пустых индексов
    const randomIndex = Math.floor(Math.random() * emptyIndices.length);
    const chosenIndex = emptyIndices[randomIndex];

    console.log("Chosen Index: ", chosenIndex);

    // Проверка на корректность индекса
    if (chosenIndex === undefined || board[chosenIndex] !== "") {
        console.error("Invalid index chosen. Aborting move.");
        return;
    }

    dispatch(addElements(chosenIndex));
    dispatch(botMoveOnBoard(false));
    dispatch(addPlayer(player === 'X' ? 'O' : 'X'));

    console.log("Board state after bot move: ", board);
}

export default BotMoveLogick;