import React from 'react';
import { Feather } from '@expo/vector-icons';
import { View, TextInput , StyleSheet} from 'react-native';

function SearchBar({data , onDataChange, fetchResults}) {
    

    return (
        <View style = {styles.backgroundStyle}>
            <Feather  
             name="search" 
             size={24} color="black"
             onPress = {fetchResults} />
            <TextInput
             placeholder = 'search'
             style  = {styles.textInput}
             autoCapitalize = "none"
             autoCorrect = {false}
             value = {data}  
             onChangeText = {onDataChange}
             onEndEditing = {fetchResults}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    backgroundStyle :{
        backgroundColor : '#eee',
        height : 40,
        marginVertical : 10,
        marginHorizontal : 7,
        borderRadius : 7,
        flexDirection : 'row',
        alignItems : "center",
        paddingLeft : 5
    },
    textInput : {
        flex : 1,
        marginLeft : 5
    }
});
export default SearchBar
