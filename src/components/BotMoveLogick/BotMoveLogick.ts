import { RootState, AppDispatch } from '../../store/store';
import { addElements, botMoveOnBoard } from "../../store/slices/gameSlice";

const BotMoveLogick = (state: RootState, dispatch: AppDispatch): void => {
    const board = state.game.board;
    const ind = board.findIndex(item => item === '');
    if (ind !== -1) {
        dispatch(addElements(ind));
        dispatch(botMoveOnBoard(false))
    }
}

export default BotMoveLogick;