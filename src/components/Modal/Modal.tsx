import React from "react";
import { RootState } from "../../store/store";
import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";
import { createPortal } from "react-dom";
import modalTypes from "../../types/modalTypes";
import './Modal.scss';
import { useSelector } from 'react-redux';

const Modal: React.FunctionComponent<modalTypes> = ({ winnerElement, isOpen, onClose }): JSX.Element | null => {
    const checkWinnerState = useSelector((state: RootState) => state.game.checkedWinnerBoolean);
    const portalRoot = document.getElementById('portal-root');
    if (!portalRoot) {
        throw new Error('portal is not defined');
    }

    return createPortal(
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    className="modal"
                    initial={{ y: -1000, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -1000, opacity: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <h4 className="modal_title">{!checkWinnerState ? "You played to a draw." : `Winner is ${winnerElement}`}</h4>
                    <button onClick={onClose}
                            className="modal_btn">
                        Close
                    </button>
                </motion.div>
            )}
        </AnimatePresence>,
        portalRoot!
    );
};

export default Modal;
