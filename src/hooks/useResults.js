import {useState, useEffect} from 'react';
import yelp from '../api/yelp';

export default () => {
    const [results, setResults] = useState([]);
    const [errMessage, setErrMessage] = useState('');

    const fetchResults = (initialTerm) => {
        setErrMessage('');
        setResults([]);
        yelp.get('/search', {
            params: {
                term : initialTerm,
                limit : 50,
                location : 'san jose'
            }
        })
        .then(response => {
            setResults(response.data.businesses)
        })
        .catch(err => {
            setErrMessage('something went wrong.!!please try agian')
        });
    }
    useEffect(()=>{
        fetchResults('pasta')
    }, []);

    return [results, errMessage, fetchResults];
}