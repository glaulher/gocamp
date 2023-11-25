import { useState } from 'react';
import SplashScreen from '../screen/SplashScreen';
import { Redirect } from 'expo-router';

export default function App() {
  const [splashComplete, setSplashComplete] = useState(false);

  if (splashComplete) {
    return <Redirect href="/dashBoard/" />;
  }

  return <SplashScreen onComplete={setSplashComplete} />;
}
