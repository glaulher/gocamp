import {
  CardStyleInterpolators,
  createStackNavigator,
} from '@react-navigation/stack';

import Splash from '../screen/splash';
import { AppRoutes } from './app.routes';

const { Navigator, Screen } = createStackNavigator();

export function StackRoutes() {
  return (
    <Navigator
      initialRouteName="Splash"
      screenOptions={{
        headerShown: false,
        gestureDirection: 'horizontal',
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}
    >
      <Screen name="Splash" component={Splash} />

      <Screen
        name="AppRoutes"
        component={AppRoutes}
        options={{
          gestureEnabled: false, // desabilita retornar para a tela anterior
          // headerLeft: () => <></>,
        }}
      />
    </Navigator>
  );
}
