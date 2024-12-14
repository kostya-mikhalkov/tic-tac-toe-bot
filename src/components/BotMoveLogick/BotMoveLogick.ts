import { RootState, AppDispatch } from '../../store/store';
import { addElements, botMoveOnBoard, addPlayer } from "../../store/slices/gameSlice";

const BotMoveLogick = (state: RootState, dispatch: AppDispatch): void => {
    const board = state.game.board;
    const player = state.game.currentPlayer;
    const ind = board.findIndex(item => item === '');
    if (ind !== -1) {
        dispatch(addElements(ind));
        dispatch(botMoveOnBoard(false));
        dispatch(addPlayer(player === 'X' ? 'O' : 'X'))
    }
}

export default BotMoveLogick;