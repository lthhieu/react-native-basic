import { TouchableOpacity } from "react-native"
import HomeScreen from "./components/review/home"
import DetailScreen from "./components/review/detail"
import AboutScreen from "./components/review/about"
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import { PACIFICO } from "./utils/constant";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator, NativeStackNavigationOptions } from '@react-navigation/native-stack';
import { RootProps, RootStackParamList } from "./utils/navigation";
import SimpleLineIcons from '@expo/vector-icons/SimpleLineIcons';

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
      <Stack.Screen name="Detail" options={({ navigation }: { navigation: RootProps }) => ({
        title: 'Chi tiết', headerTitleAlign: 'left', headerSearchBarOptions: { headerIconColor: '#fff' }, headerLeft: (props) => (
          <TouchableOpacity onPress={() => { navigation.navigate('Home') }}><SimpleLineIcons name="arrow-left" size={24} color="#fff" style={{ marginRight: 20 }} /></TouchableOpacity>
        ),
      })} component={DetailScreen} />
      {/* <Stack.Screen name="About" options={{ title: 'About' }} component={DetailScreen} /> */}
    </Stack.Navigator>
  </NavigationContainer>)
}
const headerCss: NativeStackNavigationOptions = {
  headerStyle: {
    backgroundColor: '#FF8A8A',
  },
  headerTitleStyle: {
    color: '#fff',
    fontSize: 24,
    fontFamily: PACIFICO
  },
  headerTitleAlign: 'center',
}
export default App