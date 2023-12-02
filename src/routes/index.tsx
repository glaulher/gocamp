import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { SplashContext } from '../hook/useSplash';
import { StackRoutes } from './stack.routes';

export function Routes() {
  const [splashFinished, setSplashFinished] = useState(false);
  return (
    <NavigationContainer>
      <SplashContext.Provider value={{ splashFinished, setSplashFinished }}>
        <StackRoutes />
      </SplashContext.Provider>
    </NavigationContainer>
  );
}
