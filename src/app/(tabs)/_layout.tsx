import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs } from 'expo-router';

import theme from '../../theme';
import { Platform } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return (
    <FontAwesome
      size={24}
      style={{ marginBottom: -3, marginHorizontal: -3 }}
      {...props}
    />
  );
}

export default function TabLayout() {
  const insets = useSafeAreaInsets();
  return (
    <Tabs
      screenOptions={{
        tabBarLabelPosition: 'beside-icon',
        tabBarActiveTintColor: theme.COLORS.secondary,
        tabBarInactiveTintColor: theme.COLORS.text,

        headerShown: false,
        tabBarStyle: {
          height: 72 + insets.bottom,
          paddingBottom: 16 + insets.bottom,
          paddingTop: 16,
          paddingVertical: Platform.OS === 'ios' ? 20 : 0,
        },
      }}
    >
      <Tabs.Screen
        name="dashBoard/index"
        options={{
          title: 'Mural',
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="thumb-tack" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="page/index"
        options={{
          title: 'Página',
          tabBarIcon: ({ color }) => <TabBarIcon name="map" color={color} />,
        }}
      />
    </Tabs>
  );
}
