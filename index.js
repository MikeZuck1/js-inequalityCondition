// Import stylesheets
import './style.css';

const appDiv = document.getElementById('app');
appDiv.innerHTML;

const inequalityCondition = () => {
  // variables
  const fNum = 10; 
  const sNum = 20.2; 
  // condtions
  if(typeof fNum && sNum !== 'number') {
    console.log(`${fNum} & ${sNum} are numbers.`); 
  } else {
    console.log(`${fNum} & ${sNum} are not numbers.`); 
  }
}; 

inequalityCondition(); // call the function 

