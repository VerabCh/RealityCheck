import React, { useEffect, useState } from 'react';
import styles from './Map.module.css';
import 'firebase/database';
import firebase from 'firebase/app';

import Dot from './Dot';

interface LogData {
  category: string;
  points: number;
  date: string;
}

interface LegendBoxProps {
  selectedOption: string;
}

const LegendBox: React.FC<LegendBoxProps> = ({ selectedOption }) => {
  const [logs, setLogs] = useState<LogData[]>([]);
  const [categoryPoints, setCategoryPoints] = useState<{ [key: string]: number }>({});

  useEffect(() => {
    const db = firebase.database();
    const logsRef = db.ref('logs');

    logsRef
      .once('value')
      .then((snapshot) => {
        const logsData: LogData[] = [];
        snapshot.forEach((childSnapshot) => {
          logsData.push(childSnapshot.val());
        });

        setLogs(logsData);
      })
      .catch((error) => {
        console.error('Error fetching data from Firebase:', error);
        setLogs([]);
      });
  }, []);

  useEffect(() => {
    const categoryPointsData: { [key: string]: number } = {};

    // Filter logs based on selected date range
    const filteredLogs = logs.filter((log) => {
      const logDate = new Date(log.date).getTime(); 
      const currentDate = new Date().getTime(); 
      const timeDifference = currentDate - logDate;
  
      switch (selectedOption) {
        case 'Day':
          return timeDifference < 1.2 * 24 * 60 * 60 * 1000; // 24 hours in milliseconds
        case 'Week':
          return timeDifference < 7 * 24 * 60 * 60 * 1000; // 7 days in milliseconds
        case 'Month':
          return timeDifference < 30 * 24 * 60 * 60 * 1000; // 30 days in milliseconds
        case 'Year':
          return timeDifference < 365 * 24 * 60 * 60 * 1000; // 365 days in milliseconds
        default:
          return true; 
      }
    });

    filteredLogs.forEach((log) => {
      const { category, points } = log;
      const numericPoints = Number(points); // Ensure points are treated as numbers
      if (categoryPointsData[category]) {
        categoryPointsData[category] += numericPoints;
      } else {
        categoryPointsData[category] = numericPoints;
      }
    });

    setCategoryPoints(categoryPointsData);
  }, [logs, selectedOption]);

  return (
    <div>
      <div className={styles.legendcontainer}>
        <h2 className={styles.legendheader}>Legend</h2>
        <ul>
          {Object.keys(categoryPoints).map((category) => (
            <li key={category}>
              {category}: {categoryPoints[category]}
            </li>
          ))}
        </ul>
      </div>
      <Dot categoryPoints = {categoryPoints} />
    </div>

  );
};

export default LegendBox;