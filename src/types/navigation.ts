import type {NativeStackScreenProps} from '@react-navigation/native-stack';

export type RootStackParamList = {
  Balance: {wallet: {privateKey: string; address: string}};
  WalletCreate: undefined;
};

export type BalanceScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'Balance'
>;

export type WalletCreateScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'WalletCreate'
>;
