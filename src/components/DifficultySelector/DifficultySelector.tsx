import React, { FunctionComponent } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store/store";
import { addDifficulty } from "../../store/slices/gameSlice";

import './DifficultySelector.scss';

const DifficultySelector: FunctionComponent = (): JSX.Element => {
    const dispatch = useDispatch();
    const selectedDifficulty = useSelector((state: RootState) => state.game.botDifficulty);
    const playState = useSelector((state: RootState) => state.play.play); 

    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => { 
        const value = event.target.value as 'easy' | 'medium' | 'hard';
        dispatch(addDifficulty(value)) 
    };

    return ( 
        <div className="difficulty-selector"> 
            <label htmlFor="difficulty">Select difficulty:</label> 
            <select id="difficulty" 
                value={selectedDifficulty}
                disabled={playState === false ? false : true} 
                onChange={handleChange}> 
                <option value="easy">Easy</option> 
                <option value="medium">Medium</option> 
                <option value="hard">Hard</option> 
            </select> 
        </div> 
    );
}

export default DifficultySelector;