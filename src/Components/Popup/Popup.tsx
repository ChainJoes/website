import React, { FC, useEffect, useState } from 'react';
import './Popup.scss';
import { Success } from '../Icons/Icons';

interface PopupProps {
  onClose: () => void;
}

const Popup: FC<PopupProps> = ({ onClose }) => {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsActive(true);
    }, 200);

    setTimeout(() => {
      setIsActive(false);
    }, 2000);

    const timer = setTimeout(() => {
      onClose();
    }, 2300);

    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className={`popup ${isActive ? 'active' : ''}`}>
      <div className="popup-content">
        {Success} Success! Your subscription has been submitted.
      </div>
    </div>
  );
};

export default Popup;
