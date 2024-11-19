import React, {FunctionComponent} from "react";
import LineProps from "../../types/lineTypes";

import { ReactComponent as HorizontalLineSVG } from '../../images/HorizontalLine.svg';
import { ReactComponent as VerticalLineSVG } from '../../images/VerticalLine.svg';


import './DividerLine.scss';

const DividerLine: FunctionComponent<LineProps> = ({orientation, position}): JSX.Element => {
    const lineClass = `divider-line ${orientation} position-${position}`;

    const SVGComponent = orientation === 'vertical' ? VerticalLineSVG : HorizontalLineSVG;

    return (
        <div className={lineClass}>
            <SVGComponent />
        </div>
    );
};

export default DividerLine;