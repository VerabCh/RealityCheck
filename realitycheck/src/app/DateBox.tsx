import React from 'react';
import styles from './Map.module.css';

interface DateBoxProps {
  selectedOption: string;
  setSelectedOption: React.Dispatch<React.SetStateAction<string>>;
}

const DateBox: React.FC<DateBoxProps> = ({ selectedOption, setSelectedOption }) => {
  const handleOptionChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(e.target.value);
  };

  return (
    <div className={styles.datecontainer}>
      <label htmlFor="options">Select an option: </label>
      <select id="options" value={selectedOption} onChange={handleOptionChange}>
        <option value="Day">Day</option>
        <option value="Week">Week</option>
        <option value="Month">Month</option>
        <option value="Year">Year</option>
      </select>
      <br />
    </div>
  );
};

export default DateBox;