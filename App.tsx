// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Open up App.tsx to start working on your app!</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

// import React, { useCallback, useEffect, useState } from 'react';
// import { Text, View } from 'react-native';
// import Entypo from '@expo/vector-icons/Entypo';
// import * as SplashScreen from 'expo-splash-screen';
// import * as Font from 'expo-font';
// import Splash from './src/screen/splash';
// import { Dashboard } from './src/screen/Dashboard';
// import * as Updates from 'expo-updates';

// // Keep the splash screen visible while we fetch resources
// SplashScreen.preventAutoHideAsync();







// export default function App() {
//   const [appIsReady, setAppIsReady] = useState(false);


//   const [splashComplete, setSplashComplete] = useState(false);

//   useEffect(() => {
//     async function updateApp() {
//       const { isAvailable } = await Updates.checkForUpdateAsync();
//       if (isAvailable) {
//         await Updates.fetchUpdateAsync();
//         await Updates.reloadAsync();
//       }
//     }
//     updateApp();
//   }, []);

//    useEffect(() => {
//     async function prepare() {
//       try {
//         // Pre-load fonts, make any API calls you need to do here
//         await Font.loadAsync(Entypo.font);
//         // Artificially delay for two seconds to simulate a slow loading
//         // experience. Please remove this if you copy and paste the code!
//         await new Promise(resolve => setTimeout(resolve, 2000));
//       } catch (e) {
//         console.warn(e);
//       } finally {
//         // Tell the application to render
//         setAppIsReady(true);
//       }
//     }
//          prepare();
//    }, []);

//      const onLayoutRootView = useCallback(async () => {
//     if (appIsReady) {
//       // This tells the splash screen to hide immediately! If we call this after
//       // `setAppIsReady`, then we may see a blank screen while the app is
//       // loading its initial state and rendering its first pixels. So instead,
//       // we hide the splash screen once we know the root view has already
//       // performed layout.
//       await SplashScreen.hideAsync();
//     }
//   }, [appIsReady]);

//   if (!appIsReady) {
//     return null;
//   }

//   return (
//     // <View
//     //   style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
//     //   onLayout={onLayoutRootView}>
//     //   <Text>SplashScreen Demo! 👋</Text>
//     //   <Entypo name="rocket" size={30} />
//     // </View>
    
      
   
//     appIsReady? <View onLayout={onLayoutRootView}><Dashboard /></View> :  <Splash onComplete={appIsReady}  />
    
//   );
// }



// if (splashComplete) {
  //   return <Dashboard />;
  // }

  // useEffect(() => {
  //   async function prepare() {
  //     try {
  //       // Pre-load fonts, make any API calls you need to do here
  //       await Font.loadAsync(Entypo.font);
  //       // Artificially delay for two seconds to simulate a slow loading
  //       // experience. Please remove this if you copy and paste the code!
  //       await new Promise(resolve => setTimeout(resolve, 2000));
  //     } catch (e) {
  //       console.warn(e);
  //     } finally {
  //       // Tell the application to render
  //       setAppIsReady(true);
  //     }
  //   }

  //   prepare();
  // }, []);

  // const onLayoutRootView = useCallback(async () => {
  //   if (appIsReady) {
  //     // This tells the splash screen to hide immediately! If we call this after
  //     // `setAppIsReady`, then we may see a blank screen while the app is
  //     // loading its initial state and rendering its first pixels. So instead,
  //     // we hide the splash screen once we know the root view has already
  //     // performed layout.
  //     await SplashScreen.hideAsync();
  //   }
  // }, [appIsReady]);

  // if (!appIsReady) {
  //   return null;
  // }



//   import React, { useEffect, useState } from 'react';
// import { Text, View } from 'react-native';
// import Entypo from '@expo/vector-icons/Entypo';
// import * as SplashScreen from 'expo-splash-screen';
// import * as Font from 'expo-font';
// import { Dashboard } from './src/screen/Dashboard';
// import * as Updates from 'expo-updates';
// import Splash from './src/screen/splash';

// // Keep the splash screen visible while we fetch resources
// SplashScreen.preventAutoHideAsync();

// export default function App() {
//   const [isAppReady, setIsAppReady] = useState(false);

//   useEffect(() => {
//     async function updateApp() {
//       const { isAvailable } = await Updates.checkForUpdateAsync();
//       if (isAvailable) {
//         await Updates.fetchUpdateAsync();
//         await Updates.reloadAsync();
//       }
//     }
//     updateApp();
//   }, []);

//   useEffect(() => {
//     async function prepare() {
//       try {
//         // Pre-load fonts, make any API calls you need to do here
//         await Font.loadAsync(Entypo.font);
//         // Artificially delay for two seconds to simulate a slow loading
//         // experience. Please remove this if you copy and paste the code!
//         await new Promise(resolve => setTimeout(resolve, 2000));
//       } catch (e) {
//         console.warn(e);
//       } finally {
//         // Tell the application to render
//         setIsAppReady(true);
//       }
//     }
//     prepare();
//   }, []);

//   if (!isAppReady) {
//     return <Splash onComplete={() => setIsAppReady(true)} />;
//   }

//   return <Dashboard />;
// }
import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Dashboard } from './src/screen/Dashboard';
import Splash from './src/screen/splash';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  const [splashComplete, setSplashComplete] = useState(false);

  return (
    // <NavigationContainer>
    splashComplete? <Dashboard /> :  <Splash onComplete={setSplashComplete}  />
    // </NavigationContainer>
  );
}

