"use client"
//The use client allows for the project to work client side without an error occuring. 
//Need to open log first because that is when the database gets initialized, else error
import Image from 'next/image'
import Header from '../app/Header';
import dynamic from 'next/dynamic';
import React, {useState} from 'react';
import styles from './Button.module.css'
import HomePage from './HomePage';
import LogPage from './LogPage'
import HistoryPage from './HistoryPage'
import MapPage from './MapPage';
//Import SideBar
import Sidebar from './Sidebar';

//Importing Firebase
import { useEffect } from 'react';
import { firebaseConfig } from './firebaseConfig.js';
import firebase from 'firebase/app';
import 'firebase/database';

//Import Buttons
const HistoryB = dynamic(() => import ('../app/HistoryButton'));
const HomeB = dynamic(() => import ('./HomeButton'));
const LogB = dynamic(() => import ('./LogoButton'));
const MapB = dynamic(() => import ('./MapButton'));


export default function Home() {

  //Handle each respective button to show each respective page, or hide if its not clicked on
  const [homeContent, setHomeContent] = useState(false);
  const [logContent, setLogContent] = useState(false);
  const [mapContent, setMapContent] = useState(false);
  const [historyContent, setHistoryContent] = useState(false);

  const handleHomeClick = () => {
    setHomeContent(true);
    setLogContent(false);
    setMapContent(false);
    setHistoryContent(false);
  };

  const handleLogClick = () => {
    setHomeContent(false);
    setLogContent(true);
    setMapContent(false);
    setHistoryContent(false);
  };

  const handleMapClick = () => {
    setHomeContent(false);
    setLogContent(false);
    setMapContent(true);
    setHistoryContent(false);
  };

  const handleHistoryClick = () => {
    setHomeContent(false);
    setLogContent(false);
    setMapContent(false);
    setHistoryContent(true);
  };

  return (
    <div>
      <Header />
      <div className = {styles.sideBarContainer}>
        <Sidebar />
      </div>
      <main>
        <div>
        </div>
        <div className={styles.mainContainer}>
          <div className={styles.buttonColumn}>
            <div className={styles.buttonContainer}>
              <HomeB onClick={handleHomeClick}>Home</HomeB>
            </div> 
            <div className={styles.buttonContainer}>
              <LogB onClick={handleLogClick}>Log</LogB>
            </div>
            <div className={styles.buttonContainer}>
              <MapB onClick={handleMapClick}>Map</MapB>
            </div>
            <div className={styles.buttonContainer}>
              <HistoryB onClick={handleHistoryClick}>History</HistoryB>
            </div>
          </div>
          {homeContent && <HomePage />} 
          {logContent && <LogPage />}
          {historyContent && <HistoryPage />}
          {mapContent && <MapPage />}
        </div>

      </main>
    </div>
  );
}



    //{mapContent && <MapPage />}
