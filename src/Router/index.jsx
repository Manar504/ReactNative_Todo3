import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../pages/Home';
import CompletedTodos from '../pages/Completed';
import UncompletedTodos from '../pages/UnCompleted'; 
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const Router = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator 
        screenOptions={{ 
          headerStyle: { backgroundColor: "#282c34" },
          headerTitleStyle: { color: "#61dafb", fontWeight: '700' },
          headerTitleAlign: "center",
          tabBarActiveTintColor: '#61dafb',
          tabBarInactiveTintColor: '#282c34',
          tabBarStyle: { backgroundColor: '#20232a' },
        }}
      >
        <Tab.Screen
          name='Home'
          component={Home}
          options={{
            headerTitle: "Home",
          }}
        ></Tab.Screen>

        <Tab.Screen
          name='Completed'
          component={CompletedTodos}
          options={{
            headerTitle: "Completed",
            headerBackTitle: "Back To Home",
            headerBackTitleStyle: "color:white",
            headerStyle: { backgroundColor: "#282c34" },
            headerTitleStyle: {
              color: "#61dafb",
            },
          }}
        ></Tab.Screen>

        {/* Add a new tab screen */}
        <Tab.Screen
          name='UnCompleted'
          component={UncompletedTodos}
          options={{
            headerTitle: "UncompletedTodos",
            headerBackTitle: "Back To Home",
            headerBackTitleStyle: "color:white",
            headerStyle: { backgroundColor: "#282c34" },
            headerTitleStyle: {
              color: "#61dafb",
            },
          }}
        ></Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Router;
