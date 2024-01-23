import React, { FC, useState } from 'react';
import './Popups.scss';

interface LoadingPopupProps {
    isLoading: boolean;
}

const LoadingPopup: FC<LoadingPopupProps> = ({ isLoading }) => {    
    if (!isLoading) {
        return null;
    }

    return (
        <div className="loading-popup active">
            <div className="loading-popup-container">
                <div className="loading-spinner"></div>
            </div>
        </div>
    );
};

export default LoadingPopup;
