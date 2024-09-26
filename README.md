# React Native Wallet App

## Overview

This is a demo React Native application that allows users to:
- **Create a new Ethereum wallet**.
- **Display the balance** of their Ethereum wallet.
- **Send transactions** to other Ethereum addresses.

The app uses **ethers.js** to interact with the Ethereum blockchain and performs basic wallet operations such as generating a wallet, checking balance, and sending transactions.

## Features

- **Wallet Creation**: Generate a new Ethereum wallet (address and private key).
- **Balance Display**: Fetch and display the wallet's balance in ETH.
- **Transaction Sending**: Send a transaction by specifying the recipient's address and amount of ETH.
- **Secure Private Key Handling**: Private key is securely stored only in memory during the session.

## Project Structure

```
wallet-app/
├── src/
│   ├── api/                # Blockchain interaction code (Ethereum)
│   │   └── ethereum.ts
│   ├── components/         # UI components for wallet actions
│   │   ├── Balance.tsx
│   │   ├── SendTransactionForm.tsx
│   │   └── WalletCreate.tsx
│   ├── hooks/              # Custom hooks for managing wallet and balance
│   │   ├── useWallet.ts
│   │   └── useBalance.ts
│   ├── App.tsx             # Main application entry point
│   ├── Navigation.tsx      # Application navigation
│   └── config.ts           # Configuration file for constants
├── package.json
└── tsconfig.json
```

## Installation

To get started with the project, follow these steps:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/ihafkenschiel/web3-wallet
   cd web3-wallet
   ```

2. **Install dependencies**:
   Run the following command to install the project dependencies:
   ```bash
   yarn install
   ```

3. **Install Pods (iOS only)**:
   Navigate to the `ios` directory and install CocoaPods:
   ```bash
   cd ios
   pod install
   cd ..
   ```

4. **Set up Ethereum Provider**:
   Create a `.env` file in the project root and add your Infura API key:
   ```
   INFURA_API_KEY=your_infura_api_key_here
   ```

   To get an Infura API key:
   - Sign up at [https://infura.io/](https://infura.io/)
   - Create a new project and copy the API key
   - Paste the API key in the `.env` file

## Running the App

### Android
To run the app on an Android device or emulator:
```bash
yarn android
```

### iOS
To run the app on an iOS device or simulator:
```bash
yarn ios
```

### Metro Bundler
Start the Metro bundler with the following command:
```bash
yarn start
```

## How to Use

1. **Create a New Wallet**:
   - On launch, you’ll be prompted to create a new wallet by clicking the "Create New Wallet" button. The app will generate an Ethereum address and private key.
   
2. **View Wallet Balance**:
   - After creating a wallet, you’ll be navigated to the balance screen, where the balance of your Ethereum address will be displayed in ETH.

3. **Send a Transaction**:
   - To send ETH, navigate to the "Send Transaction" screen. Enter the recipient’s Ethereum address and the amount of ETH you want to send. Click "Send Transaction" to broadcast the transaction to the blockchain.

## Important Notes

- **Security**: This is a demo app and does not securely store private keys beyond the session. In production, consider using secure storage solutions like `react-native-keychain`.
- **Gas Fees**: The app uses a fixed gas fee and gas limit. For production use, integrate dynamic gas price estimation based on network conditions.
- **Ethereum Provider**: The app uses the Infura API to interact with the Ethereum network. Make sure you replace the API key with your own in the `ethereum.ts` file.

## Dependencies

- [React Native](https://reactnative.dev/)
- [ethers.js](https://docs.ethers.io/v5/)
- [@react-navigation/native](https://reactnavigation.org/)

## Future Enhancements

- **Secure Private Key Management**: Use `react-native-keychain` for securely storing private keys.
- **Multi-Chain Support**: Add support for multiple blockchains like Solana, Tezos, etc.
- **Wallet Import**: Allow users to import existing wallets using their private key or mnemonic.
- **Dynamic Gas Fee Estimation**: Implement real-time gas fee estimation based on network conditions.

## Contributing

Feel free to contribute to this project by submitting issues or pull requests. Fork the repository and make your changes in a separate branch.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/YourFeature`)
3. Commit your changes (`git commit -m 'Add YourFeature'`)
4. Push to the branch (`git push origin feature/YourFeature`)
5. Open a pull request

## License

This project is licensed under the MIT License - see the [LICENSE](license.md) file for details.
