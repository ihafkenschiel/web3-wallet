import React, {useState, useEffect} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {getBalance} from '../api/ethereum';

const Balance = () => {
  const address = '0x95222290DD7278Aa3Ddd389Cc1E1d165CC4BAfe5';
  const [balance, setBalance] = useState('');

  useEffect(() => {
    const fetchBalance = async () => {
      const bal = await getBalance(address);
      setBalance(bal);
    };
    fetchBalance();
  }, [address]);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Address: </Text>
      <Text style={styles.text}>{address}</Text>
      <Text style={styles.text}>Balance:</Text>
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
});

export default Balance;
