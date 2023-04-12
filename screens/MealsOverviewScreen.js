import { View,Text, StyleSheet, FlatList, Image } from 'react-native';
import {MEALS} from '../data/dummy-data';

function MealsOverviewScreen({route}) {
    //Fetching category ID from URL
    const catId = route.params.categoryId;

    //Filtering data on the basis of category ID
    const displayedMeals = MEALS.filter((mealItem) => {
        return mealItem.categoryIds.indexOf(catId) >= 0;
    });

    //Rendering relavent data fetched via filtering
    function renderMealItem(itemData) {
        // console.log("data",itemData.item.imageUrl);
        return( <View>
        <Text>{itemData.item.title}</Text>
        <Image source={{uri: itemData.item.imageUrl}} style={styles.image}/>
        </View>);
    }

    //Displaying Data
    return (
        <View style={styles.container}>
            <Text> Meals Overview Screen - {catId}</Text>
            <FlatList data={displayedMeals} keyExtractor={(item)=>item.id} renderItem={renderMealItem} />
        </View>
    )
}

export default MealsOverviewScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16
    },
    image: {
        width: '100%',
        height: 200
    }
})