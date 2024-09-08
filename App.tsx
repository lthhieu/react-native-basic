import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import { PACIFICO } from "./utils/constant";
import { NavigationContainer } from '@react-navigation/native';
import AppDrawer from "./components/navigation/app.drawer";
import { SafeAreaView } from 'react-native-safe-area-context';
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
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <NavigationContainer>
        <AppDrawer />
      </NavigationContainer>
    </SafeAreaView>
  )
}
export default App