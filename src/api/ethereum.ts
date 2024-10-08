import 'react-native-get-random-values';
import {formatEther, InfuraProvider, Wallet} from 'ethers';
import Config from 'react-native-config';

// Use Sepolia testnet
const provider = new InfuraProvider('sepolia', Config.INFURA_API_KEY);

export async function createWallet() {
  const wallet = Wallet.createRandom();
  return {
    privateKey: wallet.privateKey,
    address: wallet.address,
  };
}

export async function getBalance(address: string) {
  const balance = await provider.getBalance(address);
  return formatEther(balance);
}
