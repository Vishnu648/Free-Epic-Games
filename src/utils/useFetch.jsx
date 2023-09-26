import { useEffect,useState } from 'react';
import axios from 'axios'



const useFetch = (endpoint) => {

    const [games, setGames] = useState([])

    const options = {
        method: 'GET',
        url: `https://epic-free-games.p.rapidapi.com/${endpoint}`,
        headers: {
            'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API,
            'X-RapidAPI-Host': 'epic-free-games.p.rapidapi.com'
        }
    };

    const fetchData = async () => {

        try {
            const response = await axios.request(options);
            setGames(response.data)
        } catch (error) {
            console.error(error);
        }

    };

    useEffect(() => {
        fetchData();
    }, [])

    return games
};

export default useFetch;
