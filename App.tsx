import { StyleSheet, Text, View } from "react-native"
import HomeScreen from "./components/review/home"
import DetailScreen from "./components/review/detail"
import AboutScreen from "./components/review/about"
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';


SplashScreen.preventAutoHideAsync();


const App = () => {
  const [loaded, error] = useFonts({
    'Pacifico-Regular': require('./assets/fonts/Pacifico-Regular.ttf'),
  });
  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);
  if (!loaded && !error) {
    return null;
  }
  return (<View>
    <HomeScreen />
    <DetailScreen />
    <AboutScreen />
  </View>)
}
const styles = StyleSheet.create({
  helloWorld: { paddingTop: 40 }
})
export default App