import React, { FunctionComponent } from "react";
import DifficultySelectorProps from '../../types/difficultySelectorProps';

import './DifficultySelector.scss';

const DifficultySelector: FunctionComponent<DifficultySelectorProps> = ({selectedDifficulty, onDifficultyChange}): JSX.Element => {
    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => { onDifficultyChange(event.target.value); }; 
    return ( 
        <div className="difficulty-selector"> 
            <label htmlFor="difficulty">Select difficulty:</label> 
            <select id="difficulty" 
                value={selectedDifficulty} 
                onChange={handleChange}> 
                <option value="easy">Easy</option> 
                <option value="medium">Medium</option> 
                <option value="hard">Hard</option> 
            </select> 
        </div> 
    );
}

export default DifficultySelector;