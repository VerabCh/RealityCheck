import React, { useEffect, useState } from 'react';
import styles from './History.module.css';
import firebase from 'firebase/app';
import 'firebase/database';
import { firebaseConfig } from './firebaseConfig';

interface LogData {
  title: string;
  category: string;
  description: string;
  points: number;
  date: string; 
}

const HistoryPage: React.FC = () => {
  const [logs, setLogs] = useState<LogData[]>([]);

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
        setLogs([]);``
      });
  }, []);

  return (
    <div className = {styles.historycontainer}>
        <h1 className = {styles.header}>
        History Page
        </h1>
        <ul className = {styles.entriescontainer}>
            {logs.map((log, index) => (
                <li className = {styles.listcontainer} key={index}>
                <div className={styles.logEntry}>
                    <div className={styles.logEntryItem}>
                    <strong>Title:</strong> {log.title}
                    </div>
                    <div className={styles.logEntryItem}>
                    <strong>Category:</strong> {log.category}
                    </div>
                    <div className={styles.logEntryItem}>
                    <strong>Points:</strong> {log.points}
                    </div>
                    <div className={styles.logEntryItem}>
                    <strong>Date: </strong> {log.date}
                    </div>
                    <div className={styles.logEntryItem}>
                    <strong>Description:</strong> {log.description}
                    </div>
                </div>
                </li>
            ))}
        </ul>
    </div>
  );
};

export default HistoryPage;
