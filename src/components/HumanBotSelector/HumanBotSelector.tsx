import React, {FunctionComponent} from "react";

import './HumanBotSelector.scss';

const HumanBotSelector: FunctionComponent = (): JSX.Element => {
    return (
        <div className="selectedHumanOrBot">
            <button className="selectedHumanOrBot_btn">vs Human</button>
        </div>
    )
}

export default HumanBotSelector;