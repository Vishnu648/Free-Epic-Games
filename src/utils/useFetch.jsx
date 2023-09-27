import { useEffect,useState } from 'react';
import axios from 'axios'



const useFetch = (endpoint) => {

    const [games, setGames] = useState([])

    const options = {
        method: 'GET',
        url: `https://epic-free-games.p.rapidapi.com/${endpoint}`,
        headers: {
            'X-RapidAPI-Key':d99907482cmsh9ab0fc66bc0daf3p153337jsn95f51e31894e,
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
