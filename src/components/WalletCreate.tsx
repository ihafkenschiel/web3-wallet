import {useNavigation} from '@react-navigation/native';
import type {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React, {useState} from 'react';
import {Button, StyleSheet, View, Text, ActivityIndicator} from 'react-native';
import {createWallet} from '../api/ethereum';
import {useWallet} from '../context/WalletContext';
import type {RootStackParamList} from '../types/navigation';

const WalletCreate = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const {setWallet} = useWallet();
  const [isLoading, setIsLoading] = useState(false);

  const handleCreateWallet = async () => {
    setIsLoading(true);
    try {
      const newWallet = await createWallet();
      setWallet(newWallet);
      setIsLoading(false);
      navigation.navigate('Balance');
    } catch (error) {
      console.error('Error creating wallet:', error);
      setIsLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      {isLoading ? (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color="#0000ff" />
          <Text style={styles.loadingText}>Creating your wallet...</Text>
        </View>
      ) : (
        <Button title="Create New Wallet" onPress={handleCreateWallet} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  loadingContainer: {
    alignItems: 'center',
  },
  loadingText: {
    marginTop: 10,
    fontSize: 16,
  },
});

export default WalletCreate;
