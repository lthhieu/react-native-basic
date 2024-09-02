import { StyleSheet, Text, View } from "react-native"
import HomeScreen from "./components/review/home"
import DetailScreen from "./components/review/detail"
import AboutScreen from "./components/review/about"
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import { PACIFICO } from "./utils/constant";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator, NativeStackNavigationOptions } from '@react-navigation/native-stack';
import { RootStackParamList } from "./utils/navigation";


SplashScreen.preventAutoHideAsync();


const App = () => {
  const [loaded, error] = useFonts({
    [PACIFICO]: require('./assets/fonts/Pacifico-Regular.ttf'),
  });
  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);
  if (!loaded && !error) {
    return null;
  }

  const Stack = createNativeStackNavigator<RootStackParamList>();

  return (<NavigationContainer>
    <Stack.Navigator initialRouteName="Home" screenOptions={headerCss}>
      <Stack.Screen name="Home" options={{ title: 'Trang chủ' }} component={HomeScreen} />
      <Stack.Screen name="Detail" options={{ title: 'Chi tiết', headerBackTitle: 'hieu' }} component={DetailScreen} />
      {/* <Stack.Screen name="About" options={{ title: 'About' }} component={DetailScreen} /> */}
    </Stack.Navigator>
  </NavigationContainer>)
}
const headerCss: NativeStackNavigationOptions = {
  headerStyle: {
    backgroundColor: '#f4511e',
  },
  headerTitleStyle: {
    color: '#fff',
    fontSize: 24,
    fontFamily: PACIFICO
  },
  headerTitleAlign: 'center',
}
export default App