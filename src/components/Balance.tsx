import React, {useState, useEffect} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {getBalance} from '../api/ethereum';
import {useRoute} from '@react-navigation/native';
import {BalanceScreenProps} from '../types/navigation';

const Balance = () => {
  const route = useRoute<BalanceScreenProps['route']>();
  const wallet = route.params?.wallet;

  const [balance, setBalance] = useState('');

  useEffect(() => {
    const fetchBalance = async () => {
      if (wallet?.address) {
        const bal = await getBalance(wallet.address);
        setBalance(bal);
      }
    };
    fetchBalance();
  }, [wallet?.address]);

  if (!wallet) {
    return (
      <View style={styles.container}>
        <Text style={[styles.text, styles.centeredText]}>
          No wallet information available
        </Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={[styles.text, styles.boldText]}>Address: </Text>
      <Text style={styles.text}>{wallet.address}</Text>
      <Text style={[styles.text, styles.boldText]}>Balance:</Text>
      <Text style={styles.text}>{balance}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  text: {
    fontSize: 20,
    marginVertical: 10,
  },
  centeredText: {
    textAlign: 'center',
  },
  boldText: {
    fontWeight: 'bold',
  },
});

export default Balance;
