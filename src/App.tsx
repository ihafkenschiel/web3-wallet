import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {WalletCreate, Balance} from './components';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Balance" component={Balance} />
        <Stack.Screen name="WalletCreate" component={WalletCreate} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
