import {FunctionComponent, useEffect} from "react";
import { useSelector } from 'react-redux';
import { RootState } from "../../store/store";

import './ChoiceCrossOrZero.scss';
import O_little from '../../images/O_little.svg';
import X_little from '../../images/X_little.svg';

interface choiceState {
    onChangeXO: (elem: 'X' | 'O' | '') => void;
    choiceXO: string
}

const ChoiceCrossOrZeroSelector: FunctionComponent<choiceState> = ({onChangeXO, choiceXO}): JSX.Element => {
    const playState = useSelector((state:RootState) => state.play.play);
    const currentPlayer = useSelector((state: RootState) => state.game.currentPlayer);
    useEffect(() => {
        if (playState === false) {
            onChangeXO('')
        }
    }, [playState])
    
    return (
        <div>
            {choiceXO === '' ? (<div className="choiceZeroOrCross">
                                    <img src={X_little} 
                                         alt="X"
                                         onClick={() => onChangeXO("X")} />
                                    <img src={O_little} 
                                         alt="O"
                                         onClick={() => onChangeXO("O")} />
                                </div>) :
            playState === true  ? (<div className="choiceZeroOrCross">
                                                    <img src={choiceXO === "X" ? X_little : O_little} 
                                                         alt={choiceXO} />
                                   </div>) :
            playState === false ? (<div className="choiceZeroOrCross">
                                                    <img src={choiceXO === "X" ? X_little : O_little} 
                                                        alt={choiceXO}
                                                        onClick={() => onChangeXO(choiceXO === "X" ? "O" : "X")} />
                                   </div>) : null
            };
        </div>
    )
}

export default ChoiceCrossOrZeroSelector;