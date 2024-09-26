import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {WalletCreate, Balance} from './components';

const Drawer = createDrawerNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="WalletCreate" component={WalletCreate} />
        <Drawer.Screen name="Balance" component={Balance} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default App;
