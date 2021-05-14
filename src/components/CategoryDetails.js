import React from 'react';
import { StyleSheet, Text, View , Image} from 'react-native';

function CategoryDetails({category}) {
    return (
        <View style={styles.container}>
            <Image
              style = {styles.imageStyle} 
              source = {{uri : category.image_url}}
            />    
            <Text style = {styles.nameStyle}>{category.name}</Text>
            <Text style = {styles.reviewStyle}>{category.rating} Stars, {category.review_count} Reviews </Text>
        </View>
    )
}


const styles = StyleSheet.create({
    container :{
        marginLeft:3
    },
    imageStyle : {
        height : 180,
        width : 250,
        borderRadius : 7
    },
    nameStyle : {
        fontWeight : 'bold'
    }, 
    reviewStyle : {
        fontSize : 12
    }
})
export default CategoryDetails;