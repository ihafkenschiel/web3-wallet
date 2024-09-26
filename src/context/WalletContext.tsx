import React, {createContext, useState, useContext, ReactNode} from 'react';

type Wallet = {
  address: string;
  privateKey: string;
};

type WalletContextType = {
  wallet: Wallet | null;
  setWallet: (wallet: Wallet | null) => void;
};

const WalletContext = createContext<WalletContextType | undefined>(undefined);

export const WalletProvider: React.FC<{children: ReactNode}> = ({children}) => {
  const [wallet, setWallet] = useState<Wallet | null>(null);

  return (
    <WalletContext.Provider value={{wallet, setWallet}}>
      {children}
    </WalletContext.Provider>
  );
};

export const useWallet = () => {
  const context = useContext(WalletContext);
  if (context === undefined) {
    throw new Error('useWallet must be used within a WalletProvider');
  }
  return context;
};
