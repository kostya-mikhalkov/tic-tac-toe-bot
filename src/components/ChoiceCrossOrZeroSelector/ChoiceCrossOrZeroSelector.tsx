import React, {FunctionComponent} from "react";
import { useDispatch, useSelector } from 'react-redux';
import { selectXO } from "../../store/slices/choiceSlice";
import { RootState } from "../../store/store";

import './ChoiceCrossOrZero.scss';
import O_little from '../../images/O_little.svg';
import X_little from '../../images/X_little.svg';

const ChoiceCrossOrZeroSelector = (): JSX.Element => {
    const dispatch = useDispatch();
    const state = useSelector((state: RootState) => state.choice.selection);
    const playState = useSelector((state:RootState) => state.play.play);
    
    return (
        <div>
            {state === '' ? (<div className="choiceZeroOrCross">
                                <img src={X_little} 
                                    alt="X"
                                    onClick={() => dispatch(selectXO("X"))} />
                                <img src={O_little} 
                                    alt="O"
                                    onClick={() => dispatch(selectXO("O"))} />
                            </div>) :
                (<div className="choiceZeroOrCross">
                    <img src={state === "X" ? X_little : O_little} 
                         alt={state}
                         onClick={() => dispatch(selectXO(state === "X" ? "O" : "X"))} />
                </div>)
            };
        </div>
    )
}

export default ChoiceCrossOrZeroSelector;