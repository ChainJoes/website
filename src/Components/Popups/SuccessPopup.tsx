import React, { FC, useEffect, useState } from 'react';
import './Popups.scss';
import { Success } from '../Icons/Icons';

interface SuccessPopupProps {
    onClose: () => void;
    text: string
}

const SuccessPopup: FC<SuccessPopupProps> = ({ onClose, text }) => {
    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setIsActive(true);
        }, 200);

        setTimeout(() => {
            setIsActive(false);
        }, 3200);

        const timer = setTimeout(() => {
            onClose();
        }, 3500);

        return () => clearTimeout(timer);
    }, [onClose]);

    return (
        <div className={`loading-popup ${isActive && 'active'}`}>
            <div className="loading-popup-container">
                {Success}
                <div className="title">Congratulations</div>
                <span>
                    {text}
                </span>
            </div>
        </div>
    );
};

export default SuccessPopup;
