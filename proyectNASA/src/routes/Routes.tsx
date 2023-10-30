import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
//types
import { RootStackParams } from '../types';
//components
import Home from '../views/Home/Home';

const Stack = createNativeStackNavigator<RootStackParams>();

const Routes = () => (
    <NavigationContainer>
        <Stack.Navigator initialRouteName='Home'>
            <Stack.Screen name='Home' component={Home}/>
            {/* <Stack.Screen name='Detail' /> */}
        </Stack.Navigator>
    </NavigationContainer>
);

export default Routes;