import React, {useState} from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';
import {createWallet} from '../api/ethereum';
import {useNavigation} from '@react-navigation/native';
import type {NativeStackNavigationProp} from '@react-navigation/native-stack';
import type {RootStackParamList} from '../types/navigation';

const WalletCreate = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const [wallet, setWallet] = useState({
    address: '',
    privateKey: '',
  });

  const handleCreateWallet = async () => {
    const newWallet = await createWallet();
    setWallet(newWallet);
    setTimeout(() => {
      navigation.navigate('Balance', {wallet: newWallet});
    }, 2000);
  };
  return (
    <View style={styles.container}>
      <Button title="Create New Wallet" onPress={handleCreateWallet} />
      {wallet.address && <Text>Address: {wallet.address}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default WalletCreate;
