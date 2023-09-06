//Map Page will handle loading in everything
//Within LegendBox the Dot will be loaded in to work with the point system


import React, {useState, useEffect} from 'react';
import Image from 'next/image';
import styles from './Map.module.css'

import LegendBox from './LegendBox';
import DateBox from './DateBox';
import Dot from './Dot';

import 'firebase/database';
import firebase from 'firebase/app';

const MapPage: React.FC = () => {
    const [selectedOption, setSelectedOption] = useState('Day');
    return (
          <main>
                <div>
                    <LegendBox selectedOption={selectedOption} /> 
                </div>
                <div>
                    <DateBox selectedOption={selectedOption} setSelectedOption={setSelectedOption} />
                </div>
                <div className = {styles.picture}>
                    <Image 
                        src = "/images/Map.png" 
                        alt = "Map"
                        width = {800}
                        height = {1000}
                    />
                </div>
          </main> 
    )
  };
  
  export default MapPage;