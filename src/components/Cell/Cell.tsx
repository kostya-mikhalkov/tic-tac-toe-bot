import { memo, useState, useEffect, FunctionComponent } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from "../../store/store";
import { selectXO } from "../../store/slices/choiceSlice";
import imageX from '../../images/X_little.svg';
import imageO from '../../images/O_little.svg';

interface CellProps {
    ind: number;
    classes: string;
    initialState: "" | "X" | "O"
}

const Cell: FunctionComponent<CellProps> = ({ ind, classes, initialState }): JSX.Element => {
    const [state, setState] = useState(false);
    const [elem, setElem] = useState<"" | "X" | "O">(initialState);
    const [turn, setTurn] = useState(initialState);
    const dispatch = useDispatch();
    const playState = useSelector((state: RootState) => state.play.play);
    // const choiceState = useSelector((state: RootState) => state.choice.selection);

    useEffect(() => {
        if (!playState) {
            setState(false);
            setElem(''); // Сбрасываем состояние ячейки при остановке игры
        }
    }, [playState]);

    const handleChange = () => {
        if (playState && !state) {
            setState(true);
            setElem(turn);
            setTurn(turn === 'X' ? 'O' : 'X')
        }
        // dispatch(selectXO(newElem)); // Обновляем глобальное состояние выбора
    };

    return (
        <div
            key={ind}
            className={state ? 'cell-active' : classes}
            onClick={() => playState && handleChange()}
        >
            {state ? <img src={turn === 'X' ? imageX : imageO} alt={elem}/> : null}
        </div>
    );
};

export default memo(Cell);
