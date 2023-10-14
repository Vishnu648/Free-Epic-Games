import React from 'react';
import styles from './gameDetails.module.css'
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import useFetch from '../../utils/useFetch';


const GameDetail = () => {
   const { id } = useParams();

    const games = useFetch("epic-free-games")
    
    const Cgames = useFetch("epic-free-games-coming-soon")
    

    const idString = id.toString();
    const nameWithSpaces = idString.replace(/-/g, ' ');
    let selectedGame = games.find((game) => game.name === nameWithSpaces);
    if(!selectedGame)
        selectedGame =  Cgames.find((s) => s.name === nameWithSpaces) 

    return (
        <div className={styles.Container}>

            <Link to='/' className={styles.link}>Back</Link>

            {selectedGame ? (
                <div className={styles.detailsContainer}>
                    <img className={styles.gameBanner} src={selectedGame.offerImageWide} alt={selectedGame.name} />


                    <div className={styles.Game_details}>
                        <h2 className={styles.gameName}>{selectedGame.name}</h2>
                        <p>{selectedGame.description}</p>

                    </div>

                    <div className={styles.addD}>
                        <p>Publisher: <span className={styles.highlight}>{selectedGame.publisher}</span></p>
                        <p>Original Price: <span className={styles.highlight}>{selectedGame.originalPrice}</span> {selectedGame.currencyCode}</p>

                    </div>

                    <a className={styles.link} href={selectedGame.appUrl} rel="noreferrer" target="_blank"> Buy Now</a>

                </div>
            ) : (
                <p style={{ color: 'red', margin: '50px' }}>Game not found</p>
            )}


        </div>
    );
};

export default GameDetail;
