import React from 'react'
import {Platform, Text} from 'react-native'
import Colors from '../constants/Colors'
import {Ionicons} from '@expo/vector-icons'
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs'

import { createStackNavigator } from 'react-navigation-stack'
import {createAppContainer} from 'react-navigation'
import {createBottomTabNavigator} from 'react-navigation-tabs'
import {createDrawerNavigator} from 'react-navigation-drawer'

import CategoriesScreen from '../screens/CategoriesScreen'
import CategoryMealsScreen from '../screens/CategoryMealsScreen'
import MealDetailsScreen from '../screens/MealDetailsScreen'
import FavoritesScreen from '../screens/FavoritesScreen'
import FiltersScreen from '../screens/FiltersScreen'

const MealsNavigator = createStackNavigator({
    Categories: {
        screen: CategoriesScreen, 
    },
    CategoryMeals: {
        screen: CategoryMealsScreen,
    },
    MealDetail: MealDetailsScreen
}, {
    defaultNavigationOptions: {
        navigationOptions: {
            headerStyle: {
                backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : ''
            },
            headerTitleStyle: {
                fontFamily: 'open-sans-bold'
            },
            headerBackTitleStyle: {
                fontFamily: 'open-sans'
            },
            headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primaryColor
        }
    }
})

const FavNavigator = createStackNavigator({
    Favorites: FavoritesScreen,
    MealDetail: MealDetailsScreen
}, {
    defaultNavigationOptions: {
        navigationOptions: {
            headerStyle: {
                backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : ''
            },
            headerTitleStyle: {
                fontFamily: 'open-sans-bold'
            },
            headerBackTitleStyle: {
                fontFamily: 'open-sans'
            },
            headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primaryColor
        }
    }
})

const tabScreenConfig = {Meals: {screen: MealsNavigator, navigationOptions: {
    tabBarIcon: (tabInfo) => {
        return <Ionicons name='ios-restaurant' size={25} color={tabInfo.tintColor} />
    },
    tabBarColor: Colors.primaryColor,
    tabBarLabel: Platform.OS === 'android' ? <Text style={{fontFamily: 'open-sans-bold'}}>Meals</Text> : 'Meals'
}},
Favorites: {screen: FavNavigator, navigationOptions: {
    tabBarIcon: (tabInfo) => {
        return <Ionicons name='ios-star' size={25} color={tabInfo.tintColor} />
    },
    tabBarColor: Colors.accentColor,
    tabBarLabel: Platform.OS === 'android' ? <Text style={{fontFamily: 'open-sans-bold'}}>Favorites</Text> : 'Favorites'
}}
}

const MealsFavTabNavigator = Platform.OS ==='android' ? createMaterialBottomTabNavigator(tabScreenConfig, {
    activeTintColor: 'white',
    shifting: true
}) : createBottomTabNavigator(tabScreenConfig , {
    tabBarOptions: {
        labelStyle: {
            fontFamily: 'open-sans-bold'
        },
        activeTintColor: Colors.accentColor
    }
})

const FiltersNavigator = createStackNavigator({
    Filters: FiltersScreen
}, {
    // navigationOptions: {
    //     drawerLabel: 'Filters'
    // },
    defaultNavigationOptions: {
        navigationOptions: {
            headerStyle: {
                backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : ''
            },
            headerTitleStyle: {
                fontFamily: 'open-sans-bold'
            },
            headerBackTitleStyle: {
                fontFamily: 'open-sans'
            },
            headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primaryColor
        }
    }
})

const MainNavigator = createDrawerNavigator({
    MealsFavs: MealsFavTabNavigator,
    Filters: FiltersNavigator
}, {
    contentOptions: {
        activeTintColor: Colors.accentColor,
        labelStyle: {
            fontFamily: 'open-sans-bold'
        }
    }
})


export default createAppContainer(MainNavigator)