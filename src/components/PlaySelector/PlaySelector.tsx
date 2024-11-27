import React, {FunctionComponent} from "react";

import './PlaySelector.scss';

const PlaySelector: FunctionComponent = (): JSX.Element => {
    return (
        <div className="play">
            <button className="play_btn">Play</button>
        </div>
    )
}

export default PlaySelector;