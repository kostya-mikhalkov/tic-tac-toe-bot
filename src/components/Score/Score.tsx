import { FunctionComponent } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";

import scoreImgX from '../../images/X_little.svg';
import scoreImgO from '../../images/O_little.svg';

import './Score.scss';

const Score: FunctionComponent = (): JSX.Element => {
    const stateX = useSelector((state: RootState) => state.game.winner.x);
    const stateO = useSelector((state: RootState) => state.game.winner.o);

    return (
        <div className="score">
            <div className="score-flex">
                <img src={scoreImgX} alt="X" />
                <div className="scoreLine"></div>
                <div className="score-flex_tab">{stateX}</div>
            </div>
            <div className="score-flex">
                <img src={scoreImgO} alt="O" />
                <div className="scoreLine"></div>
                <div className="score-flex_tab">{stateO}</div>
            </div>
        </div>
    )
}

export default Score;