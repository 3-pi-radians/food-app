import React from 'react'
import { StyleSheet, Text,FlatList, View , TouchableOpacity} from 'react-native';
import CategoryDetails from '../components/CategoryDetails';
import { withNavigation } from 'react-navigation';

const ResultsList = ({ navigation, categories, title }) => {

    if(!categories.length) return null;

    return (
        <View>

            <Text style = {styles.titleStyle}>
               {title}
            </Text>

            <FlatList 
             horizontal
             showsHorizontalScrollIndicator = {false}
             data = {categories}
             keyExtractor = {category => category.id}                                         
             renderItem = {({item}) => { 
              return(
                  <TouchableOpacity onPress = {() => navigation.navigate('ResultShow', {
                      id : item.id
                  })}>
                      <CategoryDetails category = {item} />
                  </TouchableOpacity>               
              ) 
            }}
            />

        </View>
    )
}

const styles = StyleSheet.create({
    titleStyle : {
        fontSize : 18,
        fontWeight : 'bold',
        margin: 5
    }
});
export default withNavigation(ResultsList);
