import React from 'react';
import styles from './LostScreen.module.css';


const LostScreen = () => {

  const handlePlayAgain = () => {
    window.location.href = '/gameplay';
  };

  return (
    <>
     <div className={styles.container}>
       <h1>You lose</h1>
       <h2>Better luck next time</h2>
       <button onClick={handlePlayAgain} className={styles.button}>Play Again</button>
     </div>
    </>
  );
};

export default LostScreen;
