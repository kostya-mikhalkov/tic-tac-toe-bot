import { AppDispatch } from '../../store/store';
import easyDifficulty from './botDifficulty/easyDifficulty';
import mediumDifficulty from './botDifficulty/mediumDifficulty';
import hardDifficulty from './botDifficulty/hardDifficulty';

const BotMoveLogick = (board: string[], 
                       player: string, 
                       dispatch: AppDispatch,
                       difficulty: string): void => {
    if (difficulty === 'easy') {
        easyDifficulty(board, player, dispatch)
    }
    if(difficulty === 'medium') {
        mediumDifficulty(board, player, dispatch)
    }
    if(difficulty === 'hard') {
        hardDifficulty(board, player, dispatch)
    }
}

export default BotMoveLogick;