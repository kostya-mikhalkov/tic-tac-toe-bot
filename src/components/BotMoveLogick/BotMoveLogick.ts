import { RootState, AppDispatch } from '../../store/store';
import { addElements, botMoveOnBoard, addPlayer } from "../../store/slices/gameSlice";

const BotMoveLogick = (board: string[], player: string, dispatch: AppDispatch): void => {
    const ind = board.findIndex(item => item === '');
    if (ind !== -1) {
        dispatch(addElements(ind));
        dispatch(botMoveOnBoard(false));
        dispatch(addPlayer(player === 'X' ? 'O' : 'X'))
    }
}

export default BotMoveLogick;