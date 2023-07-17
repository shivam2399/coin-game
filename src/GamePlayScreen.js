import React, { useState } from 'react';
import styles from './GamePlayScreen.module.css';

const GamePlayScreen = () => {
  const [coins, setCoins] = useState(21);
  const [message, setMessage] = useState('');

  const handlePlayerMove = (numCoins) => {
    if (numCoins <= 0 || numCoins > 4 || numCoins > coins) {
      setMessage('Invalid move. Please choose 1, 2, 3, or 4 coins. Better luck next time');
      return;
    }

    const remainingCoins = coins - numCoins;
    setCoins(remainingCoins);
    setMessage('');

    if (remainingCoins === 0) {
      setMessage('You picked up the last coin! You lost.');
      window.location.href = '/lost';
      return;
    }

    const aiPick = (remainingCoins - 1) % 5;
    const aiPickAmount = aiPick === 0 ? 1 : aiPick;
    const remainingCoinsAfterAi = remainingCoins - aiPickAmount;
    setCoins(remainingCoinsAfterAi);
  };

  return (
    <>
      <div className={styles.navbar}>
      <h2 className={styles.navbarHeading}>Coin Game</h2>
      <button className={`${styles.logoutButton} ${styles.button}`} onClick={() => { window.location.href = '/'; }}>
       Logout
      </button>
    </div>

      <div className={styles.container}>
        <p className={styles.coinsRemaining}>Coins Remaining: {coins}</p>
        <p className={styles.message}>{message}</p>
        {coins !== 0 && (
          <>
            <button className={styles.button} onClick={() => handlePlayerMove(1)}>
              Pick 1 coin
            </button>
            <button className={styles.button} onClick={() => handlePlayerMove(2)}>
              Pick 2 coins
            </button>
            <button className={styles.button} onClick={() => handlePlayerMove(3)}>
              Pick 3 coins
            </button>
            <button className={styles.button} onClick={() => handlePlayerMove(4)}>
              Pick 4 coins
            </button>
          </>
        )}
      </div>
    </>
  );
};

export default GamePlayScreen;
