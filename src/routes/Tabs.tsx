import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import SchoolList from '../pages/SchoolList';
import CompanyList from '../pages/CompanyList';

const { Navigator, Screen } = createBottomTabNavigator();

function Tabs() {
    return (
        <Navigator 
            tabBarOptions={{
                style: {
                    elevation: 0,
                    shadowOpacity: 0,
                    height: 64,
                },
                tabStyle: {
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center'
                },
                iconStyle: {
                    flex: 0,
                    width: 20,
                    height: 20,
                },
                labelStyle: {
                    fontFamily: 'Poppins_400Regular',
                    fontSize: 13,
                    marginLeft: 16,
                    color: '#C1AA2F',
                },
                inactiveBackgroundColor: '#fafafc',
                activeBackgroundColor: '#000',
                inactiveTintColor: '#C1AA2F',
                activeTintColor: '#32264d',
            }}
        >
           
            <Screen name="SchoolList" component={SchoolList} 
            options={{
                tabBarLabel: 'Universidades',
                tabBarIcon: ( {color, size, focused} ) => {
                    return (
                        <Ionicons name="ios-school" size={size} color={ focused ? '#C1AA2F' : color} />
                    );
                }
            }}
            />
            <Screen name="CompanyList" component={CompanyList}
             options={{
                tabBarLabel: 'Empresas',
                tabBarIcon: ( {color, size, focused} ) => {
                    return (
                        <Ionicons name="ios-business" size={size} color={ focused ? '#C1AA2F' : color} />
                    );
                }
            }}
            />
        </Navigator>
    );
}

export default Tabs;
