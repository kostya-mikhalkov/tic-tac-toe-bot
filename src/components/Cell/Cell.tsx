import { memo, useState, useEffect, FunctionComponent } from "react";
import { useSelector } from 'react-redux';
import { RootState } from "../../store/store";
import elementTypes from "../../types/elementTypes";
import imageX from '../../images/X_little.svg';
import imageO from '../../images/O_little.svg';

interface CellProps {
    ind: number;
    classes: string;
    initialState: elementTypes;
    onChangeXO: (elem: elementTypes) => void
}

const Cell: FunctionComponent<CellProps> = ({ ind, classes, initialState, onChangeXO }): JSX.Element => {
    const [state, setState] = useState(false);
    const [turn, setTurn] = useState("X");
    const playState = useSelector((state: RootState) => state.play.play);

    useEffect(() => {
        if (!playState) {
            setState(false);
        }
    }, [playState]);

    const handleChange = () => {
        if (playState && !state) {
            setState(true);
            setTurn(initialState)
            onChangeXO(initialState === 'X' ? 'O' : 'X')
        }
    };

    return (
        <div
            key={ind}
            className={state ? 'cell-active' : classes}
            onClick={() => playState && handleChange()}
        >
            {state ? <img src={turn === 'X' ? imageX : imageO} alt={turn}/> : null}
        </div>
    );
};

export default memo(Cell);
