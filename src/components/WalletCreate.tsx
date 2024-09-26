import React from 'react';
import {StyleSheet, View, Button, Text} from 'react-native';

const WalletCreate = () => {
  const handleCreateWallet = () => {
    console.log('Create Wallet');
  };
  return (
    <View style={styles.container}>
      <Button title="Create New Wallet" onPress={handleCreateWallet} />
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
