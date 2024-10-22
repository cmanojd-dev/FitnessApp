import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Dashboard from '../screens/Dashboard';
import Attendance from '../screens/Attendance';
import {navigationRef} from './actions';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Expenses from '../screens/Expenses';
import {Image} from 'react-native';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const AgniTabs = [
  {name: 'Dashboard'},
  {name: 'Attendance'},
  {name: 'Expenses'},
];

const BottomTabBarStack = () => {
  if (Array.isArray(AgniTabs) && AgniTabs?.length > 0) {
    return (
      <Tab.Navigator
        screenOptions={{headerShown: false}}
        // tabBar={renderTabBar}
      >
        <Tab.Screen
          name="Dashboard"
          component={Dashboard}
          options={{
            tabBarLabel: 'Dashboard',
            tabBarIcon: () => (
              <Image
                source={require('../assets/images/dashboard.png')}
                style={{width: 30, height: 30}}
                resizeMode="cover"
              />
            ),
          }}
        />
        <Tab.Screen
          name="Attendance"
          component={Attendance}
          options={{
            tabBarLabel: 'Attendance',
            tabBarIcon: () => (
              <Image
                source={require('../assets/images/attendance.png')}
                style={{width: 30, height: 30}}
                resizeMode="cover"
              />
            ),
          }}
        />
        <Tab.Screen
          name="Expenses"
          component={Expenses}
          options={{
            tabBarLabel: 'Expenses',
            tabBarIcon: () => (
              <Image
                source={require('../assets/images/expenses.png')}
                style={{width: 30, height: 30}}
                resizeMode="cover"
              />
            ),
          }}
        />
      </Tab.Navigator>
    );
  } else {
    return <></>;
  }
};

const Routes = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <BottomTabBarStack />
    </NavigationContainer>
  );
};

export default Routes;
