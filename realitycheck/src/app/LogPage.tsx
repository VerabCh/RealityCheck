import React, {useState, useEffect} from 'react';
import styles from './LogPage.module.css';

//Import Firebase
import firebase, { FirebaseError } from 'firebase/app';
import 'firebase/database';
import { firebaseConfig } from './firebaseConfig.js';


const LogPage: React.FC = () => {
    const [formData, setFormData] = useState({
      title: '',
      category: '',
      points: '',
      description: '',
      date: '',
    });


  
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
      const { name, value } = e.target;
      setFormData(prevData => ({
        ...prevData,
        [name]: value,
      }));
    };

    useEffect(() => {
        // Initialize Firebase
        const firebaseConfig = {
            apiKey: "AIzaSyAdhAKyaQh9rjsEOQCC2ge0Inddhk5daiU",
            authDomain: "realitycheck-3f781.firebaseapp.com",
            databaseURL: "https://realitycheck-3f781-default-rtdb.firebaseio.com",
            projectId: "realitycheck-3f781",
            storageBucket: "realitycheck-3f781.appspot.com",
            messagingSenderId: "657827613201",
            appId: "1:657827613201:web:e7d6225c73205811c1bfb0",
            measurementId: "G-GME3FRC0BJ"
        };
    
        if (!firebase.apps.length) {
          firebase.initializeApp(firebaseConfig);
        }
      }, []);

    
  
    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();

      const db = (firebase as any).database();
      const logsRef = db.ref('logs'); 
  
      // Push the data to the 'logs' node
      const logData = {
        title: formData.title,
        category: formData.category,
        points: formData.points,
        description: formData.description,
        date: formData.date,
      };

    // Push the log data to the 'logs' node in the database
    logsRef.push(logData)
    .then(() => {
        console.log('Log data stored successfully');
    })
    .catch((error: FirebaseError) => {
        console.error('Error storing log data:', error);
    });
  
      // Reset form data
      setFormData({
        title: '',
        category: '',
        points: '',
        description: '',
        date: ''
      });
  
      console.log('Data submitted successfully!');
    };


  
    return (
      <div className={styles.logcontainer}>
        <h1 className= {styles.header}>
            Log
        </h1>
        <br></br>
        <form onSubmit={handleSubmit}>
            <label className = {styles.title}>
                Title:
            </label>
            <br></br>
            <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleInputChange}
                required
            />
            <br/>
            <br></br>
            <label className = {styles.category}>
                Category:
            </label>
            <br></br>
            <select
                name="category"
                value={formData.category}
                onChange={handleInputChange}
                required>
                <option value="">Select the category</option>
                <option value="Mental">Mental</option>
                <option value="Physical">Physical</option>
                <option value="Emotional">Emotional</option>
            </select>
            <br/>
            <br></br>
            <label className = {styles.points}>
                Points: 
            </label>
            <br></br>
            <input
                type = "number"
                name = "points"
                required
                onChange = {handleInputChange}
                value = {formData.points}
                min = "1"
                max = "20" />
                <br></br>
                <br></br>

                <label className = {styles.date}>
                  Date: 
                </label>
                <br></br>
                  <input
                    name = "date"
                    type = "date"
                    onChange = {handleInputChange}
                    required
                    value = {formData.date}
                  />
            <br></br>
            <br></br>
            <label className = {styles.description}>
                Description:
            </label>
            <br></br>
            <textarea
              name="description"
              value={formData.description}
              required
              onChange={handleInputChange} 
              maxlength = "150"
              />
            <br></br>
            <br></br>
            <div className = {styles.submit}>
                <button type="submit">Submit</button>
            </div>
        </form>
      </div>
    );
  };
  

export default LogPage;