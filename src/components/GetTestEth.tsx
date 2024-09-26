import Clipboard from '@react-native-clipboard/clipboard';
import React from 'react';
import {
  Button,
  Linking,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {useWallet} from '../context/WalletContext';

const GetTestEth = () => {
  const {wallet} = useWallet();
  const sepoliaFaucetUrl = 'https://faucets.chain.link/sepolia';

  const openFaucet = () => {
    Linking.openURL(sepoliaFaucetUrl);
  };

  const copyToClipboard = () => {
    if (wallet?.address) {
      Clipboard.setString(wallet.address);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>Get Sepolia Test ETH</Text>
      <Text style={styles.instructions}>
        To get test ETH on the Sepolia network, you'll need to complete a
        verification process. Follow these steps:
      </Text>
      <Text style={styles.steps}>
        1. Copy your wallet address by tapping the address below.{'\n'}
        2. Click the "Go to Sepolia Faucet" button.{'\n'}
        3. On the faucet website, you'll need to log in.{'\n'}
        4. Connect your GitHub account for verification.{'\n'}
        5. Once verified, paste your wallet address into the faucet.{'\n'}
        6. Complete any additional steps (e.g., Captcha).{'\n'}
        7. Request the test ETH.{'\n'}
        8. Wait for the transaction to be processed.
      </Text>
      <TouchableOpacity onPress={copyToClipboard}>
        <TextInput
          style={styles.addressInput}
          value={wallet?.address}
          editable={false}
        />
      </TouchableOpacity>
      <Text style={styles.copyInstructions}>Tap the address to copy</Text>
      <Button title="Go to Sepolia Faucet" onPress={openFaucet} />
      <Text style={styles.note}>
        Note: The verification process helps prevent abuse of the faucet. Make
        sure you have a GitHub account ready before proceeding.
      </Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  instructions: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: 'center',
  },
  steps: {
    fontSize: 14,
    marginBottom: 30,
    textAlign: 'left',
  },
  addressInput: {
    width: '100%',
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginBottom: 10,
  },
  copyInstructions: {
    fontSize: 12,
    color: 'gray',
    marginBottom: 20,
  },
  note: {
    fontSize: 12,
    color: 'gray',
    marginTop: 20,
    textAlign: 'center',
    fontStyle: 'italic',
  },
});

export default GetTestEth;
