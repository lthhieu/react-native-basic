import { createNativeStackNavigator, NativeStackNavigationOptions } from "@react-navigation/native-stack";
import { RootProps, RootStackParamList } from "../../utils/navigation";
import { PACIFICO } from "../../utils/constant";
import DetailScreen from "../review/detail";
import HomeScreen from "../review/home";
import SimpleLineIcons from '@expo/vector-icons/SimpleLineIcons';
import { TouchableOpacity } from "react-native-gesture-handler";

const AppStack = () => {

    const Stack = createNativeStackNavigator<RootStackParamList>();
    return (
        <Stack.Navigator screenOptions={headerCss}>
            <Stack.Screen name="Home" options={{ title: 'Trang chủ' }} component={HomeScreen} />
            <Stack.Screen name="Detail" options={({ navigation }: { navigation: RootProps }) => ({
                title: 'Chi tiết', headerTitleAlign: 'left', headerSearchBarOptions: { headerIconColor: '#fff' }, headerLeft: (props) => (
                    <TouchableOpacity onPress={() => { navigation.navigate('Home') }}><SimpleLineIcons name="arrow-left" size={24} color="#fff" style={{ marginRight: 20 }} /></TouchableOpacity>
                ),
            })} component={DetailScreen} />
        </Stack.Navigator>
    )
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
export default AppStack