import {FunctionComponent} from "react";
import { useSelector, useDispatch } from "react-redux";
import { play } from "../../store/slices/playSlice";
import { RootState } from "../../store/store";
import { resetGame } from "../../store/slices/gameSlice";

import './PlaySelector.scss';

const PlaySelector: FunctionComponent = (): JSX.Element => {
    const state = useSelector((state: RootState) => state.play.play);
    const board = useSelector((state: RootState) => state.game.board);
    const dispatch = useDispatch();
    
    const playChange = () => {
        dispatch(play(!state));
        if (state) {
            dispatch(resetGame())
        }
    };

    return (
        <div className="play">
            <button className="play_btn"
                    onClick={playChange}>
                {state === false ? 'Play' : 'Stop'}
            </button>
        </div>
    )
}

export default PlaySelector;