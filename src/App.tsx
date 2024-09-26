import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from 'react-native-screens/native-stack';
import WalletCreate from './components/WalletCreate';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="WalletCreate" component={WalletCreate} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
