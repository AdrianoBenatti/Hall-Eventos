import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Landing from '../pages/Landing';
import Info from '../pages/Info';
import Payment from '../pages/Payment';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Event from '../pages/Event';
import Tabs from './Tabs';

const { Navigator, Screen } = createStackNavigator();

function AppStack() {
    return (
        <NavigationContainer>
            <Navigator screenOptions={{ headerShown: false }}>
                <Screen name="Landing" component={Landing} />
                <Screen name="Tabs" component={Tabs} />
                <Screen name="Event" component={Event} />
                <Screen name="Login" component={Login} />
                <Screen name="Register" component={Register} />
                <Screen name="Payment" component={Payment} />
                <Screen name="Info" component={Info} />
            </Navigator>
        </NavigationContainer>
    );
}

export default AppStack; 