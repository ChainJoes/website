import { FC, useEffect, useState } from "react";
import { Success } from "../../../../../Components/Icons/Icons"


interface PopupProps {
  onClose: () => void;
}

export const StatusModal: FC<PopupProps> = ({ onClose }) => {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsActive(true);
    }, 200);

    setTimeout(() => {
      setIsActive(false);
    }, 3000);

    const timer = setTimeout(() => {
      onClose();
    }, 3300);

    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className={`status-popup ${isActive ? 'active' : ''}`}>
      {Success}
      <div className="title">
        Congratulations
      </div>
      <div className="text">
        You’ve bought 10000000 $CJDEO
      </div>
    </div>
  )
}