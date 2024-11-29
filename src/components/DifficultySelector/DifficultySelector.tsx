import React, { FunctionComponent } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store/store";
import { levelChange } from "../../store/slices/difficultySlice";

import './DifficultySelector.scss';

const DifficultySelector: FunctionComponent = (): JSX.Element => {
    const dispatch = useDispatch();
    const selectedDifficulty = useSelector((state: RootState) => state.level.level);
    const playState = useSelector((state: RootState) => state.play.play); 

    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => { dispatch(levelChange(event.target.value)); }; 
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