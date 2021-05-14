import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet , Image} from 'react-native';
import yelp from '../api/yelp';

const ResultShowScreen = ({navigation}) => {
    const [result , setResult] = useState(null);
     const id =  navigation.getParam('id');

    const fetchResults =  (id) => {
        yelp.get(`/${id}`)
        .then(response => setResult(response.data))
        .catch(err => console.log(err));
    }
    useEffect(() => {
        fetchResults(id);
    }, []);

    if(!result) return null;
   
    return (
        <View style = {styles.viewStyle}>
            <Text>{result.name}</Text>
            <FlatList 
              data = {result.photos}
              keyExtractor = {photo => photo}
              renderItem = {({item}) => <Image style = {styles.imageStyle} source = {{uri : item}} /> }
            />
        </View>
    )
}

const styles = StyleSheet.create({
    viewStyle : {
        alignItems : 'center'
    },
    imageStyle : {
        width : 350,
        height : 200,
        marginTop : 5,
        marginHorizontal : 10, 
    }
})
export default ResultShowScreen;
