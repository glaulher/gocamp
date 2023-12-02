import { createContext, useContext } from 'react';

type SplashContextType = {
  splashFinished: boolean;
  setSplashFinished: (value: boolean) => void;
};

export const SplashContext = createContext<SplashContextType>({
  splashFinished: false,
  setSplashFinished: () => {},
});

export const useSplash = () => useContext(SplashContext);
