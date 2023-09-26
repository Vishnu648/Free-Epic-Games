import React from 'react'
import useFetch from '../../utils/useFetch';
import styles from './upComingFreeGame.module.css';
import { Link } from 'react-router-dom';

const UpComingFreeGames = () => {

    const games=useFetch("epic-free-games-coming-soon")

  return (
    <div className={styles.upComingFreeGame}>
        <h2>Free Games coming soon</h2>
        <div className={styles.gameContainer}>
          {games.map((game) => {
            const nameWithHyphens = game.name.replace(/\s+/g, '-');
            return (
              <Link to={`/game/${nameWithHyphens}`} key={game.name}>
              <div title={game.name} key={game.name} className={styles.card}>
                <img src={game.offerImageTall} className={styles.imgCard} alt="free-game" />
                <div className={styles.details}>
                  <p id={styles.name}>{game.name}</p>
                  <p>by</p>
                  <p id={styles.publisher}>{game.publisher}</p>
                </div>

              </div>
              </Link>
            )
          }
          )}

      </div>
    </div>
  )
}

export default UpComingFreeGames
