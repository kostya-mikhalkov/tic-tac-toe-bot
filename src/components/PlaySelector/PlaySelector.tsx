import {FunctionComponent} from "react";
import { useSelector, useDispatch } from "react-redux";
import { play } from "../../store/slices/playSlice";
import { selectXO } from "../../store/slices/choiceSlice";
import { RootState } from "../../store/store";

import './PlaySelector.scss';

const PlaySelector: FunctionComponent = (): JSX.Element => {
    const state = useSelector((state: RootState) => state.play.play);
    const difficultyState = useSelector((state: RootState) => state.level.level)
    const dispatch = useDispatch();
    
    const playChange = () => {
        dispatch(play(!state));
        if (state !== false) {
            dispatch(selectXO(''));
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