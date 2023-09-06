import React from 'react';
import Image from 'next/image'
import styles from './Header.module.css';

const Header: React.FC = () => {
    return (
        <header >
            <div className={styles.header}>
                <div className = {styles.logo}> 
                    <Image 
                        src = "/images/Logo.png" 
                        alt = "Logo"
                        width = {100}
                        height = {100}
                    />
                </div>
                <div className={styles.title}>
                    <h1>RealityCheck</h1>
                </div>
            </div>
            <div className={styles.bar}>
            </div>
        </header>
    )
}

export default Header;