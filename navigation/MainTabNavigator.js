import React from 'react';
import { Platform } from 'react-native';
import {
  createStackNavigator,
  createBottomTabNavigator,
} from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import IngredientScreen from '../screens/IngredientsScreen'
import LinksScreen from '../screens/LinksScreen';
import SettingsScreen from '../screens/SettingsScreen';
import RecipeScreen from '../screens/RecipeScreen'
import SingleRecipeScreen from '../screens/SingleRecipeScreen'

const HomeStack = createStackNavigator({
  Home: HomeScreen,
});

HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-information-circle${focused ? '' : '-outline'}`
          : 'md-information-circle'
      }
    />
  ),
};


const IngredientsStack = createStackNavigator({
  Ingredients: IngredientScreen,
});
IngredientsStack.navigationOptions = {
  tabBarLabel: 'Ingredient List',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-add' : 'md-add'}
    />
  ),
};



const SingleRecipeStack = createStackNavigator({
  SingleRecipe: SingleRecipeScreen,
});

SingleRecipeStack.navigationOptions = {
  tabBarLabel: 'Your Recipe',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-done-all' : 'md-done-all'}
    />
  ),
};


const RecipeStack = createStackNavigator({
  Recipes: RecipeScreen,
});

RecipeStack.navigationOptions = {
  tabBarLabel: 'Recipes',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-pizza' : 'md-pizza'}
    />
  ),
};

export default createBottomTabNavigator({
  HomeStack,
  IngredientsStack,
  RecipeStack,
  SingleRecipeStack
});
