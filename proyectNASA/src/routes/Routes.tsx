import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
//types
import { RootStackParams } from '../types';
//components
import Home from '../views/Home/Home';
import Detail from '../views/Detail';

const Stack = createNativeStackNavigator<RootStackParams>();
const routeScreenDefaultOptions = {
    headerStyle: {
        backgroundColor: 'rgba(7,26,93,255)',
    },
    headerTitleStyle: {
        color: '#fff',
    }
}

const Routes = () => (
    <NavigationContainer>
        <Stack.Navigator initialRouteName='Home'>
            <Stack.Screen name='Home' component={Home} options={routeScreenDefaultOptions}/>
            <Stack.Screen name='Detail' component={Detail} options={routeScreenDefaultOptions}/>
        </Stack.Navigator>
    </NavigationContainer>
);

export default Routes;