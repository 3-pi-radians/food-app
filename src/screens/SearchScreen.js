import React, { useState}  from 'react';
import SearchBar from '../components/SearchBar';
import { View, Text, StyleSheet, ScrollView} from 'react-native';
import useResults from '../hooks/useResults';
import ResultsList from '../components/ResultsList';

const SearchScreen = ()  =>  {
    const [data, setData] = useState('');
    const [results, errMessage, fetchResults] = useResults();

    const fetchResultsByPrice = (price) => {
       return results.filter(result => result.price === price);
    }

    return (
        <>
            <SearchBar 
              data = {data} 
              onDataChange = {(term) => setData(term)}
              fetchResults = {() =>fetchResults()}
            />
            {
               errMessage ? <Text>{errMessage}</Text> : null 
            }
            <ScrollView>
                <ResultsList categories = {fetchResultsByPrice('$')} title = 'economic' />
                <ResultsList categories = {fetchResultsByPrice('$$')} title = 'business' />
                <ResultsList categories = {fetchResultsByPrice('$$$')} title = 'firstClass' />              
            </ScrollView>
        </>
    )
}

const styles = StyleSheet.create({});
export default SearchScreen;
