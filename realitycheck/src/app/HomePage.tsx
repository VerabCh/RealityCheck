import React from 'react';
import styles from './HomePage.module.css';

const HomePage: React.FC = () => {
  return (
    <div className = {styles.home}>
        <h1 className={styles.header}>
            Home
        </h1>
        <p>
            <h1 className={styles.header2}>
                What is RealityCheck? 
            </h1>
            RealityCheck is a personal logbook that provides the user the ability to keep track of and value 
            the activities that they do on a daily basis. The goal of RealityCheck is to provide a visualization of goals (big or small) that we achieve
            on a daily basis. 
        </p>
        <p>
            Achievements are subjective and that is okay! You decide the value of everything that is logged, no one else can judge your achievements but you at the end of the day. 
        </p>
        <br></br>
        <h2 className={styles.header2}>
            How to use RealityCheck
        </h2>
        <p>
            <p className = {styles.header3}>
                Log: 
            </p> 
            Select Log from the left-hand side to begin. In the Log tab you can input your Activity, what it would be categorized as, how many points you would value
            it for, and a short description of what the activity was. 
        </p>
        <p>
            <p className = {styles.header3}>
                Map: 
            </p>
            Select Map from the left-hand side to view your map of achievements! The map is sectioned into three corners for the three categories you could choose from
            when logging (Mental, Physical, Emotional). The dot on the screen is you, the user. For every activity logged, the dot will move accordingly to the points
            allotted and category selected. On this page you can also change the view from day, week, month, or year. 
        </p>
        <p>
            <p className = {styles.header3}>
                History: 
            </p> 
            Select History to view a history of everything that you logged into RealityCheck. 
        </p>
    </div>
  )
};

export default HomePage;