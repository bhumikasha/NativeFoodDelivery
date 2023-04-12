import { FlatList, View } from "react-native";
import CategoryGridTile from "../components/CategoryGridTile";
import { CATEGORIES } from "../data/dummy-data";

function CategoriesScreen({navigation}) {
    function renderCategoryItem(itemData) {
        function mealsOverviewHander() {
            navigation.navigate('Overview', {
                categoryId: itemData.item.id,
            });
        }
        return <CategoryGridTile title={itemData.item.title} color={itemData.item.color} onPress={mealsOverviewHander}/>
    }
    return(
    <View>
            <FlatList 
                data={CATEGORIES} 
                keyExtractor={(item)=>item.id} 
                renderItem={renderCategoryItem}  //this renderItem has to be a component, like above which will return a JSX
                key={'#'}
                numColumns={2}
            />
    </View>
    );
}

export default CategoriesScreen;