import React, {useState, useEffect, useCallback} from 'react';
import {StyleSheet, View, Text, Button, TouchableOpacity} from 'react-native';
import {getBalance} from '../api/ethereum';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../types/navigation';
import {useWallet} from '../context/WalletContext';

const Balance = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const {wallet} = useWallet();
  const [balance, setBalance] = useState('');
  const [isRefreshing, setIsRefreshing] = useState(false);

  const fetchBalance = useCallback(async () => {
    if (wallet?.address) {
      setIsRefreshing(true);
      try {
        const bal = await getBalance(wallet.address);
        setBalance(bal);
      } catch (error) {
        console.error('Error fetching balance:', error);
      } finally {
        setIsRefreshing(false);
      }
    }
  }, [wallet?.address]);

  useEffect(() => {
    fetchBalance();
  }, [fetchBalance]);

  // Handle case where wallet is not available
  if (!wallet) {
    return (
      <View style={styles.container}>
        <Text style={[styles.text, styles.centeredText]}>
          No wallet information available
        </Text>
      </View>
    );
  }

  // Check if balance is zero
  const isBalanceZero = balance === '0.0' || balance === '0';

  return (
    <View style={styles.container}>
      <View style={styles.balanceContainer}>
        <View>
          <Text style={[styles.text, styles.boldText]}>Address: </Text>
          <Text style={styles.text}>{wallet.address}</Text>
          <Text style={[styles.text, styles.boldText]}>Balance:</Text>
          <Text style={styles.text}>{balance} ETH</Text>
        </View>
      </View>

      {/* Display button and message if balance is zero */}
      {isBalanceZero && (
        <View style={styles.zeroBalanceContainer}>
          <Text style={styles.instructionsText}>
            Your wallet has no ETH. Go to the Sepolia Testnet Faucet to get some
            test ETH.
          </Text>
          <Button
            title="Get Test ETH"
            onPress={() => navigation.navigate('GetTestEth')}
          />
        </View>
      )}

      <TouchableOpacity
        style={styles.refreshButton}
        onPress={fetchBalance}
        disabled={isRefreshing}>
        <Text style={styles.refreshButtonText}>
          {isRefreshing ? 'Refreshing...' : 'Refresh'}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  balanceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
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
  zeroBalanceContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  instructionsText: {
    fontSize: 16,
    color: 'gray',
    marginBottom: 10,
    textAlign: 'center',
  },
  refreshButton: {
    backgroundColor: '#007AFF',
    padding: 10,
    borderRadius: 5,
  },
  refreshButtonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default Balance;
