import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import {
    BottomTabBarHeightContext,
    createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import HomeScreen from './screens/HomeScreen';
import MyInfoScreen from './screens/MyInfoScreen';
import MapScreen from './screens/MapScreen';

import * as Icons from './Components/icons';
const Tab = createBottomTabNavigator();

const setOptions = (Icon: any) => {
    return {
        tabBarIcon: ({ color, size }: { color: String; size: Number }) => (
            <Icon color={color} size={size} />
        ),
    };
};
// const MyTabs = () => {}와 ()의 차이.
// {} 는 리턴값을 생성해서 넘겨줘야함
// () 는 리턴값이 알아서 넘어감
const MyTabs = () => (
    <Tab.Navigator
        tabBarOptions={{
            activeTintColor: '#00c300',
        }}
    >
        <Tab.Screen
            name="Home"
            component={HomeScreen}
            options={setOptions(Icons.HomeIcon)}
        />
        <Tab.Screen
            name="Map"
            component={MapScreen}
            options={setOptions(Icons.MapIcon)}
        />
        <Tab.Screen
            name="MyInfo"
            component={MyInfoScreen}
            options={setOptions(Icons.MyInfoIcon)}
        />
    </Tab.Navigator>
);

const App = () => {
    return (
        <NavigationContainer>
            <MyTabs />
        </NavigationContainer>
    );
};

export default App;
