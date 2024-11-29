import React, {FunctionComponent} from "react";
import { useDispatch, useSelector } from "react-redux";
import { rival } from "../../store/slices/rivalSlice";
import { RootState } from "../../store/store";

import './HumanBotSelector.scss';

const HumanBotSelector: FunctionComponent = (): JSX.Element => {
    const dispatch = useDispatch();
    const state = useSelector((state: RootState) => state.rival.rival);
    const playState = useSelector((state:RootState) => state.play.play);
    const changeRival = ()=> dispatch(rival(!state));

    return (
        <div className="selectedHumanOrBot">
            <button className="selectedHumanOrBot_btn"
                    disabled = {playState === false ? false : true}
                    onClick={changeRival}>
                {state === false ? 'vs BOT' : 'vs Human'}
            </button>
        </div>
    )
}

export default HumanBotSelector;