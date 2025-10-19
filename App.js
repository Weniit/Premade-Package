import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

//Simple Navigation Setup [1]

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaProvider} from "react-native-safe-area-context";

//Navigation With Bottom Tab Navigator [2]
import Main from "./src/screens/Main/Main";

//Navigation With Navigation Drawer [3]
import { createDrawerNavigator } from "@react-navigation/drawer";

import Landing from "./src/screens/Landing";
import HomeScreen from './src/screens/HomeScreen';
import Settings from './src/screens/Settings';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();



// [1] simple navigation

// export default function App() {
//   return (
//     <SafeAreaProvider>
//       <NavigationContainer>
//         <Stack.Navigator>
//           <Stack.Screen 
//             name="Landing" 
//             component={Landing} 
//             options={{headerShown: false}} />
//             <Stack.Screen
//               name="HomeScreen"
//               component={HomeScreen}
//               options={{headerShown: false}}
//             />
//             <Stack.Screen
//               name="Settings"
//               component={Settings}
//               options={{headerShown: false}}
//             />
//         </Stack.Navigator>
//       </NavigationContainer>
//     </SafeAreaProvider>
//   );
// }

// [2] navigation with bottom tab navigator

// export default function App() {
//   return (
//     <SafeAreaProvider>
//       <NavigationContainer>
//         <Stack.Navigator>
//           <Stack.Screen 
//             name="Landing" 
//             component={Landing} 
//             options={{headerShown: false}} />
//             <Stack.Screen
//               name="Main"
//               component={Main}
//               options={{headerShown: false}}
//             />

//         </Stack.Navigator>
//       </NavigationContainer>
//     </SafeAreaProvider>
//   );
// }

// [3] navigation with navigation drawer

function HomeDrawer() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
        drawerStyle: {
          backgroundColor: "#ffffff",
          width: 250,
        },
      }}
    >
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Settings" component={Settings} />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen 
            name="Landing" 
            component={Landing} 
            options={{headerShown: false}} />
            <Stack.Screen
              name="Home"
              component={HomeDrawer}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="Settings"
              component={Settings}
              options={{headerShown: false}}
            />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}