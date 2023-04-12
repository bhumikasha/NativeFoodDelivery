import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar, StyleSheet} from 'react-native';
import CategoriesScreen from './screens/CategoriesScreen';
import MealsOverviewScreen from './screens/MealsOverviewScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style='dark'/>
      <NavigationContainer>
        <Stack.Navigator>
        {/* the top-most screen is used as the initial screen  */}
          <Stack.Screen name="Categories" component={CategoriesScreen} options={{title: 'P All categories'}}/>
          <Stack.Screen name="Overview" component={MealsOverviewScreen} 
          options={({route, navigation})=>{
            const catId = route.params.categoryId;
            return {
              //Title of NavBar
              title: catId
            };}}
            />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({

});
