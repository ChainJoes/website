import React, { FC, useEffect, useState } from 'react';
import './Popup.scss';
import { Success, Error } from '../Icons/Icons';

interface PopupProps {
  onClose: () => void;
  isError: boolean;
  Text: string
}

const Popup: FC<PopupProps> = ({ onClose, isError = false, Text }) => {
  const [isActive, setIsActive] = useState(false);

  const icon = isError ? Error : Success;

  useEffect(() => {
    setTimeout(() => {
      setIsActive(true);
    }, 200);

    setTimeout(() => {
      setIsActive(false);
    }, 4000);

    const timer = setTimeout(() => {
      onClose();
    }, 4300);

    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className={`popup ${isActive ? 'active' : ''}`}>
      <div className="popup-content">
        {icon} {Text}
      </div>
    </div>
  );
};

export default Popup;
