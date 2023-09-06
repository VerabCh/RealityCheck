import React from 'react';
import styles from './Button.module.css';

interface ButtonProps {
  onClick?: () => void;
  children: React.ReactNode;
}

const HomeButton: React.FC<ButtonProps> = ({ onClick, children }) => {
  const handleButtonClick = () => {
    if (onClick) {
      onClick();
    }
  };

  return (
    <button className={styles.button} onClick={handleButtonClick}>
      {children}
    </button>
  );
};

export default HomeButton;