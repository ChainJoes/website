import React, { FC } from 'react';
import './LoadingPopup.scss';

interface LoadingPopupProps {
    isLoading: boolean;
}

const LoadingPopup: FC<LoadingPopupProps> = ({ isLoading }) => {
    if (!isLoading) {
        return null;
    }

    return (
        <div className="loading-popup">
            <div className="loading-popup-container">
                <div className="loading-spinner"></div>
            </div>
        </div>
    );
};

export default LoadingPopup;
