import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {WalletCreate, Balance, GetTestEth} from './components';
import {RootStackParamList} from './types/navigation';
import {WalletProvider} from './context/WalletContext';

const Stack = createNativeStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <WalletProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="WalletCreate" component={WalletCreate} />
          <Stack.Screen name="Balance" component={Balance} />
          <Stack.Screen name="GetTestEth" component={GetTestEth} />
        </Stack.Navigator>
      </NavigationContainer>
    </WalletProvider>
  );
};

export default App;
