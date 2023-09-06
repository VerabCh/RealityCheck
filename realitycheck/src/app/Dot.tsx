import React, { useEffect, useState } from 'react';
import styles from './Map.module.css';

interface DotProps {
  categoryPoints: {
    Mental: number;
    Physical: number;
    Emotional: number;
  };
}

const Dot: React.FC<DotProps> = ({ categoryPoints }) => {
  const [dotPosition, setDotPosition] = useState({ x: 842, y: 400}); 

  useEffect(() => {
    // Calculate the new X and Y coordinates based on points
    const newX =
      842 - 3 * (categoryPoints.Mental || 0) + 3 * (categoryPoints.Emotional || 0);
    const newY =
      400 -
      (categoryPoints.Physical || 0) +
      1 * ((categoryPoints.Mental || 0) + 1 * (categoryPoints.Emotional || 0));

    // Update the dot's position
    setDotPosition({ x: newX, y: newY });
  }, [categoryPoints]);

  return (
    <div className={styles.dotContainer}>
      <div
        className={styles.dot}
        style={{
          left: `${dotPosition.x}px`,
          top: `${dotPosition.y}px`,
          backgroundColor: 'black',
          transition: 'left 0.5s, top 0.5s, background-color 0.5s',
        }}
      ></div>
    </div>
  );
};

export default Dot;